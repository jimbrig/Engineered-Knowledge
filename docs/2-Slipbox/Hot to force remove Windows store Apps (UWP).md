---
Creation Date: 2021-08-04 12:38
Last Modified Date: Wednesday 4th August 2021 12:38:16
Author: Jimmy Briggs <jimbrig1993@outlook.com>
Alias: Remove-UWP-Apps
Tags: ["#Windows"]
---

# Hot to force remove Windows store Apps (UWP)

```ad-warning

The following instructions can completely break your Store installation. I am only posting what worked for me, and these instructions are provided for you to follow at your own risk. I am not responsible if anything goes wrong.

Please make backups before doing anything.

```


### Normal Uninstall

Might as well try this while you’re at it, it’ll save you quite a bit of time if you manage to do it this way.

1.  Find the app’s full package name by running `Get-AppxPackage | Select Name, PackageFullName` and doing a “Find” inside any text editor.
2.  Run `Remove-AppxPackage -AllUsers [the full package name here]` without the square brackets.
3.  Hope it works.

If it errors out with 0x80073CFA (especially with 0x80070002 in another error code) then you’ll probably have to do a full manual uninstall. Be prepared to spend a couple of hours on this.

### Manual Uninstall (Windows 10 1803)

**This information is outdated for newer versions of Windows 10. Scroll down for the updated instructions.**

Huge thanks to the people who made the following forum/blog posts:

