- **URL:** https://www.dnsstuff.com/dns-monitoring-software
- **Author:** dnsstuff.com
- **Tags:** #articles
- **Date:** [[2021-09-30]]
---

DNS is one of the most crucial internet services. It’s the communicator and concierge of online experiences. Everything, from the web content you browse and the email and chat services you use to social platforms like Facebook and Instagram, depends on DNS functioning on a round-the-clock basis. Given its importance, it’s no surprise this fundamental service is targeted by hackers and cyber criminals. %% highlight_id: 232875421 %%


Employing a robust DNS monitoring strategy is crucial to safeguarding your DNS server. By tracking your DNS performance, you can confirm it routes traffic appropriately, and continuously, to your services and websites. %% highlight_id: 232875422 %%


What Is DNS? %% highlight_id: 232875423 %%


DNS stands for Domain Name System. It’s essentially the utility responsible for converting simple domain names into IP addresses. For example, Google.com is a user-friendly domain name, being both simple and easy to remember. A computer-compatible IP address, however, might look something like this: 64.233.160.0. This isn’t especially user-friendly, which is why we need a DNS to convert it. The IP address allows the browser to access the appropriate server with the content requested by the user. %% highlight_id: 232875424 %%


DNS is a formidable utility with a hierarchical, distributed structure. Each DNS database stores a mere portion of the data leading to a certain site or piece of hardware. DNS functions in collaboration with the TCP/IP network protocol, and the result of their combined efforts is a streamlined and user-friendly end-user experience. %% highlight_id: 232875425 %%


The DNS server’s database is extremely busy, because it handles billions of requests from billions of devices and people. To give you an idea of how colossal the DNS server is, one-page request is likely to result in more than 50 DNS requests. This means you could potentially create thousands of DNS requests in one session of browsing. Take into account the billions of people submitting thousands of requests every time they surf the web, and the total number of DNS queries is overwhelming. And yet the DNS can resolve domain names in less than a second, proving how powerful it is. %% highlight_id: 232875426 %%


How Does DNS Work? %% highlight_id: 232875427 %%


The process of “resolving” refers to the conversion of domain name to IP address. The user doesn’t have visibility into the resolving process, which goes on behind the scenes. When the hostname is typed into the browser search bar, there’s a moment—usually less than a second—during which the request is resolved. This process happens in a matter of microseconds, but it involves four different types of DNS server: the DNS recursor, the root name server, the TLD name server, and the authoritative name server. Each of these serves a different purpose, and they work together to give users access to the content they’re requesting. %% highlight_id: 232875428 %%


DNS recursor: The DNS recursor—also called the recursive DNS server—is usually supplied by the internet service provider. This server is responsible for receiving user queries, resolving them, and responding with the IP address. Think of it as being the middleman. It serves as the liaison between the other servers, and undertakes all the communicating, organizing, and transferring of information. It visits the cache initially, to see if the IP address requested already exists there and contacts the root name server if not. %% highlight_id: 232875429 %%


Root name server: The root name server, or root server, gets involved when the DNS recursor can’t find what it needs in its cache. The root server exists at the top of the DNS hierarchy, in a position called the root zone—this is the point at which requests are redirected to the appropriate zone. There are 13 root zone servers, which are run by a dozen independent organizations. At this stage, the 13 servers respond to the recursor with the IP address for the TLD name server. %% highlight_id: 232875430 %%


TLD name server: Next, the request goes through the TLD (Top Level Domain) name server. This server retains the information for hostnames sharing common extensions—for example, .com, .net, .gov, .edu, or .co.uk. The TLD server then points the recursor server to the authoritative name server IP address. %% highlight_id: 232875431 %%


Authoritative name server: The authoritative name server is the last step before the request is resolved. This server contains all the data for specific domains (e.g., google.com). The authoritative server resolves the hostname to the correct IP address, then sends this back to the recursor to be cached. It’s then returned to the user’s browser, so the requested site can be accessed via the IP address. %% highlight_id: 232875432 %%


There is also round-robin DNS, a technique in which load balancing is undertaken by the authoritative name server. Numerous entries are queued for an individual domain name, so when a query arrives, round-robin DNS will identify the first DNS entry and respond with the relevant IP address. This DNS record is then pushed to the end of the queue, and the next time a domain name needs to be resolved, the next entry in the queue is sent. %% highlight_id: 232875433 %%


Round robin is a distinct DNS server methodology used to supply load balancing to a website with numerous redundant servers. The issue with this approach is it doesn’t necessarily recognize when a server is offline and may continue to deliver queries to it. This problem could be resolved by ensuring the name server features built-in fail-safes, which check IP address status %% highlight_id: 232875434 %%

