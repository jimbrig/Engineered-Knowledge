---
Creation Date: 2021-07-24 03:13
Last Modified Date: Saturday 24th July 2021 03:16:10
Author: Jimmy Briggs <jimbrig1993@outlook.com>
Alias: Start an Offline Scan with Windows Defender from PowerShell
Tags:
  [
    "PowerShell",
    "#Windows",
    "#Security",
    "Development",
    "#Scripts"
  ]
---

# Start an Offline Scan with Windows Defender from PowerShell

## Code

```powershell
Start-MpWDOScan
```

Windows 10 "Anniversary Update" version 1607 features offline scanning with Windows Defender. While the feature itself is not new for those who are familiar with Defender and use it, it has now become part of Windows for the first time. Today, we'll see how to launch it from PowerShell.

Earlier, Microsoft [made available](http://windows.microsoft.com/en-US/windows/what-is-windows-defender-offline) Windows Defender Offline via a special bootable environment. Windows 7 and Windows 8 users could download it, burn it to a disc or a USB flash drive, and then boot it to perform the scan and remove malware from a non-infected, clean environment.

This required an external bootable disk. There are many third-party software makers offering the same functionality, such as Dr. Web or Kaspersky Anti-virus or the free Avira or Avast.

The situation has changed with Windows 10 "Anniversary Update". Windows 10 version 1607 features the ability to perform an [offline scan with Windows Defender](https://winaero.com/blog/how-to-perform-an-offline-scan-with-windows-defender/) right from the Settings app.

A new option is located in [Settings](https://winaero.com/blog/all-ways-to-open-settings-app-in-windows-10/) under - Update & security - Windows Defender - Windows Defender Offline

![Windows 10 defender offline scan](https://winaero.com/blog/wp-content/uploads/2016/02/Windows-10-defender-offline-scan-600x411.png)

The same can be done with PowerShell.

**To start an Offline Scan with Windows Defender from PowerShell**, do the following.

1.  [Open PowerShell as Administrator](https://winaero.com/blog/all-ways-to-open-powershell-in-windows-10/#elevated).
2.  Type or copy-paste the following command:
    
    `Start-MpWDOScan`
    
    ![Run An Offline Scan With Windows Defender With PowerShell](https://winaero.com/blog/wp-content/uploads/2017/03/Run-an-Offline-Scan-with-Windows-Defender-with-PowerShell-600x149.png)
    
3.  Your operating system will be restarted automatically: [![Windows_Defender offline scan warning](https://winaero.com/blog/wp-content/uploads/2016/03/Windows_Defender-offline-scan-warning-600x136.png)](https://winaero.com/blog/wp-content/uploads/2016/03/Windows_Defender-offline-scan-warning.png) 
4.  Before Windows 10 boots, Windows Defender will be started in a special boot environment and will scan your device for threats. This is how it will look: [![Windows Defender offline scan is starting](https://winaero.com/blog/wp-content/uploads/2016/03/Windows-Defender-offline-scan-is-starting.png)](https://winaero.com/blog/wp-content/uploads/2016/03/Windows-Defender-offline-scan-is-starting.png) 
5.  Once finished, it will start Windows 10 again.

Tip: you can [create shortcut to Windows Defender offline scan in Windows 10](https://winaero.com/blog/create-shortcut-to-windows-defender-offline-scan-in-windows-10/).

That's it.

Support us

Winaero greatly relies on your support. You can help the site keep bringing you interesting and useful content and software by using these options:

***

Links: [Windows Developer Environment](Windows%20Developer%20Environment.md) | [Windows Terminal](Windows%20Terminal) | [020 - Development](../1-Maps-of-Content/020%20-%20Development.md)

Sources: 
- [Start an Offline Scan with Windows Defender from PowerShell (winaero.com)](https://winaero.com/offline-scan-windows-defender-powershell/#:~:text=The%20same%20can%20be%20done%20with%20PowerShell.%20To,Once%20finished%2C%20it%20will%20start%20Windows%2010%20again.)
- [Create shortcut to Windows Defender offline scan in Windows 10 (winaero.com)](https://winaero.com/create-shortcut-to-windows-defender-offline-scan-in-windows-10/)


