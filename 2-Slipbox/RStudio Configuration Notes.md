---
Creation Date: 2021-05-02 19:42
Last Modified Date: Friday 30th July 2021 03:59:56
Author: Jimmy Briggs <jimbrig1993@outlook.com>
Alias: RStudio-Configuration
Tags: ["#Development", "#R"]
---

# RStudio Configuration Notes

*See Also: [My R Setup Guide](https://rtraining.jimbrig.com/articles/setting-up-r.html)*

### Notes on RStudio

-   RStudio is an integrated development environment, or IDE, for R programming.
    
-   RStudio is updated a couple of times a year. When a new version is available, RStudio will let you know.
    
-   It’s a good idea to upgrade regularly so you can take advantage of the latest and greatest features.

## Installation

Assuming you already have [[MOC - R|R]] installed, next you will need to install an IDE to code with, in this case, RStudio.

Install the free Version of RStudio Desktop for Windows from the RStudio Website here: [https://rstudio.com/products/rstudio/download/](https://rstudio.com/products/rstudio/download/).

Alternatively, use a [[Package Managers|package manager]] such as [[Chocolatey]], [[Scoop]], or [[WinGet CLI Setup and Settings|Winget]]:

```powershell
# chocolatey
cinst rstudio -y

# scoop
scoop install rstudio # --global if want system-wide

# winget
winget install RStudio.RStudio.OpenSource
```

### Daily and Preview Builds

You can also install various versions of RStudio such as the daily release using the [R Bucket for Scoop](https://github.com/cderv/r-bucket):

- [RStudio Preview](https://rstudio.com/products/rstudio/download/preview/)
- [RStudio Daily](https://dailies.rstudio.com/)

```powershell
scoop bucket add r-bucket https://github.com/cderv/r-bucket.git
scoop install r-devel
scoop install rstudio-preview
scoop install rstudio-pro-preview
scoop install rstudio-daily
```

## Configure RStudio Settings

A range of Project Options and Global Options are available in RStudio from the Tools menu (accessible from the keyboard via Alt+T).

Most of these are self-explanatory but it is worth mentioning a few that can boost your programming efficiency:

-   I highly recommend un-ticking the default “Restore .RData” settings box:

![](https://rtraining.jimbrig.com/man/figures/rstudio-settings.png)

_Unticking this default prevents loading previously created R objects. This will make starting R quicker and reduce the chance of getting bugs due to previously created objects. For this reason, I recommend you untick this box._

Alternatively you can simply run this code:

```R
require(usethis)
usethis::use_blank_slate(scope = "user")
```

_See `?usethis::use_blank_slate` for more information._

### Other Preferences

- GIT/SVN project settings allow RStudio to provide a graphical interface to your version control system.
- R version settings allow RStudio to ‘point’ to different R versions/interpreters, which may be faster for some projects.
- Code editing options can make RStudio adapt to your coding style, for example, by preventing the autocompletion of braces, which some experienced programmers may find annoying. Enabling Vim mode makes RStudio act as a (partial) Vim emulator.
- Diagnostic settings can make RStudio more efficient by adding additional diagnostics or by removing diagnostics if they are slowing down your work. This may be an issue for people using RStudio to analyze large datasets on older low-spec computers.
- **Appearance**: if you are struggling to see the source code, changing the default font size may make you a more efficient programmer by reducing the time overheads associated with squinting at the screen.
	- Other options in this area relate more to aesthetics. Settings such as font type and background color are also important because feeling comfortable in your programming environment can boost productivity. Go to `Tools > Global Options` to modify these.


## Advanced Configuration

This section discusses more advanced R related configurations such as:
- Environment Paths
- Detailed System Information
- Dotfiles
- Common pitfalls

For more advanced R developers you may want to further configure your development environement by customizing you R related dotfiles; specifically, your `.Rprofile` and `.Renviron`.

### Environment and %PATH% Variables

`%appdata%\RStudio` - RStudio Configuration Directory (Preferences)
`%localappdata%\RStudio-Desktop` - RStudio Desktop Internal State

To add your system [[R-Tools]] `%PATH%` to your  `.Renviron` (easier than manually configuring within windows system settings) run the code:

```R
cat('PATH = ${RTOOLS40_HOME}\\usr\\bin;${PATH}',
    file = fs::path(Sys.getenv("R_USER"), "/.Renviron"),
    append = TRUE)
```

alternatively use the command prompt or powershell:

```cmd
setx PATH "<path to rtools>"
```

```powershell
$env:PATH = $env:PATH + "<path to rtools>"
```



### My Setup

Here is what my minimal setup includes:

Additionally, you can configure keybinding for RStudio addins from RStudio and store them within the .R folder located in your R_USER path. To view this path run `Sys.getenv("R_USER")`.





### RStudio Dotfiles

- Note that RStudio's Preference files on windows are stored:
	- `%localappdata%\RStudio-Desktop` - RStudio Desktop Internal State
	- `%appdata%\RStudio` - RStudio Configuration Directory (Preferences)

Configuration files to backup:
- `user-prefs.json`
- Add-Ins and Hotkeys
- Snippets
- Themes
- Dictionaries
- Project Lists


## Tips and Tricks

1. If you have more than one version or architecture of [[MOC - R|R]] installed on your machine, you can hold down the `Ctrl` key when opening RStudio and a dialog box will appear allowing you to select the version of R to run 


***

Links: [[020 - Development]] | [[MOC - R]] | [[Visual Studio Code]]

Sources:

