---
Tags: ["#Windows", "#Setup", "#Config", "#Tools", "#Guide"]
---

# How to Use Sysprep in Windows

```powershell
# (Admin/Sudo)
Start-Process "$env:windir/system32/sysprep/sysprep.exe"
```

## What is Sysprep?

[[Sysprep]] (System Preparation) in Windows is a built in feature that is often used to prepare a system [[ISO Image]], which can be deployed to multiple computers.

The preparation process is also called generalizing the image.

Each time you install Windows, the operating system assigns an unique SID (System Identifier) to this computer. 

If you want to install the same OS on many computers simultaneously, you can create a system image and then deploy it to other computers. 

Note that the SID information will be copied to other devices at the same time.

However, SID duplications on the same network may cause many problems, for example, WSUS incompatibility. 

Thus, you must remove the computer-specific information before deployment. 

Luckily, Microsoft created `Sysprep` for this purpose.

It can not only clear the SID information, but also generalize new SIDs for client computers.

## How to run Sysprep?

Follow the steps below to generalize your image and make it ready for deployment:

1. Run the Command Prompt or PowerShell (with Administrative Priveledges)
2. Run command `cd \Windows\System32\Sysprep` to enter the Sysprep [[Windows/System32 System Directory]].
3. Run `sysprep` to launch the Sysprep GUI mode
4. Choose *Enter System Out-of-Box Experience (OOBE)* and *tick the Generalize checkbox*. Also, *Select Shutdown from the drop-down menu*.
5. Click OK.

## Sysprep Tips

- To explore the command line mode, you can run `sysprep /h`.
- *Enter System Out-of-Box Experience (OOBE)*: prepares the server as if it is powered on for the first time.
- *Generalize*: removes SID information from the image.
- *Shutdown*: once Sysprep completes, shutdown the server.

## Sysprep Limitations

Care must be taken when using Sysprep, as it has some limitations. Here are three major restrictions of Sysprep:

1. On a single system image, *you can run Sysprep up to 8 times*. After running this tool 8 times, you *must* recreate your system image.
2. *Sysprep may fail if you install or update Microsoft Store apps before generalizing a system image*.
3. **Users are often disappointed to find Windows 10 Sysprep fails when the Generalize checkbox is enabled.**

As you can see from above, Sysprep doesn’t always work fine. 

Once it fails, you can’t perform deployment with Windows deployment tools like [[Windows Deployment Services (WDS)]] and [[Microsoft Deployment Toolkit (MDT)]].

In fact, you still have chances to deploy system remotely if you read on.

## Deploy System Without Sysprep

You don’t have to run Sysprep when you turn to [AOMEI Image Deploy (AID) Free]().

This freeware works well to deploy system to other computers over a network. The SID information will not be copied during the deployment process. 

Compared to deployment tools provided by Windows, it’s easier to use.

Unlimited computers can be deployed at the same time.

Here are necessary steps to deploy your system.

### Preparations

Preparations you need to do:
- Make sure that all the required computers are on the same network.
- All client computers should support PXE boot. If not, exclude it please.
- The disk sequence numbers for storing system in target computers must be the same. Move out other disks and only keep the destination disk.
- Create system image backup with [AOMEI Backupper Standard] on the central Windows 10 computer. Choosing a network shared folder or NAS as the destination path when creating system backup.

1. Install and open AID. Choose Create WinPE automatically to create a bootable ISO file of the system or Create bootable WinPE ISO manually to add custom drivers into WinPE.

ISO  File

2. Keep only one DHCP server in the LAN. Click Enable DHCP if you have no DHCP server. Then click Next to get into this window.

Second Interface

3. Start all the client computers from network boot by entering into BIOS and set the network boot as the first boot device.

Boot

4. Here you can see the status for all client computers. Once a computer connects to AID successfully, you can get "Client computers connected". Click I confirm all the client computers which need to be deployed are online when all the client computers are connected. Then click Next.

Connect

5. Here comes detailed guide for configuring the operation.

a. Choose Browse to find your system image.

b. Select the client computers you need or click All to select all connected computers.

c. Input the destination disk number. If all the client computers have only one disk reserved, the disk number should be 0.

d. Decide how many computers will be deployed each time.

Browse

e. Click Settings to set computer name. Then click OK.

Settings

Tips:

Set IP: click it to preset IP address. This feature is in Technician edition.

Universal Restore: you can deploy system image to computers with different hardware. Upgrade to Technician version to enjoy this feature.

6. After confirming your operations, you can click Start Deploy. Then choose whether to shut down or restart the client computers.

Start Deploy


Verdict
Although Windows users are given many tools to deploy system image remotely, you must prepare the system image using Sysprep in Windows 10. For many users, Sysprep is time consuming and complex, and sometimes it even goes wrong.

However, AOMEI Image Deploy makes a real difference. By using it, you don’t need to be worried about Sysprep limitations. What’s more, it serves you well as an Acronis Snap Deploy alternative (free).

***

Source: https://www.ubackup.com/windows-10/sysprep-windows-10-6988.html#:~:text=How%20to%20run%20Sysprep%20in%20Windows%2010%3F%201,Shutdown%20from%20the%20drop-down%20menu.%20Then%20click%20OK.
