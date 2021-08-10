---
Creation Date: 2021-08-04 15:39
Last Modified Date: Wednesday 4th August 2021 15:39:13
Author: Jimmy Briggs <jimbrig1993@outlook.com>
Alias: You Need a Status Page
Tags: []
---

# You Need a Status Page

Yes, yes you do. You need a status page. No doubt about it.

If your company has and API or a service that developers and customers consume you need to be able to give them an easy to find website where they can view the status of your system. If you don’t, you’re failing as a company. You’re failing to provide the proper service to your customers and developers.

## **What do I mean by that?**

Simple. How the heck do I know if your servers, databases, etc are up and running properly? For example – If my API requests to your cloud endpoints stop working, or my SDK to your system just stops. Is it my local environment or is it yours? What if is your system? What if your database is down and the service I’m using goes down with it? How can I get notification updates? How do I know what’s wrong? I’m a paying customer or developer for your system – I rely on your system and I feel I deserve to know what’s going on. I’m not alone, most other developers feel the same way.

As a company, I’m sure some of you are thinking “Well, we will just update our twitter account.”

Whatever.

Twitter updates suck. They work, but very few people immediately think “Wow, my app is broken and can’t connect to ABC Companies API. I should look at their Twitter stream.” Pfft. Yeah. Right. Emailing support sucks too, and for that matter, anything that cannot quickly provide a snapshot of your system status system sucks too. What most developers end up doing is looking for a status page of some sort.

When GitHub goes down. How do I know? It stops working. What do I do then? I go to [status.github.com](http://status.github.com/ "GitHub Status Page") – wow, problem solved – I realize they’re down. If not, well, then I have more troubleshooting to do. Maybe it is my system, maybe its my DNS, who knows, but at least I know that the problem is not on your side!

When Gmail or Google Docs goes down how do I know? Simple. I go to [google.com/appstatus](http://www.google.com/appstatus "Google App Status"). If something is wrong, an icon will be present in the matrix of apps and I’ll know if what I’m using is broken. This helps me identify if my connection or system is acting wonky vs their system.

### So, how do you go about setting up a status page?

There are quite a few services out there and open source options too. I advise the hosted solutions as they’re the easiest to get rolling with. But first let’s handle this nonsense –

_But I want to build it myself and host it myself!_

Sure, you can build your own but it’s a major pain in the rear and I don’t advise it. Inventing everything yourself is a sure fire sign that you and/or your company suffer from [NIH Syndrome](https://en.wikipedia.org/wiki/Not_invented_here). If something costs $100 a month and your time is worth $100/hr (trust me, it is) then if you cannot build it, maintain it, update it, etc for less than 1 hour a month with all the same features of the solution you’re evaluating, well … you’re losing money and you will have made a very poor business decision.

So let’s consider the “NIH” option as irrational and let’s get reasonable here.

#### Ok, I’m not going to build one. How do I set one up quickly?

We have a couple of hosted options I prefer and one open source option I like too. Let’s chat about the hosted solutions.

Companies like [Docker](http://www.docker.com/) and [Runscope](http://www.runscope.com/) (as well as many other companies) need a service that they can use to easily relay information to their developers and customers about the status of their system. Both of these companies use different tools, but either is fine.

**[Status.IO](http://www.status.io/):  
Example – [Dockers Status Page](https://status.docker.com/ "Docker Status")**  
Docker (a super awesome container company) has a status page located [status.docker.com](https://status.docker.com/ "Docker Status") which shows you the current status of the Docker APIs, Forums, Website, etc. You can see the API resonse times, uptimes, you name it. All of this is powered by [Status.io](http://www.status.io/) – a very good status page hosting company. [Sign up here](http://www.status.io/ "Status.IO Sign Up").

**[StatusPage.IO](http://www.statuspage.io/)  
Example – [Runscopes Status Page](http://status.runscope.com/)**  
Runscope (an API Monitoring and Testing company) has a status page located as [status.runscope.com](http://status.runscope.com/). StatusPage.IO is packed full of features and is very similar to Status.IO and used by many as well. [Sign up here](http://www.statuspage.io/).

[**Cachet**](https://status.cachethq.io/ "Cachet")  
**Example – [Cachets Status Page](https://status.cachethq.io/)**  
For those either hellbent on hosting it themselves or for those who are stuck inside of an enterprise conundrum, this might be a good option for you. I suggest forking the GitHub repo, then making changes in in that repo so you can easily merge in upstream changes at a later time. [Download it here](https://cachethq.io/).

## Which One Do I prefer?

Good question. Definitely not Cachet unless that is your only option due to some corporate mandate you have to deal with.

Personally the feature set and price point of [Status.IO](http://www.status.io/) is perfect for me. If I were to recommend anyone to use one it would be them.

## Start Now and Become a Better Service Provider

Simply sign up to either of these hosted services, plug in the various components that need to be monitored (both sites have good docs) and then point your DNS to status.yourdomain.com. Please note, _status.yourdomain.com_ is the typical status page domain that developers will attempt first. Some support experts advocate having another domain such as – _yourcompanystatus.com_ which hosts your status page in case your DNS provider takes a nose dive too (so you’ll need another DNS provider for that new status domain – if you go down that route). I’ll leave that choice up to you.

Just having a status page alone puts you ahead of your competition ten fold and makes your company more developer friendly, respectful and professional.

\* _API Uptime Tip: On the same topic of uptime, [Runscope](http://www.runscope.com/ "Runscope") offers tools to help notify you when your own API (or API’s you rely on) start acting up. It’s a service I’ve personally recommended to many of my clients who have an API presence and is worth every penny in my mind (no, I was not paid to say this. [John](https://twitter.com/johnsheehan), the CEO, is a personal friend of mine and I truly believe in the product)._

***

Links: [[Dann Felker.md]]

Sources: [You Need a Status Page (donnfelker.com)](https://www.donnfelker.com/you-need-a-status-page/)

