---
Creation Date: 2021-08-19 16:10
Last Modified Date: Thursday 19th August 2021 16:10:31
Author: Jimmy Briggs <jimbrig1993@outlook.com>
Alias: WSL - Permissions
Tags: []
---

# WSL - Permissions

## SSH

```bash
mv ~/.ssh/* /mnt/c/Users/jimmy/.dotfiles/wsl/ssh/
cd ~/.ssh
ln -s /mnt/c/Users/jimmy/.dotfiles/wsl/ssh/* .
```

Now change permissions:

```bash
sudo chmod 644 id_rsa.pub
sudo chmod 600 id_rsa
sudo chmod 644 known_hosts
cd ../
sudo chmod 700 .ssh/
```

***

Links: 

Sources:

