---
Creation Date: 2021-08-04 13:08
Last Modified Date: Wednesday 4th August 2021 13:08:11
Author: Jimmy Briggs <jimbrig1993@outlook.com>
Alias: Windows-Search
Tags: ["#Windows"]
---

# Debugging Windows Search Issues and High CPU Usage

## Diagnosing and Repairing High CPU Usage

![[Pasted image 20210804131025.png]]

### Restart the Windows Search Service

To get a listing of *all* available services, both running and stopped run `Get-Service`:

![[Pasted image 20210804131401.png]]

Can disable the service through `services.msc` or using powershell:

```powershell
# diable the service:
Set-Service -Name "WSearch" -Status stopped -StartupType disabled

# re-enable automatic startup
Set-Service -Name "WSearch" -StartupType automatic

# reboot system

```

Alternatively, use [[Command Prompt - CMD]]:

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

#### Reset via Batch File

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

***

Links: 

Sources:
- [Search indexing in Windows 10: FAQ (microsoft.com)](https://support.microsoft.com/en-us/windows/search-indexing-in-windows-10-faq-da061c83-af6b-095c-0f7a-4dfecda4d15a)
- [Fix: High CPU Usage By searchindexer.exe - Appuals.com](https://appuals.com/high-cpu-usage-by-searchindexer-exe/)
- [Windows Search Indexer suddenly using too much CPU, help please - Windows 10 Forums (tenforums.com)](https://www.tenforums.com/performance-maintenance/110422-windows-search-indexer-suddenly-using-too-much-cpu-help-please.html)
- [Enable or Disable Search Indexing in Windows | Tutorials (tenforums.com)](https://www.tenforums.com/tutorials/93666-enable-disable-search-indexing-windows.html)
- [Use Indexer Diagnostics App for Windows Search Issues in Windows 10 | Tutorials (tenforums.com)](https://www.tenforums.com/tutorials/148377-use-indexer-diagnostics-app-windows-search-issues-windows-10-a.html)
- [Windows Search Indexer suddenly using too much CPU, help please - Windows 10 Forums (tenforums.com)](https://www.tenforums.com/performance-maintenance/110422-windows-search-indexer-suddenly-using-too-much-cpu-help-please.html)
- [voidtools](https://www.voidtools.com/)
