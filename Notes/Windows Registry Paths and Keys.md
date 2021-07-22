---
Creation Date: 2021-07-22 16:04
Last Modified Date: Thursday 22nd July 2021 16:04:24
Author: Jimmy Briggs <jimbrig1993@outlook.com>
Alias: Windows Registry Locations
Tags: ["#Windows", "#Config", "#Computer", "#List"]
---

# Windows Registry Locations `fas:Windows`

## Long Path Support

- Path: `Computer\HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\FileSystem`
- Key: `LongPathsEnabled`
- Key Type: `REG_DWORD`
- Value: `1`

![[WinReg-LongPathSupport-Screenshot.png]]

## Explorer Drive Icons

*I use this to tweak any icons associated with a mapped or mounted drive (i.e. G: Google Drive, etc.)*

- Root Path: `Computer\HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion\Explorer\DriveIcons`

Will need to add folders for each drive letter:



- Key: `LongPathsEnabled`
- Key Type: `REG_DWORD`
- Value: `1`

![[WinReg-LongPathSupport-Screenshot.png]]


## 

***

Links: 

Sources:


