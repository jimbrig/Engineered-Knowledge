---
Creation Date: 2021-08-22 16:33
Last Modified Date: Sunday 22nd August 2021 16:33:52
Author: Jimmy Briggs <jimbrig1993@outlook.com>
Alias: Run Batch File from Current Directory
Tags: []
---

# Run a Windows Batch File from the Current Directory

Here’s a little bit of Windows batch file magic that I never remember off the top of my head so I’ll log it here.

When you want your batch file commands to be executed from the current directory, putting the following at the start of your batch file should do the trick:  
`cd /d %~dp0`

The “cd” meaning “change directory” is easy enough to understand. The “/d” tells cd to change drive and directory at the same time.

Now, that cryptic “%~dp0” is where the real work is done. %0 refers to the zeroth parameter of the batch file: the batch file itself. Adding the “~dp” modifier draws out the drive and path of the batch file sans its filename, hence the current directory.

To see more batch parameter modifiers, check out this [page](https://www.microsoft.com/resources/documentation/windows/xp/all/proddocs/en-us/percent.mspx?mfr=true) from Microsoft’s documentation.

***

Links: 

Sources: [Run a Windows Batch File from the Current Directory – Skyboy Games](http://skyboygames.com/quick-tip-run-a-windows-batch-file-from-the-current-directory/#:~:text=The%20%E2%80%9Ccd%E2%80%9D%20meaning%20%E2%80%9Cchange%20directory%E2%80%9D%20is%20easy%20enough,of%20the%20batch%20file%3A%20the%20batch%20file%20itself.)

