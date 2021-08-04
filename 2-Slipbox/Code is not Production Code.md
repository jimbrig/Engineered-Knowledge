---
Creation Date: 2021-07-21 11:39
Last Modified Date: Wednesday 4th August 2021 15:02:05
Author: Jimmy Briggs <jimbrig1993@outlook.com>
Alias: production-code
Tags: ["#Development"]
---

# Proof of Concept: Code is not production code!

One thing that should be burned into the heads of many developers is that a [[Prototype]] or [Proof of Concept (PoC)](http://en.wikipedia.org/wiki/Proof_of_concept)  
code is **NOT** production code. Proof of Concept code is not production code.

Prototype code is, more or less, proof of concept. When you create a prototype or PoC, it’s something that can be shown to the client to create a common understanding of what is to be delivered. Now, some people will disagree with this, but … after the client agrees to this prototype/PoC this code should only be saved for reference. It should only be referenced to ensure the client is getting what they received. It should be compared to the final app to make sure it works in the same order.

When creating Prototype/PoC the goal is to save money. It helps set its viability, expose any technical issues and express any concern over any  
direction of the system. Feedback can be implemented quite easily at this point. This allows the developer and business analyst to quickly identify the noted issues without incurring a high overhead of development costs.

Once the Prototype/PoC is agreed upon, the development on the prototype ceases and the design phase of the new system should begin. Under NO circumstance should the prototype be taken and converted into the actual production site. Will you take snippets of code here and there? Yes, will you grab a piece of JavaScript from the client code you created for the prototype? Yes. Will you use the entire project as your production code? No.

The reason for this is simple; prototype code is ugly, messy, and nasty. It’s a conglomerate of blog posts, mixed with [MSDN How-To Articles](http://msdn2.microsoft.com/en-us/library/aa139637.aspx), mixed with hacks and riddled with bugs. The code in these types of projects contain code that is far from anything [pretty](http://www.codinghorror.com/blog/archives/000615.html). The code would take longer to clean up than it would to take to write it from a fresh slate.

***

Links: [[../1-Maps-of-Content/020 - Development.md]] | [[../1-Maps-of-Content/MOC - PKM.md]] | [[../1-Maps-of-Content/MOC - System Design.md]] | [[Dann Felker.md]]

Sources: [Prototype/Proof of Concept code is not production code! - DONN FELKER](https://www.donnfelker.com/prototypeproof-of-concept-code-is-not-production-code/)

