---
Creation Date: 2021-08-04 17:26
Last Modified Date: Wednesday 4th August 2021 17:26:32
Author: Jimmy Briggs <jimbrig1993@outlook.com>
Alias: Memory in R
Tags: []
---

# Memory in R

[[MOC - R|R]] breaks down memory usage into `Vcells` (memory used by vectors) and `Ncells` (memory used by everything else).

However, neither this distinction nor the `gc trigger` and `max used` columns are typically important. What we’re usually most interested in is the the first column: the total memory used.

A helpful function one can use for this is `pryr::mem_used` which wraps around `gc()` to return the total amount of memory (in megabytes) currently used by R.

`pryr::object_size()` is another helpful function which works similarly to `utils::object.size()` but counts more accurately and includes the size of environments. 

`pryr::compare_size` makes it easy to compare the output of object_size and object.size.