-   [Microsoft Community](https://answers.microsoft.com/en-us/windows/forum/windows_10-windows_store/removing-a-corrupt-windows-store-app/de093b8e-33e4-4144-9298-a2e3b663ce84) ([Archived, page navigation is broken](https://web.archive.org/web/20181127132953/https://answers.microsoft.com/en-us/windows/forum/windows_10-windows_store/removing-a-corrupt-windows-store-app/de093b8e-33e4-4144-9298-a2e3b663ce84))
-   [Super User (Stack Exchange)](https://superuser.com/questions/1115801/unable-to-uninstall-universal-apps-through-powershell) ([Archived](https://web.archive.org/web/20181127133016/https://superuser.com/questions/1115801/unable-to-uninstall-universal-apps-through-powershell))
-   [DxSdata](https://www.dxsdata.com/2017/11/manage-windows-10-modern-apps-via-sqlite-db-browser-solving-sysprep-issues/) ([Archived](https://web.archive.org/web/20181127133023/https://www.dxsdata.com/2017/11/manage-windows-10-modern-apps-via-sqlite-db-browser-solving-sysprep-issues/))

For reference, I was using Windows 10 1803 with the November 2018 cumulative update applied. This is untested on any other version.

1.  Manually delete everything that is linked to that app. This includes the following (but is not an exhaustive list)
    -   All folders that exactly match the app’s full package name (the package name is obtained by running `Get-AppxPackage | Select Name, PackageFullName` in PowerShell and looking for the full name). You can find them by running `dir /AD /s [your full package name here]`
    -   All registry entries that exactly match the app’s full package name. You may be able to delete the parent folders as well, use your own judgment to figure out what’s safe or not. Again, **make a full system backup before doing this, and _verify the backup works first_**
    -   The XML file that matches the app’s package name in `C:\ProgramData\Microsoft\Windows\AppRepository\`
    -   The folder that matches the app’s package name in `C:\ProgramData\Microsoft\Windows\AppRepository\Packages\`
    -   Any entries referencing the app in `C:\ProgramData\Microsoft\Windows\AppxProvisioning.xml`
2.  Download and install any SQLite database editor. I used [DB Browser for SQLite](https://sqlitebrowser.org/)
    
3.  Launch your editor as `NT AUTHORITY\SYSTEM`. You can use multiple tools for this, including [Process Hacker](https://wj32.org/processhacker/nightly.php) and the [PSTools Suite](https://docs.microsoft.com/en-us/sysinternals/downloads/pstools)
    
4.  Open the database `C:\ProgramData\Microsoft\Windows\AppRepository\StateRepository-Deployment.srd` and look for a row in the table `AppxManifest` that has your app mentioned in the `Xml` column, and delete that row. Write the changes to disk (I recommend backing up the existing database first to avoid issues).
    
5.  Open the database `C:\ProgramData\Microsoft\Windows\AppRepository\StateRepository-Machine.srd` and delete the row in the table `Package` that has your app’s full package name in the column `PackageFullName`. This is a multi-step process, and all the instructions below are for DB Browser for SQLite.
    1.  On the “Database Structure” tab, scroll down until you see the “Triggers” section.
    2.  Right-click on the `TRG_AFTERDELETE_Package_Key` trigger and click “Copy Create statement”. You’ll need this for later, so paste it in a text document and keep it handy.
    3.  Delete the `TRG_AFTERDELETE_Package_Key` trigger. This is to avoid SQLite complaining about “no such function: sroptions (your SQL statement here)”.
    4.  Move to the “Browse Data” tab, find the correct entry in the `Package` table, and press “Delete Record”.
    5.  Re-add the database trigger by pasting and running the trigger create statement you copied earlier. If you don’t have this, revert your changes and get it from your database backup (you did make one, right?)
    6.  Write the database changes to disk.
6.  Re-open the Store. The app should now be marked as “Owned” but not “Installed”.

### Manual Uninstall (Windows 10 20H2)

**Updated on 2020-11-28**

_Thanks to Robin G and Jean B for feedback on the procedure for newer versions of Windows 10._

1.  Manually delete everything that is linked to that app. This includes the following (but is not an exhaustive list)
    -   All folders that exactly match the app’s full package name (the package name is obtained by running `Get-AppxPackage | Select Name, PackageFullName` in PowerShell and looking for the full name). You can find them by running `dir /AD /s [your full package name here]`
        -   Some apps have additional packages installed alongside them, for example the Zoom Rooms app has `[snip]_neutral_~_r9fg4ykbbcwvc` in addition to the main package `[snip]_x86__r9fg4ykbbcwvc`. Remember to delete these as well!
    -   All registry entries that exactly match the app’s full package name. You may be able to delete the parent folders as well, use your own judgment to figure out what’s safe or not. Again, **make a full system backup before doing this, and _verify the backup works first_**
        -   Keys in the StateRepository cache (`Computer\HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion\AppModel\StateRepository\Cache\Package\Data\`) are set to read-only for administrators so you might need to launch regedit as SYSTEM.
    -   The XML file that matches the app’s package name in `C:\ProgramData\Microsoft\Windows\AppRepository\`
    -   The folder that matches the app’s package name in `C:\ProgramData\Microsoft\Windows\AppRepository\Packages\`
    -   If the app is a preinstalled or system-wide app then also remove any entries referencing the app in `C:\ProgramData\Microsoft\Windows\AppxProvisioning.xml`.
        -   This can break things if you create a new user profile, so re-add the app once you’ve successfully reinstalled it.
2.  Download and install any SQLite database editor. I used [DB Browser for SQLite](https://sqlitebrowser.org/)
    
3.  Launch your editor as `NT AUTHORITY\SYSTEM`. You can use multiple tools for this, including [Process Hacker](https://wj32.org/processhacker/nightly.php) and the [PSTools Suite](https://docs.microsoft.com/en-us/sysinternals/downloads/pstools)
    
4.  Open the database `C:\ProgramData\Microsoft\Windows\AppRepository\StateRepository-Machine.srd` and look for any rows that mention your package name. The tables I needed to delete rows from are listed below alongside any additional steps required to delete them (your app may have different entries, this is just what Zoom Rooms needed):
    
    1.  Activation
        1.  In the Database Structure tab, scroll down to the Triggers section
        2.  Find the trigger called `TRG_BEFOREDELETE_Activation_SRJournal`
        3.  Right-click its row and press “Copy Create statement”. Paste it somewhere safe - you’ll need it later.
        4.  Delete the trigger by right-clicking it and pressing “Delete Trigger”
        5.  Delete the row in the Activation table
        6.  Re-add the trigger by pasting the create statement in the “Execute SQL” tab and pressing the “Execute all” button
    2.  Application
        -   Follow the same steps as the `Activation` table, but this time for the `TRG_BEFOREDELETE_Application_SRJournal` trigger
    3.  ApplicationIdentity
    4.  BundlePackage (find the “Bundle” integer here - delete the associated one in “Bundle”)
    5.  MrtApplication
    6.  MrtPackage
    7.  Package **Save the package ID first - we’ll need it for the next step.**
        -   Follow the same steps as the `Activation` table, but this time for the `TRG_BEFOREDELETE_Package_SRJournal` trigger
    8.  PackageFamily
        -   Follow the same steps as the `Activation` table, but this time for the `TRG_BEFOREDELETE_PackageFamily_SRJournal` trigger
    9.  PackageIdentity
    10.  PackageLocation
    
    Write the changes to disk (I recommend backing up the existing database first to avoid issues).
    
5.  Open the database `C:\ProgramData\Microsoft\Windows\AppRepository\StateRepository-Deployment.srd` and look for a row in the table `AppxManifest` that has the package ID you previously got from `StateRepository-Machine.srd` in the `Package` column. Right-click the rows and delete them.
    -   Also do this for the `File` and `PackageSourceUri` tables. You can shift-click on multiple records to bulk select.
6.  Run `wsreset.exe`
    
7.  Re-open the Store. The app should now be marked as “Owned” but not “Installed” and should be reinstallable. If you run into an error, try pressing the “Retry” button and it should eventually redownload.
    -   If you don’t plan on reinstalling the app then I still recommend redownloading and uninstalling it to clean up anything not mentioned in this guide.

## Wrap Up and Finishing Words

UWP is a fantastic idea. Sandbox absolutely everything and keep each app in its own folder, all with user-friendly controls through the Store and Settings apps. It succeeds in that, and I applaud the Windows team for finally catching up to macOS and some Unixes.

However, it can get extremely ugly as soon as something breaks. The only other “approved” or “sanctioned” ways to interact with the system are through a group of PowerShell cmdlets, and it’s really hard to peek behind the scenes and get an idea of what it’s actually doing. I only figured out there was a SQLite database controlling all this through a lucky Google search, which really isn’t what I’d want if I was making documentation for Windows.

If anyone on the Windows team is reading this, please, _please_ have an option in Settings to force uninstall an app. Spending hours poking through the dark side of Windows to uninstall a single app is _incredibly_ bad UX, and I don’t even know what caused this in the first place. Was it a botched update? Was it a stray gamma ray or something flipping a critical bit? There’s near zero visibility in what UWP does internally.

I hope these steps helped you. Feel free to drop me an email if you’ve got any comments, I really appreciate any feedback.


***

Links: 

Sources:
- [How To Force Remove Windows Store (UWP) Apps · Embers (sreb.me)](https://blog.sreb.me/2018/11/28/force-remove-uwp-app/)

