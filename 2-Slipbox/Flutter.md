---
Creation Date: 2021-08-04 15:24
Last Modified Date: Wednesday 4th August 2021 15:24:25
Author: Jimmy Briggs <jimbrig1993@outlook.com>
Alias: Flutter
Tags: ["#Development"]
---

# Flutter

![Flutter](https://www.donnfelker.com/wp-content/uploads/2019/05/flutter-1024x538.png)

Developers should not ignore the Flutter technology.

This post should help clarify why I’m bullish on Flutter.

### **Build the iOS and Android App at the Same Time**

There are many reasons why I feel that Flutter might have a chance of succeeding in the long run, but one of the big ones is that with Flutter you can write the app once and run it on both iOS and Android.

I’m sure everyone is thinking … “well you can already do that with X”. 

You’re right, you can build an app with [[../0-Inbox/Placeholders/React Native.md]], [[Kotlin]] Multi-Platform/Native, [[../0-Inbox/Placeholders/Xamarin.md]] and as a [[Progressive Web App (PWA)]].

I’ll talk about each of this later in this article, but first let’s talk about Flutter.

### **Current Problem: Two Apps, Two Teams and Duplicate Code**

![Duplicate Code](https://www.donnfelker.com/wp-content/uploads/2019/05/duplicate-code.png)

During my tenure as a mobile developer there’s always been two apps, and two teams (or individuals) managing these apps. 

One team for for iOS and one team for Android. We wrote the **same exact app, but in different languages for different platforms**.

Kind of normal right? Most people are thinking “yeah, so what … and the problem is?”

_Businesses are paying for the same app to be written twice._

When you read that sentence a loud, it sounds crazy. That’s exactly what CEO’s/_Businesses Owners/_VP’s/etc think. Who in their right mind would want to spend twice the amount of money to ship two apps that do the exact same thing but for different platforms? Shouldn’t we be able to write an app once and have it work on both platforms?

Immediately some of you reading this are thinking .. well.. uh NO – that’s not possible. Of course it has to be written twice – once for iOS and once for Android.

Well … not really, we don’t have to follow that same line of thinking … let’s dive in.

**A Brief History of Write Once for Mobile**

Take a look at app history and you’ll notice that there have been apps written to target both platforms for years. A prime example: Most games are written to target both platforms. This is why the widgets (buttons, text boxes, etc) never look like system widgets in games. Widgets in games use their own custom built ui-widgets – giving them a style all their own, custom to the game (or app). Not sure what I’m talking about? Go open a popular game and look at the buttons. They’re not native looking buttons you’d see in Android. Very often they’re some custom thing that is part of the game. Go look at that same button on the other platform (if you’re on iOS go to Android and vice versa) – you’ll notice that the button is exactly the same (in most cases – there are caveats to everything).

So how are game companies accomplishing this but not us day-to-day app devs?

These game companies are usually coding very close to the metal – using C as their language. They compile to the platform of their choosing (iOS or Android) and such. They draw directly to the canvas and they do not use system widgets (gaming sdk’s aside – e.g. – Google Play Games, etc).

In other words …

**They’re drawing all of their own UI.**

They have their own UI tool kit that they use to render a button, a text box, a dropdown, etc. This UI tool kit is written by them very often and is compiled as part of the game – it’s not part of the Android or iOS platform.

We as productive app developers don’t have that luxury, and let’s be 100% real here. Being a real-deal, low-level C-programming game dev is hard, real hard. Most of us are game dev and most of us are not going to create our own UI widgets just so we can get back to handling regular use cases like “adding a button and a text box to a form”

From a financial point of view, for a business, writing an app twice doesn’t make sense. This is a big concern for businesses (large and small).

## **Cross-Platform Options**

Since the inception of the two major players in mobile (iOS and Android) various cross-platform systems have attempted to solve the problem of creating two of the same app. Below are a number of options that folks have used.

#### **PhoneGap/Cordova**

![Phonegap](https://www.donnfelker.com/wp-content/uploads/2019/05/phonegap-300x93.png)

This didn’t really work out.

PhoneGap was not performant, and just felt kind of clunky. Felt wrong from the jump. When you tapped on a button or scrolled there was noticeable lag and it was to the point where it was frustrating to the user.

Integrating with existing platform components was rather painful and caused a lot of development issues.

Overall the solution aways felt half baked and the user experience was never top notch. It always felt as if the app is cobbled together.

I don’t recommend folks going this route. If they are evaluating this route I often will point them to just using. A PWA (Progressive Web App).

#### **React Native**

![React Native](https://www.donnfelker.com/wp-content/uploads/2019/05/reactnative-300x49.png)

[[../0-Inbox/Placeholders/React Native.md]] get’s us **really close** but it still falls a bit short …

We still have this weird latency issue (sometimes), and a [[Javascript.md]] bridge we that we have to deal with on both platforms if we need to get into lower level stuff.

We are using the native UI widgets under the hood (sorta), so we do get the true “native” feel which is nice.

Ultimately, we’re still running JS which call into native Android widgets and iOS widgets via a JavaScript bridge. With React Native we’re not running a custom UI, we’re writing JavaScript that gets mapped to native OS calls. This does have a small performance penalty.

It “kinda” feels right, but still feels kind of wrong – however it’s a great step and in my opinion has a lot of potential as technology improves. Don’t underestimate the JavaScript community, it is HUGE and powerful.

The problem I found here though (other than the bridge) is that I had to learn both platforms, in and out to really be effective at it when I needed to integrate platform specific things (this is normally where cross platform apps fall down anyway). This is not something that is unique to my experience either. [Gabriel Peal](https://twitter.com/gpeal8?lang=en) worked at AirBnb where they had a large React Native installation and he shared similar sentiments in [his detailed blog post](https://medium.com/airbnb-engineering/react-native-at-airbnb-f95aa460be1c) about how they migrated away from React Native.

Another thing that I found difficult was testing on React Native. It was “ok”, but I still felt I was being lied to in regards to the tests. Was I testing React Native? Or was I testing the app? Sometimes tests passed, but the UI didn’t work on a device. So my skepticism meter shot up. I’m sure there was something I was missing, but this goes back to having to know both platforms and the intricacies of both in order to get the bits to align properly.

All that aside, I still feel rather positive about React Native and my thoughts are:

**If you don’t need to dive into the lower internals of an OS, and your app is 100% React Native, you can do some amazing stuff with it and it’s still a contender in that area**

Great apps for this are LOB apps (Line of Business), simple forms over data, etc. You definitely would not want to build anything super complex with it as I could see it becoming rather iffy quickly. I’ve consulted with a few companies who have went really deep with React Native to run into problems when their apps were large. At that point they either had to re-write part of the their stack to be more native or had to re-evaluate certain pieces of their app.

As usual, it’s all about tradeoffs.

**Xamarin**

![](https://www.donnfelker.com/wp-content/uploads/2019/05/xamarin-300x126.png)

[[../0-Inbox/Placeholders/Xamarin.md]] works amazingly well, the problem here is that while I was able to achieve feature parity with Xamarin I felt that I had to learn both platforms due to the design nature of both platforms. This was rather painful. I was able to share 80% of the code, but the last 20% made it almost unbearable as I was having to learn both platforms again to create the UI. 

Learning both platforms is a show-stopper. I want to write the app once and be done with it.

That said, this technology is quite viable if your team is a [[../0-Inbox/Placeholders/DotNet Framework.md]] based team and you need an app that is not a game. I know many companies in the mid-west who use Xamarin to their success. [[Microsoft]] has done a great job of supporting this tool over the years. This, with Xamarin Forms, makes it super easy to build and ship a cross-platform app, that “just works”.

However, for me, I can’t rely on it as I need to know .NET, iOS and Android systems and widgets. Under the hood these things map to existing widgets and while you can get featured parity quickly, you do have to maintain two platforms at some level and know the intricacies of each.



#### **Kotlin Multiplatform / Native**

**![Kotlin](https://www.donnfelker.com/wp-content/uploads/2019/05/kotlin-300x67.png)**

I love [[Kotlin]]. In fact, I can’t imagine writing another Android only app in Java ever again.

However, I don’t think Kotlin native is where it’s at. I feel that Kotlin native is a distraction and many industry leaders are talking about how great it is and without a doubt it is a great technical feat … but … here’s where it falls down …

It’s a JVM based language.

Convincing iOS developers or anyone else that they need to learn Kotlin to write a cross platform app is simply not going to happen. Sure, some folks will follow suit, but the movement will be small.

For example, most non-Android devs that I know will just stop right at “Install JDK”. Most of those people are already thinking “NOPE, no thanks.”. Yes, I know that other Multiplatform tools require the same, but I’m trying to illustrate a point here.

I know this is hard to hear, but this is the reality out there. Java and the JVM, while still popular is not the shining knight most people want it to be. It’s more like some clunky armor that works. Kotlin just happens to be the new and improved armor that works 10x better and as some nice aesthetics. However, I still have to go through the pain of getting the armor on before I can use it.

In other words, you’re going to peel Swift away from a iOS developers cold dead hands. Convincing them to move to Kotlin, while possible, is something I’ve tried and it doesn’t work that well. It’s a pipe dream.

I feel that Kotlin Multiplatform and Kotlin to JavaScript are cool pieces of tech, but the user adoption might not be there. JavaScript already has a huge jump start on Kotlin in regards to adoption, but ultimately we get back to the same argument – what one person loves the other person hates. It is what it is.


#### **PWA – Progressive Web Apps**

![PWA - Progressive Web App](https://www.donnfelker.com/wp-content/uploads/2019/05/pwa-logo-300x113.png)

This one is interesting because I’m in a very small camp of people who believe that the web will win one day. It’s the ultimate platform.

I do feel that one day we’ll see that there are a handful of super useful native apps (Navigation, Games, Entertainment, systems control, etc) but for the most part everything else will be web based. This is where PWA’s come in.

I’ve seen some really good PWA’s in the last few years.

The problem here is that it’s not a “native” app and you have to put a wrapper around it. That just feels clunky. People want “an app”. Actually they don’t want an “app”. They want an “icon” they can tap on, one they can search for on the App Store.

I don’t think were here yet, for PWA’s … BUT …. I will say this … when I consult companies for mobile apps and they ask me for a quote, more often than not I’ll end up talking them out of an app.

Why?

Because they don’t need one. Someone can go to a link and get a super fast loading HTML web app that does everything they need. I usually tell them “this is v1”, if you need XYZ later, then we can look at an app. The we get to that point though, I’ll usually look cross platform as most companies do not need to write a game/etc. 

## **Will Any of These Technologies Actually Work?**

In the right situation, yes. They will work. However, I don’t think any of these are truly revolutionary. React Native and Xamarin really helped spearhead what some of the possibilities were like, but ultimately it felt like we were still writing two apps and debugging two platforms/etc. As much hype as Kotlin Multiplatform is getting in the Android world, I don’t feel it’s that popular. In the last few weeks I’ve spoken to close to a hundred devs and none of them have heard of Kotlin Multiplatform unless they were an Android dev.

Kotlin Multiplatform is cool, but thats where it stops currently. Maybe that will change – only time will tell.

That’s just my .02 and I know its not a popular one – especially since the majority of the work I do is in the Kotlin and JVM camp right now. When coming to this conclusion I did my best to step out of my own field of influence and observe things from alternative perspectives. I’ve talked to people in all of these areas – React Native, Xamarin, Kotlin Multiplatform and then day-to-day iOS devs.

The short of it is … people grow attachments to their tools. It’s hard to get people to change. Developers are optimistic by nature and due to that optimism our outlook is often shaded with a lens that is not often the reality that we live in.

Here’s the thing – all of these cross platform technologies suffer from a similar problem – we’re using an existing language and/or platform that you’re already familiar with to create a cross-platform app. This works well if you already write JavaScript, or .NET or Kotlin, but if you don’t … well… good luck with convincing others to try it. Habits are hard to break, especially when they’re not yours.

… and this is where Dart and Flutter come in to play …

## **Why Flutter Might Work**

When I first heard of Flutter I was bearish on it. I’ve seen so many of these cross-platform technologies that I figured it was another fly by night type of tech that was nothing to write home about.

That changed when [Kaushik Gopal (@kaushikgopal)](https://twitter.com/kaushikgopal) and I talked to [Eugenio Marletti (@workingkills)](https://twitter.com/@workingkills) on the Fragmented Podcast about his experience with Flutter ([Part 1](https://fragmentedpodcast.com/episodes/118/) and [Part 2](https://fragmentedpodcast.com/episodes/119/)).

I learned in that conversation what the power of Flutter really was and how, if executed properly, it could become a powerhouse in the industry.

### **The Flutter Developer Experience**

Before I hop into the full developer experience I want to cover a brief history of Android and some of the things that have made developing for Android not as enjoyable as it could have been …

One of the things that is frustrating about Android development is that the system was not built with testing in mind. This makes testing very frustrating. I don’t blame the engineers at Android for this. Android was a small company before Google bought them and brought them in house.

In fact, Android was originally built to be a Camera operating system.

Read that again and let it sink in for a second.

Android was a small company before Google acquired them and the first lines of Android code were written in 2003. Yes. It’s that old. Google didn’t buy the company until 2005.

I’m sure you’re painting a picture in your mind that helps illustrate why things are the way they are in Android … in short – its old and complicated.

Android started with a foundation back in 2003 that was not conducive to testing especially in a camera operating sense of the world. Fast forward to current day and we have Kotlin and many tools and frameworks to help us with testing, but thats what they do … they help. If you dive deep into these libraries you see there’s a lot of magic that’s happening to help combat the problem of dealing with a large legacy codebase like Android. Lots of retries, lots of special cases all over the place. I’m grateful for the libraries, but it doesn’t fix the root cause that we have a huge complicated legacy beast on our hands (Android itself).

I commend the Android team(s) at Google for helping make things better, but lets say it like it is …

Android is a pig with lipstick.

Albeit, its a great pig with lipstick. I favor Android over iOS any day, but … it’s easy to see why things are now rather brittle.

Which brings me back to experience … I’ve been developing android apps for nearly 11 years now. I started with v1 and I’m still here. Things have gotten a lot better, but there is s still a huge level of frustration with day to day development and that experience is a real downer.

I’m not going to lie, I’ve often thought about throwing in the towel on Android development because of the frustration level of it.

Before you say “Well Donn, you must have been working on the wrong apps, or the apps were built incorrectly.”

Possibly. Maybe. I’m a consultant. I see some amazingly built apps and I see some real piles of shit. It’s a mixed bag. I do my best to fix things, but at the end of the day there’s only so much budget to go around.

Back to developer experience …

I read the following quote somewhere, but I cannot find it (if you do find the source, let me know and I’ll link it):

_Ruby on Rails is a joy to work with._

Wait, what? Android, now Rails?

Where are you going with this, Donn?

Hang in there, trust me, it’s going somewhere …

I’ve been doing Rails development for many years now and I completely agree. Working with Rails is a joy. The ruby language is fantastic and I find myself enjoying working on Rails projects. I can express my intent easily and I find it fun (I also feel this way about the Kotlin language, but not the Android framework, in particular).

Flutter is the first tech that I’ve worked with in mobile where I truly enjoyed the development experience. You’re using very “React like” programming models (mutating state, uni-directional data flow, etc). My previous 10-11 years have been spent in antiquated Android development, and to be 100% honest, it’s been fun, but also very frustrating.

When I wrote my first Flutter app I was thoroughly impressed with what I was able to do. I had worked with React before so some of the concepts moved over easily for me. It simply made sense. State management, building the UI with components in code, a reactive like architecture. It simply felt right.

One of the real deal things that got me interested in Flutter was testing support. It’s baked in. Very rails-esque if you ask me.

I did run into some areas that were confusing during development, but thats normal during any exploration of any new tech. I was able to resolve them easily – same could be said of any of the other platforms too. It’s just part of the learning experience.

Overall, I found the experience of setting up a new project easy, fast and I was able to hop in real quick and be productive (after I grokked the system).

### **The Dart Programming Language**

Flutter apps are written in [[Dart]]. I like Dart. That said, I’m not a raving fan of it either.

I think [Matt Sullivan](https://twitter.com/mjohnsullivan?lang=en) put it best in one of his talks (sorry can’t find the link) … and this is paraphrased …

_“Dart is kind of a mundane language. It’s great at its job, but it’s nothing to rave about. In fact, some might find it boring, but that probably works in its favor as its easy to understand and apply._

I totally agree with that.

I first wrote dart back in 2012 at Google IO in a code lab. It felt very “JavaScripty”. In fact, Dart is an ECMA standard, so you’ll find a lot of similarity between Dart and JavaScript.

Learning Dart is fairly easy and if you have any experience with any C style language you’ll pick it up quickly.

Why Dart though?

As mentioned earlier – it’s hard to peel tools away from existing developers hands. If they like Swift and you tell them to write Kotlin, well … that’s going to be an interesting kerfuffle.

The Flutter team chose Dart for many reasons, as outlined in this article: [Why Flutter Uses Dart – Hacker Noon](https://hackernoon.com/why-flutter-uses-dart-dd635a054ebf) and I think one of the huge benefits of using Dart is having a “newish” language to support a new cross platform technology. I can’t come to Flutter and be encumbered by previous notions of how I think Dart sucks or Dart this or Dart that.

Why?

Most likely I’ve not used Dart. I fact, I’ve never met a dev who has used it outside of Flutter, yet. I know they exist, but they’re rare.

This opens a door that was previously closed. Now, as a developer, I have the opportunity to learn a new framework for cross platform development and I’m not inhibited by a previous experience with a given language. Its a new landscape that I’m embarking on and that for a developer is a very freeing feeling.

It’s almost like a painter who is given a new set of brushes they’ve never used before on a canvas of a type they’ve never used before with a paint type they’ve never used before. Sure, they may be a great painter, but now they get to explore and see what they can do with these new tools. They see it as a playground.

The same thing happens when you start with with Flutter. It’s a new playground. You’ll find that you can/can’t do X with Dart or that you hav etc do it a different way. Like it or not, you’re learning and growing and that’s a good feeling as a developer.

Overall, Dart was a great choice and I think it has helped the adoption of the platform more than what most people give it credit for.

### **No More Native Widgets**

I’m going to dumb this down a bit, but in short – Flutter doesn’t call out to the Android UI toolkit. It does not call the EditText or TextView or anything like that.

Flutter draws directly to a canvas (basically) and does not interact with existing iOS or Android widgets. Just like a game would – it’s drawing everything.

You might be wondering how this is done … kind of magic, right? It looks like regular Android and iOS buttons …

This is done with Dart at the higher level (where they recreate the widgets themselves or with a theme they create) and then render them to the screen with with Skia (C++), Dart and some Text components directly to the canvas.

![Flutter Architecture](https://www.donnfelker.com/wp-content/uploads/2019/05/flutter-arch-1024x542.png)

What this means is that Flutter controls the entire drawing of the widget. So they can say a button “looks like this” and a text box “looks like this” and they can (and do) make them look the same on each platform.

This also allows for the Flutter team to deterministically add platform specific features to each widget. For example, a list view item in Android would simply be a list item. In iOS it might have a chevron on the right hand side. Many things like this are managed by Flutter.

Just like a game, all the rendering is handled via Flutter. This can be seen as a risk because of being out of date with the platform during upgrades, but if you’re using the basic components that are provided by Flutter it’s a no brainer. They also do a great job of keeping up with the changes.

### **Flutter Makes Design Easier (if you allow it)**

As a developer one of the things I like to do is ship often. What deters this from happening is a good design language.

Back when I was a web developer full time I was ecstatic when Twitter Bootstrap was released for the web. I could easily build great looking sites with minimal effort as long as I use this design framework. It was great.

We needed something like this for Android and other platforms.

Material design enabled this to happen. Unfortunately, you had to often build your own widgets for Android and iOS (though that has changed recently with some of the design support libraries).

When building a Flutter app I prefer to use the Material Design Theme out of the box to build something. What the Flutter team has done is recreate the Material Design widgets for both platforms. So I will get a toolbar, buttons, inputs and text that looks and acts as it should for both Android and iOS, all without me having to do anything other than saying I need a Button here, and some text there, etc. Flutter renders it correctly on both platforms and it looks great.

This is huge.

### **Testing**

I don’t have to rely on Espresso for Android and whatever tool is used for iOS.

That in itself is huge.

Testing is built in from the ground up. You can have one of the following three test types:

-   Unit Test: tests a single function, method or class
-   Widget Test: Tests a single widget (known as a component in other UI frameworks typically)
-   Integration Tests: Test a complete app or a feature of an app.

You can easily set up your tests and write code with confidence quickly. To me, this is a HUGE win and something that attracts me to the platform.

### **Greenfield vs Brownfield**

As with anything there are some pitfalls with new tech. One such thing is Greenfield vs Brownfield development.

Let’s quickly define the terms:

-   Greenfield: Brand new app development
-   Brownfield: Existing app development, adding features_changes_etc

At the time of this writing, Flutter is great for Greenfield development where the entire app is in Flutter.

The same can not be said of the opposite. Brownfield Flutter apps are not possible at this time and the [Flutter team is currently working on a solution](https://github.com/flutter/flutter/wiki/Add-Flutter-to-existing-apps).

I’m not sure its good to mix the two though. This creates problems later down the road as the platform zealots of each team (Android and iOS) want to rip out the Flutter stuff, while the Flutter devs want more of the app to be Flutter.

I had his same experience with React Native and brownfield development. Native devs wanted it gone. React devs wanted more React. Both have their preference.

When an app is build Greenfield with Flutter, the team embraces the tech and makes it work.

If you’re thinking about Flutter, I advise building an app from the ground up with Flutter or recreating another simple app you have with Flutter.

### **Skepticism**

With each new piece of tech some high level of skepticism is bound to follow. Flutter is not immune to this.

Some common concerns I see is:

-   It’s a Google product, they could kill it tomorrow.
-   Dart will never be mainstream, it’s also a Google product that could be killed
-   I can’t do xyz with it.

Listen, Flutter is not a silver bullet, but it’s something that should be evaluated. Imagine fixing a bug ONCE and it’s fixed on both platforms. Kind of reminds me of the web days. Fix it once and it’s fixed for everyone. That would be fantastic and businesses drool over this idea. You know how much money could be saved? Productivity increase? This is why things like React Native and Xamarin have gained traction.

I do have my share of skepticism though too. I feel that Flutter is a fantastic cross platform tech for Android and iOS. The Flutter team has recently announced Hummingbird – Flutter for the Web. This is where I come to a hard stop.

I feel that HTML/CSS/JS are the web and thats what belongs there. They’ve been the incumbent since the inception of the web. They’ve been improved and this has not strayed. We’ve tried other cross platform tech on the web before and it’s always failed.

We tried Java Applets, we tried Active-X, we tried Flash, we tried Silverlight, etc. All were killed and dominated by HTML/CSS/JS. The closest was Flash, but web now how that panned out.

I know that Hummingbird is going to compile down to some form of HTML and CSS with canvas rendering, which is exactly what its doing (canvas drawing) in Android/iOS. So… this might have some legs … I’m not sure though. This is a bit iffy for me right now and I’m going to stand on the sidelines and see how it unfolds. I’m not confident it will work out, its such a huge jump from mobile web, that it’s hard to fathom what and now how that would work efficiently for performance and for development and debugging.

This is also why I’ve also felt that web will win one day. Our devices will get fast enough, the networks will have enough capacity and HTML/JS integration will become so good with the mobile devices that we will end up writing everything as a PWA/Web App of some sort.

When will that happen, I’m not sure. We’re definitely not there yet. However, watch Google IO and look at the sessions. You’ll see there are always a good amount of Web and PWA talks. For good reason, Google see’s it too. In fact, if we can get everything over to the web, things are easier for everyone. Easier to build for, easier to manage, though there is some skepticism about app stores/etc. I think those will go away one day too, we’ll see though…

### **The Flutter Community**

This last point is one worth bellowing from a rooftop.

Without a community any piece of tech will fail.

Flutter has a raving community of fans. I’m in that camp. I’m not saying that it’s raving and great because I’m in it either. It’s not confirmation bias at work, not at all.

Look at all of the meetups, the blogs, the videos, podcasts, conference talks, etc. Flutter has gained a lot of momentum.

Whilst not covered here in detail – there is a significant open source movement with Dart packages that can be used on Flutter. Explore them here: [Dart packages](https://pub.dev/) You can find a ton of packages to do all kinds of stuff that you need to do. All built, supported and used by the community at large. It sort of reminds me of the early Node.js days with NPM and early Rails and rubygems days. Exciting times.

## **Try It, You’ll Probably Like It**

Flutter a new way to write cross platform apps that is not encumbered by previous technologies. It allows us to write apps that target both platforms with ease. It gives you a new programming language and paradigm (uni-directional data) to learn and follow. When you’re done compiling you’re left with two files – one for Android and one for iOS and they look, and act like iOS and Android apps respectively – all the way down to how a list bounces when you hit the end of it (it varies per platform).

***

Links: [[Dann Felker.md]] | [[../0-Inbox/Placeholders/React Native.md]] | [[Kotlin]] | [[Dart]] | [[../0-Inbox/Placeholders/Xamarin.md]]

Sources: 
- [Flutter Just Might Work - DONN FELKER](https://www.donnfelker.com/flutter-just-might-work/)

