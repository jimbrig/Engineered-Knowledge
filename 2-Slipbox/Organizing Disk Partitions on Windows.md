---
Creation Date: 2021-08-13 14:03
Last Modified Date: Friday 13th August 2021 14:03:59
Author: Jimmy Briggs <jimbrig1993@outlook.com>
Alias: Organizing Disk Partitions on Windows
Tags: ["Windows/Setup", "Configuration"]
---

# Organizing Disk Partitions on Windows

Dividing your hard disk into several partitions can help you organize your data better and keep you machine running smoothly. 

Keeping your Operating System (OS) and Applications separate from your data will simplify your backups/recovery and may increase your PC’s performance. 

If you use more than one OS on your PC then it really makes sense to split out disks into separate partitions by OS.  That way you would be able to access your data from whichever OS you are booting from.

Before you begin, you should first decide on how you want to organize your data. 

For example, you might want to have a partition for documents, another for images or video. 

I generally follow a more broad approach and split out my partitions into something along the lines of:

- OS/Windows Partition (C:)
- Data Partition (D:)
- Archive Partition (A:)
- Backup Partition (B:)

Plus the default Windows partitions which include not only the default C drive primary boot partition, but also:

- Reserved System Partition (Hidden)

## Solid State Drives (SSD)

A solid-state drive (SSD) is a hard drive that uses solid-state memory to store persistent data. An SSD must have a minimum of 16 gigabytes (GB) of space to install Windows. For more information about drive space and RAM considerations, see [Compact OS, single-sourcing, and image optimization](https://docs.microsoft.com/en-us/windows-hardware/manufacture/desktop/compact-os).

In the past (before Windows 10), to install windows on a SSD, you first had to perform the Windows System Assessment Tests, or [[WinSAT]] on the drive. In Windows 10+, Windows now detects SSD drives and automatically tunes itself accordingly.

## Windows OS Partition Requirements

When you deploy Windows to a [[UEFI]]-based device, you must format the hard drive that includes the Windows partition by using a [[GUID partition table (GPT)]] file system. Additional drives may use either the [[GPT]] or the [[master boot record (MBR)]] file format.

A [[GPT]] drive may have up to 128 partitions.

Each partition can have a maximum of 18 exabytes (~18.8 million terabytes) of space.

### System Reserved Partition (EFI)

The device must contain a system partition. On [[GPT]] drives, this is known as the [[EFI System Partition]], or the ESP. This partition is usually stored on the primary hard drive. The device boots to this partition.

The minimum size of this partition is 100 MB, and must be formatted using the [[FAT32]] file format.

This partition is managed by the operating system, and should not contain any other files, including [[Windows RE]] tools.

### Microsoft Reserved Partition (MSR)

In Windows 10, the size of the MSR is 16 MB.

*Add an MSR to each GPT drive to help with partition management*. 

The MSR is a reserved partition that does not receive a partition ID. It cannot store user data.

### Utility Partitions

==Any other utility partitions not managed by Windows must be located before the Windows, data, and recovery image partitions. This allows end users to perform actions such as resizing the Windows partition without affecting system utilities.==

==Protect end users from accidentally modifying utility partitions by identifying them using a GPT attribute. This prevents these partitions from appearing in File Explorer.==


#### To set partitions as utility partitions

-   When you're deploying Windows by using **DiskPart**, use the **attributes volume set GPT_ATTRIBUTE_PLATFORM_REQUIRED** command after you create the partition to identify the partition as a utility partition. For more information, see the MSDN topic: [PARTITION_INFORMATION_GPT structure](https://docs.microsoft.com/en-us/windows/win32/api/winioctl/ns-winioctl-partition_information_gpt).

```powershell
diskpart
list disk
select disk 0
list volumes
select volume 0
attributes volume set GPT_ATTRIBUTE_PLATFORM_REQUIRED

# other attributes to alter
attributes volume set HIDDEN
attributes volume set READONLY

# view partitions:
list partition
select partition 3
```

#### To verify that system and utility partitions exist

1.  Click **Start**, right-click **This PC**, and then click **Manage**. The **Computer Management** window opens.
2.  Click **Disk Management**. The list of available drives and partitions appears.
3.  In the list of drives and partitions, confirm that the system and utility partitions are present and are not assigned a drive letter.


***

Links: 

Sources:

