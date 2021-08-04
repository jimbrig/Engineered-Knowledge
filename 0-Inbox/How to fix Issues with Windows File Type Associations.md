---
Creation Date: 2021-08-04 02:00
Last Modified Date: Wednesday 4th August 2021 02:00:01
Author: Jimmy Briggs <jimbrig1993@outlook.com>
Alias: How to fix Issues with Windows File Type Associations
Tags: []
---

# How to fix Issues with Windows File Type Associations

Import and export default file association template [[XML]] Files via `DISM` command line commands;

## Export Defaults

```powershell

dism /online /Export-DefaultAppAssociations:"%UserProfile%\Desktop\DefaultAppAssociations.xml"

```

## Import

```powershell

dism /online /Import-DefaultAppAssociations:"%UserProfile%\Desktop\FileAssociations.xml"
```


***

Links: [[Command Line - CMD]]
[[Windows Developer Environment|WindowsDevEnv]]
[[Windows Registry]]
[[Windows Command Line Commands Overview]]

Sources:
-  https://thegeekpage.com/fix-file-type-association-error-in-windows-10/


