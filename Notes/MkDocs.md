---
Creation Date: 2021-07-21 17:20
Last Modified Date: Wednesday 21st July 2021 17:20:51
Author: Jimmy Briggs <jimbrig1993@outlook.com>
Alias: MkDocs
Tags: [ "#Development", "#Documentation" ]
---

# MkDocs

MkDocs is a Markdown conversion tool written using Python, which provides the ability to quickly convert Markdown text files to Web pages.

## Installation

`mkdocs` is a [[Python]] library and can be installed via `pip`, Python's package manager. 

```powershell
pip install mkdocs
```

### Installing Python and `pip`

Install [Python](https://www.python.org/) using your package manager of choice, or by downloading an installer appropriate for your system from [python.org](https://www.python.org/downloads/) and running it.

```ad-note

If you are installing Python on Windows, be sure to check the box to have Python added to your PATH if the installer offers such an option (it's normally off by default).

![Add Python to PATH](https://www.mkdocs.org/img/win-py-install.png)

```

If you're using a recent version of Python, the Python package manager, [pip](https://pip.readthedocs.io/en/stable/installing/), is most likely installed by default. However, you may need to upgrade pip to the lasted version:

```bash
pip install --upgrade pip
```

If you need to install pip for the first time, download [get-pip.py](https://bootstrap.pypa.io/get-pip.py). Then run the following command to install it:

```bash
python get-pip.py
```

```ad-note

If you would like manpages installed for MkDocs, the [click-man](https://github.com/click-contrib/click-man) tool can generate and install them for you. Simply run the following two commands:

```

```python
pip install click-man
click-man --target path/to/man/pages mkdocs
```

See the [click-man documentation](https://github.com/click-contrib/click-man#automatic-man-page-installation-with-setuptools-and-pip) for an explanation of why manpages are not automatically generated and installed by pip.

```ad-note

If you are using Windows, some of the above commands may not work out-of-the-box.

A quick solution may be to preface every Python command with `python -m` like this:

`python -m pip install mkdocs`
`python -m mkdocs`

For a more permanent solution, you may need to edit your `PATH` environment variable to include the `Scripts` directory of your Python installation. Recent versions of Python include a script to do this for you. Navigate to your Python installation directory (for example `C:\Python38\`), open the `Tools`, then `Scripts` folder, and run the `win_add2path.py` file by double clicking on it. Alternatively, you can download the [script](https://github.com/python/cpython/blob/master/Tools/scripts/win_add2path.py) and run it (`python win_add2path.py`).

```


## Commands

- `mkdocs new <project>` - Creates a new project catalog/directory
- `mkdocs serve` - Starts a web host that automatically detects file changes and re-loads
- `mkdocs build` - Set up a website to generate static web files
- `mkdocs help` - Shows a description message

## Structure

```
mkdocs.yml # configuration file
```

***

Links:

Sources: 
- [mkdocs.org](https://mkdocs.org/)
- [GitHub - mkdocs/mkdocs: Project documentation with Markdown.](https://github.com/mkdocs/mkdocs)


