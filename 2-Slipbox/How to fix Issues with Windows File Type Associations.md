---
Creation Date: 2021-08-04 02:00
Last Modified Date: Wednesday 4th August 2021 02:00:01
Author: Jimmy Briggs <jimbrig1993@outlook.com>
Alias: Windows-File-Type-Associations
Tags: ["#Windows", "#Configuration", "#Guide", "#Development"]
---

# How to fix Issues with Windows File Type Associations

## Contents

- [[#Registry|Registry]]
- [[#DISM XML Templates|DISM XML Templates]]
	- [[#Export Defaults|Export Defaults]]
	- [[#Import|Import]]


View and tweak [[Windows Registry]] entries for File Associations.

## Registry

```powershell
HKEY_CURRENT_USER\Software\Microsoft\Windows\CurrentVersion\Explorer\FileExts
```

## DISM XML Templates

Import and export default file association template [[XML]] Files via `DISM` command line commands.

### Export Defaults

```powershell

dism /online /Export-DefaultAppAssociations:"%UserProfile%\Desktop\DefaultAppAssociations.xml"

```

### Import Exported XML File

```powershell

dism /online /Import-DefaultAppAssociations:"%UserProfile%\Desktop\FileAssociations.xml"
```

### Remove to Revert Changes

```ad-note

In case you want to revert the changes you have made, run this command: 

`Dism.exe /Online /Remove-DefaultAppAssociations`

```

## ASSOC Commands

Change associations like-so:

```powershell
assoc .extension_name=file_type
```

For example, to associate `.scr` file type with `notepad`, execute:

```powershell
assoc .scr=txtfile

# to revert
assoc .scr=scrfile
```

```ad-note

To see , list of file type associations in your system , just type `assoc | more`.

```

## FTYPE Commands

First run


***

Links: [[Command Line - CMD]]
[[Windows Developer Environment|WindowsDevEnv]]
[[Windows Registry]]
[[Windows Command Line Commands Overview]]

Sources:
-  https://thegeekpage.com/fix-file-type-association-error-in-windows-10/


