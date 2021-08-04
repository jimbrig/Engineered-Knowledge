---
Creation Date: 2021-05-02 19:42
Last Modified Date: Friday 30th July 2021 03:59:56
Author: Jimmy Briggs <jimbrig1993@outlook.com>
Alias: RStudio-Configuration
Tags: ["#Development", "#R"]
---

# RStudio Configuration Notes

*See Also: [My R Setup Guide](https://rtraining.jimbrig.com/articles/setting-up-r.html)*

Assuming you already have [[MOC - R|R]] installed, next you will need to install an IDE to code with, in this case, RStudio.

## Installation

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



### [](https://rtraining.jimbrig.com/articles/setting-up-r.html#additional-notes-on-rstudio)Additional Notes on RStudio

-   RStudio is an integrated development environment, or IDE, for R programming.
    
-   RStudio is updated a couple of times a year. When a new version is available, RStudio will let you know.
    
-   It’s a good idea to upgrade regularly so you can take advantage of the latest and greatest features.


## Windows Directories
* `%localappdata%\RStudio-Desktop` - RStudio Desktop Internal State
* `%appdata%\RStudio` - RStudio Configuration Directory (Preferences)


***

Links: [[020 - Development]] | [[MOC - R]] | [[Visual Studio Code]]

Sources:

