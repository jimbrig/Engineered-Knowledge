---
Creation Date: 2021-08-04 15:59
Last Modified Date: Wednesday 4th August 2021 15:59:39
Author: Jimmy Briggs <jimbrig1993@outlook.com>
Alias: Code-Comments
Tags: ["#Development"]
---

# Code Comments

![Code Comments](https://www.donnfelker.com/wp-content/uploads/2019/10/Screen-Shot-2019-10-25-at-1.31.41-PM-1024x479.png)

When it’s it appropriate to comment code?

I follow a simple set of rules:

1.  ==If the code is confusing – I try to refactor the code so that it’s not confusing anymore.==
2.  ==If a refactoring is not possible, **I document the “why”**, not the “how”. The “how” is already documented: that’s the code.==

**The “why” explains WHY the code exists** and perhaps some _important and relevant details_ that might not be evident to future maintainers.

_How do I know if I should provide a “why”?_

I ask myself this question:

> In six months will I be able to understand this code in 30 seconds?

If there is any doubt in my mind then I know that I need to provide a comment for that chunk of code.

_Why 30 seconds?_

==The majority of my time as a developer will be spent reading and deciphering existing code. I need to be able to do this as quickly as possible to be efficient. If a comment helps me grok something quickly due to some weird edge-case complexity, then the comment is worth its weight in gold.==


***

Links: [[Dann Felker.md]] | [[../3-Resources/Highlights/Highlights - Code Comments.md]]

Sources: [Code Comments - DONN FELKER](https://www.donnfelker.com/code-comments/)

