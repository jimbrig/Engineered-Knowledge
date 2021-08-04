---
Creation Date: 2021-05-02 19:42
Last Modified Date: Friday 30th July 2021 03:59:56
Author: Jimmy Briggs <jimbrig1993@outlook.com>
Alias: RStudio-Configuration
Tags: ["#Development", "#R"]
---

# RStudio Configuration Notes

*See Also: [My R Setup Guide](https://rtraining.jimbrig.com/articles/setting-up-r.html)*

*Skip to the [setup script]()*

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

### Additional Installations and Utilities

As an R developer, we come across many  other various technologies during development and it can be useful to automate the process of setting up your [[Windows Developer Environment|Developer Environment]]:

#### Required and Recommended Additional Software and Libraries

- R Tools (required)
- Git (required) + Git-Bash + a Git Client + Git LFS (optional)
- Python (recommended) - will need `reticulate` package for interacting with Python
- `radian` - A python package providing a much more developer friendly interface than the native `rterm` R-Terminal. (recommended): install via `pip install radian`
- SSH (required) + SSH Keys in default location: `~/.ssh/id_rsa` and `~/.ssh/id_rsa.pub`
- LaTeX / TeX Distribution + `pdfLaTex` or `XeLaTeX` (required)
	- Tinytex (recommended) - `install.packages(tinytex)`
	- MikeTex
	- TexLive
- Pandoc (optional - comes with RStudio - but nice to have external install in your system's `PATH` to use from terminal)
- Java (recommended) - `openjdk` - will need to set environment variable `JAVA_HOME`
- VSCode (recommended) - alternative editor/IDE with extension support for R

#### Optional Add On Software

- GPG / GnuPG (optional)
- NodeJS (optional) - useful for various `npm` packages
- Hugo (recommended for `blogdown` use)
- Inno (optional) - can turn Shiny apps into distributable executables
- 7Zip (optional) - comes built in with RStudio
- `cygwin` (optional)
- `GhostScript` and `qPDF` for Package Maintainers
- Sumatra PDF - comes with RStudio
- Zotero (optional) - RStudio integrates with Zotero for bibliographies in R Markdown
- WSL or BASH on Windows (optional)
- `jetpack` Package Manager (CLI) (optional) (useful if used in conjunction with `topgrade`)
- `cmake` / `make`
- GraphicsMagick / ImageMagick
- Conda
- TexMaker - [Texmaker (free cross-platform latex editor) (xm1math.net)](https://www.xm1math.net/texmaker/)
- Latex2RTF - [rtf2latex2e: (sourceforge.net)](http://latex2rtf.sourceforge.net/)
- FFMPEG - [FFmpeg](https://ffmpeg.org/)
- Lyx - [LyX | LyX – The Document Processor](https://www.lyx.org/)
- Docker / Kubernetes

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


## Setup Script

- PowerShell Script: `r-setup.ps1` - see <https://github.com/jimbrig/>:

```powershell

# ************************************
# *          R Configuration         *
# ************************************

# Define some helper functions:
Function Test-Installed( $programName ) {
  $x86_check = ((Get-ChildItem "HKLM:Software\Microsoft\Windows\CurrentVersion\Uninstall") |
    Where-Object { $_."Name" -like "*$programName*" } ).Length -gt 0;

  if (Test-Path 'HKLM:Software\Wow6432Node\Microsoft\Windows\CurrentVersion\Uninstall') {
    $x64_check = ((Get-ChildItem "HKLM:Software\Wow6432Node\Microsoft\Windows\CurrentVersion\Uninstall") |
      Where-Object { $_."Name" -like "*$programName*" } ).Length -gt 0;
  }
  return $x86_check -or $x64_check;
}


# Ensure R, RStudio, and RTools installed

if (!(Test-Installed("R"))) {
  cinst R.Project
}

if (!(Test-Installed("RStudio"))) {
  cinst R.Studio
}

if (!(Test-Installed("RTools"))) {
  cinst rtools
}

# configure R PATHS
Write-Host "Review System Environment Variables for R Session" -ForegroundColor Magenta
RScript -e "Sys.getenv()"

# Environment Variables
# Note on initial setup of R need to manually set location of .Renviron
$userhome = [System.Environment]::GetEnvironmentVariable("USERPROFILE")
$rconfigdir = "$userhome\.config\R"
$renvironpath = "$rconfigdir\.Renviron"
$rprofilepath = "$rconfigdir\.Rprofile"
$rhistpath = "$rconfigdir\.Rhistory"
$rlibspath = "$rconfigdir\win-library\4.1"

[System.Environment]::SetEnvironmentVariable("R_HOME", $userhome, "User")
[System.Environment]::SetEnvironmentVariable("R_ENVIRON_USER", $renvironpath, "User")
[System.Environment]::SetEnvironmentVariable("R_PROFILE_USER", $rprofilepath, "User")
[System.Environment]::SetEnvironmentVariable("R_LIBS_USER", $rlibspath, "User")

Copy-Item "$env:USERPROFILE\OneDrive\Documents\R\win-library\4.1\*" -Destination "$rlibspath" -Recurse

if (!(Test-Path($rconfigdir))) {
  mkdir $rconfigdir
}

if (!(Test-Path($rlibspath))) {
  mkdir $rlibspath
}

Copy-Item "~/Dev/jimbrig/jimsdots/R/.Renviron" $renvironpath
Copy-Item "~/Dev/jimbrig/jimsdots/R/.Rprofile" $rprofilepath

Copy-Item "~/Dev/jimbrig/jimsdots/R/lib/installation.R" "$rconfigdir\win-library\installation.R"
Copy-Item "~/Dev/jimbrig/jimsdots/R/lib/pkgs.yml" "$rconfigdir\win-library\pkgs.yml"

Copy-Item "$env:APPDATA\RStudio\rstudio-prefs.json" "$env:APPDATA\RStudio\rstudio-prefs-default.json"
Copy-Item "~/Dev/jimbrig/jimsdots/RStudio/rstudio-prefs.json" "$env:APPDATA\RStudio\rstudio-prefs.json"

mkdir "$env:APPDATA\RStudio\themes"
Copy-Item "~/Dev/jimbrig/jimsdots/RStudio/themes/*" -Destination "$env:APPDATA\RStudio\themes"

mkdir "$env:APPDATA\RStudio\keybindings"
Copy-Item "~/Dev/jimbrig/jimsdots/RStudio/keybindings/*" -Destination "$env:APPDATA\RStudio\keybindings"

mkdir "$env:APPDATA\RStudio\snippets"
Copy-Item "~/Dev/jimbrig/jimsdots/RStudio/snippets/*" -Destination "$env:APPDATA\RStudio\snippets"

Copy-Item "$env:LOCALAPPDATA\RStudio\rstudio-desktop.json" "$env:LOCALAPPDATA\RStudio\rstudio-desktop-default.json"
Copy-Item "$env:LOCALAPPDATA\RStudio\rstudio-desktop-default.json" "~/Dev/Github/jimsdots/RStudio/localappdata/rstudio-desktop-default.json"
Copy-Item "~/Dev/jimbrig/jimsdots/RStudio/localappdata/rstudio-desktop.json" "$env:LOCALAPPDATA\RStudio\rstudio-desktop.json"
```

```R
if (!require(pacman)) install.packages("pacman")

pacman::p_load(devtools,
               installr,
               tinytex,
               rstudioapi,
               magrittr,
               dplyr,
               pkgbuild)

# configure RStudio settings ----------------------------------------------

# disable reloading of workspace between sessions
usethis::use_blank_slate(scope = "user")

# review system environment variables:
Sys.getenv()

# configure your R library path for R packages
.libPaths()

# copy packages to new R-version's windows library
libdir_prior <- file.path("<enter prior win-library path here>")
libdir_current <- file.path("<enter current win-library path here>")
installr::copy.packages.between.libraries(
  from = libdir_prior, to = libdir_current
)

# check
.libPaths()[1] == libdir

# configure dotfiles .Rprofile & .Renvrion --------------------------------

# review dotfiles
usethis::edit_r_environ(scope = "user") # (RTools Path, github PAT, keys, etc.)
usethis::edit_r_profile(scope = "user") # (various options for packages)

# additional software ---------------------------------------------
pkgbuild::setup_rtools()

# Rtools
installr::install.rtools()
rstudioapi::restartSession()

# git
installr::install.git()
rstudioapi::restartSession()

# tinytex
tinytex::install_tinytex()
rstudioapi::restartSession()
tinytex::use_tinytex()

# java
installr::install.java()

# pandoc
installr::install.pandoc()

# node.js (only if desired)
installr::install.nodejs()

# github Git Client (only if desired)
installr::install.github()

# inno (only if desired)
installr::install.inno()
```


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

> See [[RStudio Tips and Tricks]]

1. If you have more than one version or architecture of [[MOC - R|R]] installed on your machine, you can hold down the `Ctrl` key when opening RStudio and a dialog box will appear allowing you to select the version of R to run in RStudio's native session. 
2. On major updates, it is best practice to keep your old version of R on your machine until you are comfortable with the updated R version.
3. When migrating R versions between major patch updates, you will need to re-install you library of R packages. This process can be vastly expedited utilizing `installr`’s helpful `installr::copy.packages.between.libraries()` function.


***

Links: [[020 - Development]] | [[MOC - R]] | [[Visual Studio Code]]

Sources:

