---
Creation Date: 2021-07-22 16:13
Last Modified Date: Thursday 22nd July 2021 16:13:24
Author: Jimmy Briggs <jimbrig1993@outlook.com>
Alias: RegistryDriveIcons
Tags: ["#Windows", "#HowTo", "#Guide", "#Config", "#Computer"]
---

# How To Change Explorer Drive Icons via Registry

*See also: [[Windows Registry Paths and Keys#Explorer Drive Icons]].*

## Contents

- [[#About|About]]
- [[#Preliminary Steps|Preliminary Steps]]
- [[#Create Nested `DriveIcons` Keys|Create Nested `DriveIcons` Keys]]
- [[#Export and Test Results|Export and Test Results]]


## Overview

If you need to change or fix missing drive icons in explorer, this guide shows how to accomplish this through the [[Windows Registry]].

Personally, I use this to tweak any icons associated with a mapped or mounted drive (i.e. G: Google Drive, etc.).

Here are all the steps in order:

1.  Run `regedit`
2. Backup Registry via `File > Export` (optional)
3. Navigate to path: `Computer\HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion\Explorer\DriveIcons`
4. Add Keys (folders) for each drive letter.
5. Create sub-keys (folders) nested under each drive letter named `DefaultIcon`.
6. Assign a value for each `Default` key value within the `DefaultIcon` sub-key as the *quoted absolute path to the ICO icon file on the hard drive*.
7.  Right click and `Export` the entire `DriveIcons` folder as a backup to future re-use.
8.  Exit registry and restart Windows Explorer in Task Manager to view updated icons.  

Before and After:

*Before*

![[WinReg-DriveIconMissing.png]]

*After*

![[WinReg-DriveIconAdded.png]]

## Preliminary Steps

1.  Run `regedit`

2. Backup Registry via `File > Export` (optional)

3. Navigate to path: `Computer\HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion\Explorer\DriveIcons`:

![[WinReg-DriveIcons-Path.png]]

## Create Nested `DriveIcons` Keys

4. Add Keys (folders) for each drive letter:

![[WinReg-DriveIcons-Mapped-Drive-Folders.png]]

5. Create sub-keys (folders) nested under each drive letter named `DefaultIcon`:

**Note: Can also assign folders/keys for `DefaultLabels` here as well**

![[WinReg-DriveIcons-Subfolders.png]]

6. Assign a value for each `Default` key value within the `DefaultIcon` sub-key as the *quoted absolute path to the ICO icon file on the hard drive*:

![[WinReg-DriveIcons-DefaultIcon-Keys.png]]

## Export and Test Results

7.  Right click and `Export` the entire `DriveIcons` folder as a backup to future re-use.
    
8.  Exit registry and restart Windows Explorer in Task Manager to view updated icons.  

***

Internal Links: [[Windows Registry Paths and Keys]] | [[050 - Computer]]
External Links: [Link to Original Note I made in Evernote](https://www.evernote.com/shard/s694/nl/215210942/5408768b-06b3-4211-a923-131c595b16c9?title=Changing%20Windows%20Network%20Drive%20Icons%20and%20Labels%20via%20the%20Registry)
Sources: Original Source Unknown - From Evernote Note.



