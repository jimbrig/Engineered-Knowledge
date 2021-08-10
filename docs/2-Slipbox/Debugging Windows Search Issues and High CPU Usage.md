---
Creation Date: 2021-08-04 13:08
Last Modified Date: Wednesday 4th August 2021 13:08:11
Author: Jimmy Briggs <jimbrig1993@outlook.com>
Alias: Windows-Search
Tags: ["#Windows"]
---

# Debugging Windows Search Issues and High CPU Usage

## Contents

- [Diagnosing and Repairing High CPU Usage](#Diagnosing%20and%20Repairing%20High%20CPU%20Usage)
	- [Restart the Windows Search Service](#Restart%20the%20Windows%20Search%20Service)
	- [Run the Search Diagnostic Troubleshooter](#Run%20the%20Search%20Diagnostic%20Troubleshooter)
	- [Manually Reset Windows Search and Rebuild the Index](#Manually%20Reset%20Windows%20Search%20and%20Rebuild%20the%20Index)
		- [Reset via Registry](#Reset%20via%20Registry)
		- [Reset Service and Rebuild via Batch File](#Reset%20Service%20and%20Rebuild%20via%20Batch%20File)
		- [Rebuild without Resetting via Batch File](#Rebuild%20without%20Resetting%20via%20Batch%20File)
	- [Defrag the Search index database Windows.edb to reduce the file size](#Defrag%20the%20Search%20index%20database%20Windows.edb%20to%20reduce%20the%20file%20size)
	- [Notes](#Notes)


## Diagnosing and Repairing High CPU Usage

![](assets/Pasted%20image%2020210804131025.png)

### Restart the Windows Search Service

To get a listing of *all* available services, both running and stopped run `Get-Service`:

![](assets/Pasted%20image%2020210804131401.png)

Can disable the service through `services.msc` or using powershell:

```powershell
# diable the service:
Set-Service -Name "WSearch" -Status stopped -StartupType disabled

# re-enable automatic startup
Set-Service -Name "WSearch" -StartupType automatic

# reboot system

```

Alternatively, use [Command Prompt - CMD](Command%20Prompt%20-%20CMD):

Get a list of all running services:

```powershell
sc queryex state=all type=service
```

Restart services using `net stop` and start services with `net start`:

```powershell
net stop "WSearch"

net start "WSearch"
```

Alternatively, you can use the more advanced `sc` command:

```powershell
# start / stop
sc stop "WSearch"
sc start "WSearch"

# various startup options:
sc config "WSearch" start=disabled
sc config "WSearch" start=auto
sc config "WSearch" start=demand
sc config "WSearch" start=delayed-auto
```

### Run the Search Diagnostic Troubleshooter

```powershell
msdt.exe -ep SystemSettings_Troubleshoot_L2 -id SearchDiagnostic
```

If necessary, the troubleshooter fixes the NTFS permissions for the Windows Search data folder so that the `NT AUTHORITY\SYSTEM` account has the required permissions. By default, the search data folder is located at `%ProgramData%\Microsoft\Search\Data\`. The troubleshooter can also reset the Windows Search settings and force a rebuild of the Search index if deemed necessary.

### Manually Reset Windows Search and Rebuild the Index

The Search troubleshooter is the most preferred way to troubleshoot search and indexing issues, as it automates many things (depending upon the checkbox options you selected).

However, if you want to manually reset Windows Search, delete and rebuild the index, use these steps:

#### Reset via Registry

1. Start the Registry Editor `regedit.exe` and go to:    `HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows Search`
2. Change the registry value `SetupCompletedSuccessfully` data from `1` to `0`.
3.  Exit the Registry Editor.
4. Open the Services MMC (`services.msc`)
5. Restart the Windows Search service

#### Reset Service and Rebuild via Batch File

- [linktobatchfile]() - saved as `rebuild-search-index.bat` in my `C:\bin` directory:

```batch
sc config wsearch start= disabled
net stop wsearch
REG ADD "HKLM\SOFTWARE\Microsoft\Windows Search" /v SetupCompletedSuccessfully /t REG_DWORD /d 0 /f
del "%ProgramData%\Microsoft\Search\Data\Applications\Windows\Windows.edb"
:wsearch
sc config wsearch start= delayed-auto
net start wsearch
IF NOT %ERRORLEVEL%==0 (goto :wsearch) ELSE goto :END
:END
```

#### Rebuild without Resetting via Batch File

```batch
sc config wsearch start= disabled
net stop wsearch
del "%ProgramData%\Microsoft\Search\Data\Applications\Windows\Windows.edb"
:wsearch
sc config wsearch start= delayed-auto
net start wsearch
IF NOT %ERRORLEVEL%==0 (goto :wsearch) ELSE goto :END
:END
```

### Defrag the Search index database Windows.edb to reduce the file size

If you index too many files & folders and the Outlook PST files, the Windows search index database file Windows.edb would grow huge in size. In some instances, the file size can be larger than 50 GB. That’s because, in Windows 8 and Windows 10, both properties and persistent indexes are stored in Windows.edb. Also, Windows 8, Windows 8.1 and Windows 10 index the entire contents of files, regardless of their size.

To reduce the Windows search index database size, index less content. Another option to reduce the size of Windows.edb is to compact or defrag the file using `esentutl.exe`[^1]. Follow these steps:

Open an admin Command Prompt window, and run these commands:

```powershell
sc config wsearch start= disabled
net stop wsearch
esentUtl.exe /d "$env:allusersprofile\Microsoft\Search\Data\Applications\Windows\Windows.edb"
sc config wsearch start= delayed-auto
net start wsearch
```

The above commands stop/disable Windows Search, compact (defrag) the search index database, and then start Windows Search. Compaction of the `Windows.edb` database has reduced the size to 200 MB from 310 MB on my computer — ~30% savings.

Resetting the Search index, or removing unwanted folder locations from the search index, and compacting the database would certainly improve the search performance in your system.

![](assets/Pasted%20image%2020210804134010.png)

### Notes

- Access search settings from Control Panel via: `control srchadmin.dll`

***

Links: [WindowsDevEnv](Windows%20Developer%20Environment.md) | [Computer-Setup](../1-Maps-of-Content/MOC%20-%20Setup.md) | [Windows Command Line Commands Overview](Windows%20Command%20Line%20Commands%20Overview.md)

Sources:

* [Windows Search Indexer suddenly using too much CPU, help please - Windows 10 Forums](https://www.tenforums.com/performance-maintenance/110422-windows-search-indexer-suddenly-using-too-much-cpu-help-please.html)
* [Fix: High CPU Usage By searchindexer.exe - Appuals.com](https://appuals.com/high-cpu-usage-by-searchindexer-exe/)
* [High processor usage by indexer - Windows 10 Forums](https://www.tenforums.com/performance-maintenance/60534-high-processor-usage-indexer.html)
* [searchindexer.exe extermemly high cpu usage - for days - Microsoft Community](https://answers.microsoft.com/en-us/windows/forum/windows_8-performance/searchindexerexe-extermemly-high-cpu-usage-for/362fdc15-48f3-42d2-9c09-b2af07c198fd)
* [SearchIndexer.exe taking up 15-20% CPU after indexing complete](https://social.technet.microsoft.com/Forums/windows/en-US/b73b6db7-117f-4985-8c53-9cb610173b1d/searchindexerexe-taking-up-1520-cpu-after-indexing-complete?forum=w7itproperf)
* [Enable or Disable Search Indexing in Windows | Tutorials](https://www.tenforums.com/tutorials/93666-enable-disable-search-indexing-windows.html)
* [Indexing Process in Windows Search - Win32 apps | Microsoft Docs](https://docs.microsoft.com/en-us/windows/win32/search/-search-indexing-process-overview#stage-3-updating-the-index)
* [Search indexing in Windows 10: FAQ](https://support.microsoft.com/en-us/windows/search-indexing-in-windows-10-faq-da061c83-af6b-095c-0f7a-4dfecda4d15a)
* [Use Indexer Diagnostics App for Windows Search Issues in Windows 10 | Tutorials](https://www.tenforums.com/tutorials/148377-use-indexer-diagnostics-app-windows-search-issues-windows-10-a.html)
* [Windows Search Indexer suddenly using too much CPU, help please - Windows 10 Forums](https://www.tenforums.com/performance-maintenance/110422-windows-search-indexer-suddenly-using-too-much-cpu-help-please.html)
* [Microsoft windows search indexer is constantly running and using - Microsoft Community](https://answers.microsoft.com/en-us/windows/forum/all/microsoft-windows-search-indexer-is-constantly/c17d1531-c891-4e1f-9fe6-2e6868ba9237)
* [How to perform a clean boot in Windows](https://support.microsoft.com/en-us/topic/how-to-perform-a-clean-boot-in-windows-da2f9573-6eec-00ad-2f8a-a97a1807f3dd)
* [jimbrig - Microsoft Community](https://answers.microsoft.com/en-us/profile/b2d7a85b-c14c-40f3-b739-5bf0934992f1?sort=LastReplyDate&dir=Desc&tab=Threads&forum=allcategories&meta=&status=&mod=&advFil=&postedAfter=undefined&postedBefore=undefined&threadType=All&page=1)
* [Microsoft Support](https://support.microsoft.com/)
* [Windows Search is not working; Search Failed to Initialize in Windows 10](https://www.thewindowsclub.com/windows-search-indexer-not-working)
* [What is the Windows.edb file in Windows 10](https://www.thewindowsclub.com/windows-edb-file)
* [How to start and stop services manually on Windows 10 | Windows Central](https://www.windowscentral.com/how-start-and-stop-services-windows-10#mange_services_powershell_windows10)
* [korwbrkr.dll - What is korwbrkr.dll?](https://www.processlibrary.com/en/directory/files/korwbrkr/337581/)
* [How to Reset & Rebuild Windows Search Index Completely » Winhelponline](https://www.winhelponline.com/blog/reset-rebuild-windows-search-index-fix-problems/#:~:text=%20Rebuild%20Search%20Index%20using%20Batch%20file%20%28without,reset_search.bat%20and%20click%20Run%20as%20administrator.%20More%20)
* [What is Enhanced Search (Indexing Options) in Windows 10? » Winhelponline](https://www.winhelponline.com/blog/what-is-enhanced-search-in-windows-10/)
* [Search indexing in Windows 10: FAQ (microsoft.com)](https://support.microsoft.com/en-us/windows/search-indexing-in-windows-10-faq-da061c83-af6b-095c-0f7a-4dfecda4d15a)
- [Fix: High CPU Usage By searchindexer.exe - Appuals.com](https://appuals.com/high-cpu-usage-by-searchindexer-exe/)
- [Windows Search Indexer suddenly using too much CPU, help please - Windows 10 Forums (tenforums.com)](https://www.tenforums.com/performance-maintenance/110422-windows-search-indexer-suddenly-using-too-much-cpu-help-please.html)
- [Enable or Disable Search Indexing in Windows | Tutorials (tenforums.com)](https://www.tenforums.com/tutorials/93666-enable-disable-search-indexing-windows.html)
- [Use Indexer Diagnostics App for Windows Search Issues in Windows 10 | Tutorials (tenforums.com)](https://www.tenforums.com/tutorials/148377-use-indexer-diagnostics-app-windows-search-issues-windows-10-a.html)
- [Windows Search Indexer suddenly using too much CPU, help please - Windows 10 Forums (tenforums.com)](https://www.tenforums.com/performance-maintenance/110422-windows-search-indexer-suddenly-using-too-much-cpu-help-please.html)
- [voidtools](https://www.voidtools.com/)


[^1]: [Esentutl | Microsoft Docs](https://docs.microsoft.com/en-us/previous-versions/windows/it-pro/windows-server-2012-R2-and-2012/hh875546(v=ws.11))