---
Creation Date: 2021-08-22 23:37
Last Modified Date: Sunday 22nd August 2021 23:37:47
Author: Jimmy Briggs <jimbrig1993@outlook.com>
Alias: Fixing Graphics Driver Issues in Windows
Tags: []
---

# Fixing Graphics Driver Issues in Windows

Graphics drivers can be a serious annoyance in windows and all operating systems. Whether using defaults, [[NVIDIA]], [[Intel]], or whatever, dealing with the constant updates and configuration adjustments is an endeavor most would prefer to avoid.

## Device Manager

To access Window's Device Manager simply search for it or utilize the [[WinX PowerUser Menu]] by pressing `Win + X` and selecting Device Manager.

Once insider device manager navigate to *Display Adapters* where the graphics drivers are listed. For me these are:
- Intel(R) UHD Graphics
- NVIDIA GeForce RTX 2070 Super

![[Pasted image 20210822234219.png]]

If you right click on one of these display adapters, you have options to Update, Disable or Uninstall the driver. Additionally, if you select Properties > Driver you can view more information and specifications regarding the driver.  

A good way to fix issues related to display adapters is to simply remove the driver all together (selecting to uninstall/delete the driver's software for this device also), exit, and restart you machine. On the next startup, windows will automatically detect a missing display adapter and install its default driver depending on your machine.

## Manufacturer and Third Party Drivers

As mentioned earlier, I use Intel and NVIDIA display drivers. These are not the generic drivers the Windows provides out of the box with a fresh install. If your machine uses third party drivers, graphics related or not, it is always best to install the latest versions of the drivers from the respective manfacturer's website directly.

## Intel Drivers

You can download the latest Intel Graphics Drivers from the [Intel - Downloads for Graphics Drivers - Drivers and Software Website](https://downloadcenter.intel.com/product/80939/Graphics-Drivers).

Also, you can utilize Intel's Autodetection Software: *Intel Driver and Support Assistant *

## NVIDIA Drivers

For NVIDIA, go to 

***

Links: [[Reset Windows Graphics Drivers with a Hotkey]] | [[Windows]]

Sources:

