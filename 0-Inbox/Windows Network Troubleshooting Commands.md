---
Creation Date: 2021-08-22 16:55
Last Modified Date: Sunday 22nd August 2021 16:55:02
Author: Jimmy Briggs <jimbrig1993@outlook.com>
Alias: Windows Network Troubleshooting Commands
Tags: []
---

# Windows Network Troubleshooting Commands

## ipconfig

Run `ipconfig` to list all connections:

```powershell
ipconfig
```

 Look for the name of your Wi-Fi network within the results, and then find the IP address listed next to **Default gateway** for that Wi-Fi network.  *For example:  192.168.1.1*.
 
 Then ping the default gateway's IP:
 
 ```powershell
 ping 192.168.1.1
 ```
 
The results should be something like this:
```powershell
Reply from 192.168.1.1: bytes=32 time=5ms TTL=64
Reply from 192.168.1.1: bytes=32 time=5ms TTL=64
Reply from 192.168.1.1: bytes=32 time=5ms TTL=64
Reply from 192.168.1.1: bytes=32 time=5ms TTL=64

Ping statistics for 192.168.1.1: 
	Packets: Sent = 4, Received = 4, Lost = 0 (0% loss),
Approximate round trip times in milli-seconds:
	Minimum = 4ms, Maximum = 5ms, Average = 4ms
```

## Network Commands

```powershell
netsh winsock reset
netsh int ip reset
ipconfig /release
ipconfig /renew
ipconfig /flushdns
```
	

***

Links: 

Sources:

