---
layout: "post"
title: "Experiments in AI: Building a Static Website in 2026"
author: "damianeoloan"
---

This website is the result of an altogether successful experiment with AI for personal use which unfolded as follows:

## Option 1: Local AI on a headless server on a local network

This is, I initially thought, the ideal way to run AI at home. The device I had available was an Umbrel, whose OS app store offers a suite of options and whose marketing department were focussing heavily on the AI use case. However, its primary use case being to hold hot wallet keys, its manufacturing process in China and shipping (in my case) via a few days in Shenzhen Customs, I was always somewhat skeptical and the mixed-use seemed to me unrealistic.

This option was quickly discarded. No harm or cost, but no progress.

## Option 2: Local AI on a laptop running Linux

The reason I was attracted to the first option was keeping the AI away from my personal device for everyday use. So I was reluctant to even try this, but I looked at the Ollama website and the models on offer and was somewhat persuaded. Under that setup, I had two terminal tabs open: the first showing the ongoing Ollama process and the second for input of commands or prompts. There was a specific command required to write a file to the hard drive, but once input the permission was there and it did so successfully.

I could see how commands could be chained together in a bash script, for example, to create something like what came next in the form of agentic AI.

Given the limitations of the machine, I wasn't expecting much in terms of performance, but I used Granite and Mistral and both were impressive. At one point, I noticed a URL I had posted from my clipboard into a web browser while waiting for AI output was visible in the logs of its running process. It bothers me when applications do that. I cancelled a subscription once for that reason alone.

Two things are undeniably true about local AI: it needs to be able to access the web, and it has full read/write access over at least some of your hard drive. A third, its "black box" nature, is more controversial, but when I looked into how one knows exactly what data is being transferred, the suggestions quickly turned to packet analysis and such ridiculously complicated solutions.

This option was intriguing in terms of the range of models, but it persuaded me that AI requires a dedicated device and that device can be thought of like a Chromebook: a terminal to access cloud applications.

## Option 3: Cloud AI on a MacBook

Some years ago, I stopped using Apple products altogether after my MacBook stopped rendering Taiwan's flag at the request of the CCP. Pleased to see the company's efforts in bringing more competition into the chip industry and re-shoring manufacturing, I thought a base-model MacBook Neo would be ideal for a cloud AI machine: no biometric ID hardware, a Claude desktop app and Apple's suite of development and creative software with just enough memory to run them.

I took out a Claude subscription and got to work on a task I'd procrastinated about for a long time: some Jekyll sites that needed their dependencies updated for security fixes. Static websites are an excellent playground in which to learn about software development generally, and that extends to AI.

I gave Claude an API key with read/write access to all my public repos and so it began.

### A Difficult Start

Unsurprisingly, Claude's target market is corporate. When I gave it access to my GitHub account, it took my account email and added it to my authenticated commit credentials. GitHub would have blocked the attempt to publish it, but one can see the structure assumes a corporate employee using his company email address to access a GitHub account that uses the same account.

It wanted access to everything I have including my network. It wanted big data right now and it was "bolshy" about demanding it. I had nothing to offer it but my single tab in Safari with a newly-created inbox. It suggested a daily newsletter, so we started with two: one on geopolitics, another drawing strictly from .gov websites for updates. The former was the expected propaganda and immediately sent to a folder named "failures". The latter worked fine, but had to be explicitly told not to add other sources for comment.

### Onto Jekyll

Moving on, I told it to attempt to build a Jekyll site, read the build errors and fix until it was successful. It worked more or less flawlessly, despite an early inclination to re-write my zsh configuration.

I then prompted it, in some detail, to remove two Jekyll Collections and to add two new ones. This it did in a way so alien to Jekyll's modus operandi that I sent it to the "failures" folder. That seemed to communicate clearly a need for change which resulted in improved output. I prompted it to do as little as possible and show minimal initiative. I gave it the Jekyll docs link and told it to read them carefully and understand the guiding philosophy, or absence of one as they say themselves.

I spent a day writing a meticulously-detailed plan for the collection updates: the final folder structure, the new files that would be created, the contents of each file. It went through the steps, reporting back when each was complete. It suggested opportune moments to stage and commit changes, and refrained from pushing them without an explicit order.

It flagged a suspected issue: slow loading times on complete archive pages. I thought about it, and the follwing day gave it three descriptions of user personas based on a few words each. It immediately constructed a test to measure site performance for each, and output a table with realistic figures to two decimal places. It was the first time I had been genuinely impressed by an AI.

It wrote nice search functionality for this website, which has moved to the footer in anticipation of decreased prominence of search in general, perhaps to be replaced by an 'Ask AI' feature.

I found some archive data for it to play with. It was able to convert it into a format usable within the Jekyll ecosystem, using well-designed components to display it and hit-and-miss CSS to style it. This was the first time I reached my token limit, calculated within five-hour periods, but the same work it did in one hour would have taken me days if not weeks. The results weren't perfect and did require small adjustments, so I did wonder about its usefulness in a mission-critical setting, but for my purposes it was good enough.

### Onto Rails and Securing Claude

I was very happy. Now I could bring my MacBook to a cafe like a normal person and pretend to work with things like a terminal and dev tools.

However, every cafe has prominent cameras placed overseeing every chair. I would have to assume my password was compromised every time I went home. The situation wasn't dire given the absence of useful data in my possession, but on principle I wanted to be able to secure it.

I like FIDO2 keys and I thought if I logout after each session, at least the app shouldn't be able to do anything until I use one to login again. But I'd noticed the MacBook didn't support the key well for my email account, and it's not easy to find a website to test Yubikeys, so I moved onto a Ruby on Rails project.

This was a simple web app: an account can be created with a non-email user and password. Once created, a countdown of ten minutes begins at the end of which it is deleted. In the meantime, the user can login, add a FIDO2 key, logout and login again using the key. Within the app, he can create a challenge and use the key. The app worked perfectly albeit with rough edges, the key didn't.

I explained the problem in a prompt and Claude added that its own app doesn't offer any 2FA security whatsoever. It assumes security is managed at device level based on biometric authentication, and it refuses any other approach. It did offer to write a lower-level app which would output anything possible when the key was inserted into one of the two USB-C ports. There was nothing to output: the MacBook just refused to play with the keys.

Apple assumes you will create an iCloud acccount, and its system then works something like this: wait for a FIDO2 key challenge from a web app, route it through its Keychain and iCloud, make a permanent record of the key and use that in future. Whatever it is, I didn't expect basic functionality to be disabled if I just wanted to use the device as intended. I told Claude that it wasn't you, it was me and my computer, but the time had come to go our separate ways.

## Work-in-Progress

I think more competition in the AI space would be very welcome. Currently, one would be forgiven for thinking that DARPA had given a handful of collaborators a fork of the same codebase. 

Nevertheless, even in its present state, it has so much potential in terms of productivity that the only question is how it should be integrated, not whether. Unfortunately, I don't think the answer is an Apple device for my particular use case, but for education or public sector use I can imagine demand.

I will check in on Apple again in another few years. I will find a better solution for personal AI use based on a dedicated Linux device and more knowledge of its permission structures, and continuing to leave the compute to the data centers I am pleased to see are under rapid construction.
