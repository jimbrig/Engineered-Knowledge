---
Creation Date: <% tp.file.creation_date() %>
Last Modified Date: <% tp.file.last_modified_date("dddd Do MMMM YYYY HH:mm:ss") %>
Author: Jimmy Briggs <jimbrig1993@outlook.com>
Alias: <% tp.file.creation_date() %>
Note Type: "#DailyNotes"
Tags: [  ]
Linked Notes: [ ""]
---

<< [[<% tp.date.now("YYYY-MM-DD", -1) %>]] | [[<% tp.date.now("YYYY-MM-DD", 1) %>]] >>

# <% tp.date.now("dddd, MMMM YYYY") %>

## Daily Quote & Image

```ad-quote
title: Daily Quote
<center>
<% tp.web.daily_quote() %>
</center>
```

```ad-info
title: Image
<center>
<% tp.web.random_picture("400x400", "landscape,water,space,sun,skyline") %>
</center>
```

***

Links: [[3-Resources/Daily-Notes/README]]

Sources: