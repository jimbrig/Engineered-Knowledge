---
Creation Date: 2021-08-04 02:00
Last Modified Date: Wednesday 4th August 2021 02:00:01
Author: Jimmy Briggs <jimbrig1993@outlook.com>
Alias: Windows-File-Type-Associations
Tags: ["#Windows", "#Configuration", "#Guide", "#Development"]
---

# How to fix Issues with Windows File Type Associations

## Contents

- [Registry](#Registry)
- [DISM XML Templates](#DISM%20XML%20Templates)
	- [Export Defaults](#Export%20Defaults)
	- [Import](#Import)


View and tweak [Windows Registry](Windows%20Registry.md) entries for File Associations.

## Registry

```powershell
HKEY_CURRENT_USER\Software\Microsoft\Windows\CurrentVersion\Explorer\FileExts
```

## DISM XML Templates

Import and export default file association template [XML](XML.md) Files via `DISM` command line commands.

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

First run, `assoc <file_type_you_are_facing_problem_with>`

```powershell
assoc .exe
> .exe=exefile

assoc .yml
> .yml=yml

assoc .url
> .url=InternetShortcut
```

Note down the output to the right of = and run:

`ftype output_obtained=<absolute_path_of_application> %1`


```powershell
# url associate with edge
ftype InternetShortcut="<PATH to Edge>" "%1"
```

***

Links: [Command Line - CMD](Command%20Line%20-%20CMD)
[WindowsDevEnv](Windows%20Developer%20Environment.md)
[Windows Registry](Windows%20Registry.md)
[Windows Command Line Commands Overview](Windows%20Command%20Line%20Commands%20Overview.md)

Sources:
-  https://thegeekpage.com/fix-file-type-association-error-in-windows-10/


