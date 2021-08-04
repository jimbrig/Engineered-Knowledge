# Windows Subsystem Linux (WSL)


# Setup

To setup your optimal development environment on [Linux](Linux.md) its always a good idea to [bootstrap](Bootstrapping%20Dotfiles.md) your configurations.

I will install the following:

1. Bash
2. Node
3. Git
4. VSCode
5. etc


## Prerequisites

By far the best resources for getting started with [Windows Subsystem for Linux (WSL)](Windows%20Subsystem%20for%20Linux%20(WSL).md) is the [Microsoft Docs](https://docs.microsoft.com/en-us/windows/wsl/install-win10).

- You need to be on Windows version 1903 or higher, Build 18362 or higher.

- If you don’t have Windows Pro you should be able to enable WSL 2 on Windows 10 home.

- To check use the Windows run command Windows key + r (Win+r) and enter winver, you’ll get a dialogue with your machine details on it, I’m on version 2004 build 19041.

### Install Ubuntu

[Link to install ubuntu](https://aka.ms/wslstore)

### Use Powershell as Admin

- Press Win + X and Select Powershell as Admin

```powershell
dism.exe /online /enable-feature /featurename:Microsoft-Windows-Subsystem-Linux /all /norestart
dism.exe /online /enable-feature /featurename:VirtualMachinePlatform /all /norestart
```

- Restart Machine

### Check Optional Features are Enabled

- Control Panel > Programs and Features > Optional Features

- [ ] Enable Developer Mode (Settings > Updates & Security)
- [ ] Turn on Windows SubSystem for Linux
- [ ] Turn on Virtual Machine Platform
- [ ] 



### Random Tips

#### Shutdown WSL

Localhost not working?

```bash
wsl --shutdown
```

#### Change WSL Version

Change between WSL versions

```bash
# wsl --set-version <distro> 2
# example
wsl --set-version Debian 2
```

#### List installed WSL Distros

```bash
# wsl --list --verbose
wsl -l -v
```

