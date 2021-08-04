---
Creation Date: 2021-07-22 16:04
Last Modified Date: Thursday 22nd July 2021 16:04:24
Author: Jimmy Briggs <jimbrig1993@outlook.com>
Alias: Windows Registry Locations
Tags: [ "#Windows", "#Configuration", "#Computer", "#Lists" ]
---

# Windows Registry Locations `fas:Windows`

## Long Path Support

- Key Path: `Computer\HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\FileSystem`
- Key Value Name: `LongPathsEnabled`
- Key Value Type: `REG_DWORD`
- Key Value Data: `1`

![](assets/WinReg-LongPathSupport-Screenshot.png)

## Explorer Drive Icons

*I use this to tweak any icons associated with a mapped or mounted drive (i.e. G: Google Drive, etc.)*

- Key Path: `Computer\HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion\Explorer\DriveIcons\<Drive Letter>\DefaultIcon`
- Key Value Name: `(Default)`
- Key Value Type: `REG_SZ`
- Key Value Data: *Quoted Absolute Path to an Icon (`.ico`) file*.

***

Links: [Windows Registry](Windows%20Registry.md) | [How To Change Explorer Drive Icons via Registry](How%20To%20Change%20Explorer%20Drive%20Icons%20via%20Registry.md)

Sources: See [Windows Registry > Resources](Windows%20Registry#Resources).


