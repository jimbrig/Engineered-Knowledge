---
Creation Date: 2021-08-04 14:40
Last Modified Date: Wednesday 4th August 2021 14:40:43
Author: Jimmy Briggs <jimbrig1993@outlook.com>
Alias: Git
Tags: ["#Development"]
---

# Git

## Contents

- [[#Setup and Configuration|Setup and Configuration]]
	- [[#User|User]]
	- [[#Protocol|Protocol]]
	- [[#Core|Core]]
	- [[#Diff|Diff]]
	- [[#Color|Color]]
	- [[#Aliases|Aliases]]
	- [[#Credential|Credential]]
- [[#.gitconfig|.gitconfig]]
- [[#Resources|Resources]]



## Setup and Configuration

### User

- User Name
- User Email

```bash
git config --global user.name "Jimmy Briggs"
git config --global user.email "jimbrig1993@outlook.com"
```

- Signing Key (from [[GPG]])

```bash

```

### Protocol

- Protocol: `SSH` or `HTTPS`

```bash
git config --global default.protocol ssh
```


### Core

- Core

```bash
git config --global core.editor code-insiders --wait ---new-window
git config --global core.longpaths true
git config --global core.excludesfile ~/.gitignore
git config --global core.attributesfile ~/.gitattributes
git config --global core.autocrlf true
git config --global core.symlinks true
git config --global core.safecrlf warn
git config --global core.untrackedCache true
```

### Diff

- Diff

```bash
git config --global diff.tool code-insiders
git config --global diff.renames copies
```

### Color

### Aliases

### Credential

## .gitconfig

```
# user
[user]
	name = Jimmy Briggs
	email = jimbrig1993@outlook.com
	signingKey = <REDACTED>

# SSH protocol
[default]
	protocol = ssh

# editor set to vscode-insiders
# Use custom `.gitignore` and `.gitattributes`
# Speed up commands involving untracked files such as `git status` - https://git-scm.com/docs/git-update-index#_untracked_cache

[core]
	editor = code-insiders --wait --new-window
	longpaths = true	
    excludesfile = ~/.gitignore
    attributesfile = ~/.gitattributes
	autocrlf = true
	symlinks = true
	safecrlf = warn	
  untrackedCache = true

[diff]
	tool = code-insiders
	renames = copies

[difftool "code-insiders"]
	cmd = code-insiders --wait --diff $LOCAL $REMOTE

# Include summaries of merged commits in newly created merge commit messages
[merge]
	tool = code-insiders
	log = true

[mergetool "code-insiders"]
	cmd = code-insders --wait $MERGED
	trustexitcode = true

# Use colors in Git commands that are capable of colored output when outputting to the terminal. (This is the default setting in Git ≥ 1.8.4.) 
[color] 
	ui = auto
[color "branch"]
    current = yellow reverse
    local = yellow
    remote = green
[color "diff"]
    meta = yellow bold
    frag = magenta bold
    old = red bold
    new = green bold
[color "status"]
    added = yellow
    changed = green
    untracked = cyan
    branch = magenta

[help]
	autocorrect = 1

# Detect and fix whitespace errors when applying a patch
[apply]
	whitespace = fix

[rerere]
	enabled = true

# Automatically correct and execute mistyped commands
[help]    
    autocorrect = 1

[tag]
	forceSignAnnotated = true

[submodule]
	recurse = true
	
# URL shorthands
[url "git@github.com:"]
    insteadOf = "gh:"
    pushInsteadOf = "github:"
    pushInsteadOf = "git://github.com/"
[url "git://github.com/"]
    insteadOf = "github:"
[url "git@gist.github.com:"]
    insteadOf = "gst:"
    pushInsteadOf = "gist:"
    pushInsteadOf = "git://gist.github.com/"
[url "git://gist.github.com/"]
    insteadOf = "gist:"

[gpg]
	program = C:\\Program Files\\Git\\usr\\bin\\gpg.exe

[commit]
	gpgSign = true

[credential]
	helper = 
	helper = C:/Program\\ Files/Git/mingw64/libexec/git-core/git-credential-manager-core.exe
```

## Resources

- [github/gitignore: A collection of useful .gitignore templates](https://github.com/github/gitignore)
- [NDP Software :: Git Cheatsheet](https://ndpsoftware.com/git-cheatsheet.html)
- [Git - Reference (git-scm.com)](https://git-scm.com/docs)
- [Git Cheat Sheets - GitHub Cheatsheets](https://training.github.com/)

***

Links: 

Sources:

