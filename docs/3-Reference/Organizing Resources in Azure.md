---
Creation Date: 2021-08-09 17:33
Last Modified Date: Monday 9th August 2021 17:43:20
Author: Jimmy Briggs <jimbrig1993@outlook.com>
Alias: Organizing Resources in Azure
Tags: ["#Development", "#Reference", "#Documentation", "#Microsoft", "#Cloud"]
---

# Organizing Resources in Azure

Organizing your cloud-based resources is critical to securing, managing, and tracking the costs related to your workloads. To organize your resources, define a management group hierarchy, follow a well-considered naming convention and apply resource tagging.

## Contents

- [[#Azure Management Groups and Hierarchy|Azure Management Groups and Hierarchy]]
	- [[#Scope of Management Settings|Scope of Management Settings]]
	- [[#Create a Management Level|Create a Management Level]]
		- [[#Create a Management Group|Create a Management Group]]
		- [[#Create a Subscription|Create a Subscription]]
		- [[#Create a Resource Group|Create a Resource Group]]
	- [[#Learn More|Learn More]]
	- [[#Actions|Actions]]
- [[#Naming Standards|Naming Standards]]
- [[#Resource Tags|Resource Tags]]
	- [[#Apply a Resource Tag|Apply a Resource Tag]]
	- [[#Learn More|Learn More]]
	- [[#Action|Action]]


## Azure Management Groups and Hierarchy

Azure provides four levels of management scope: 
1. Management Groups
2. Subscriptions
3. Resource Groups
4. Resources

The following image shows the relationship of these levels:

![[azure-organize-resources-scope-levels.png]]
   
    
- **Management groups:** These groups are containers that help you manage access, policy, and compliance for multiple subscriptions. All subscriptions in a management group automatically inherit the conditions applied to the management group.
- **Subscriptions:** A subscription logically associates user accounts and the resources that were created by those user accounts. Each subscription has limits or quotas on the amount of resources you can create and use. Organizations can use subscriptions to manage costs and the resources that are created by users, teams, or projects.
- **Resource groups:** A resource group is a logical container into which Azure resources like web apps, databases, and storage accounts are deployed and managed.
- **Resources:** Resources are instances of services that you create, like virtual machines, storage, or SQL databases.

### Scope of Management Settings

You can apply management settings like policies and Azure role-based access control at any of the management levels. The level you select determines how widely the setting is applied. Lower levels inherit settings from higher levels. For example, when you apply a policy to a subscription, that policy is also applied to all resource groups and resources in that subscription.

Usually, it makes sense to apply critical settings at higher levels and project-specific requirements at lower levels. For example, you might want to make sure all resources for your organization are deployed to certain regions. To do that, apply a policy to the subscription that specifies the allowed locations. As other users in your organization add new resource groups and resources, the allowed locations are automatically enforced. Learn more about policies in the governance, security, and compliance section of this guide.

If you have only a few subscriptions, it's relatively simple to manage them independently. If the number of subscriptions you use increases, consider creating a management group hierarchy to simplify the management of your subscriptions and resources. For more information, see [[Organize and Manage your Azure Subscriptions]].

As you plan your compliance strategy, work with people in your organization with these roles: security and compliance, IT administration, enterprise architecture, networking, finance, and procurement.

### Create a Management Level

You can create a management group, additional subscriptions, or resource groups.

#### Create a Management Group

Create a management group to help you manage access, policy, and compliance for multiple subscriptions.

1. Go to [Management groups](https://portal.azure.com/#blade/Microsoft_Azure_ManagementGroups/HierarchyBlade).
2. Select **Add management group**.

#### Create a Subscription

Use subscriptions to manage costs and resources that are created by users, teams, or projects.

1. Go to [Subscriptions](https://portal.azure.com/#blade/Microsoft_Azure_Billing/SubscriptionsBlade).
2. Select **Add**.

```ad-note

Subscriptions can also be created programmatically. For more information, see [Programmatically create Azure subscriptions](/azure/cost-management-billing/manage/programmatically-create-subscription).

```

#### Create a Resource Group

Create a resource group to hold resources like web apps, databases, and storage accounts that share the same lifecycle, permissions, and policies.

1. Go to [Resource groups](https://portal.azure.com/#create/Microsoft.ResourceGroup).
1. Select **Add**.
1. Select the **Subscription** that you want your resource group created under.
1. Enter a name for the **Resource group**.
1. Select a **Region** for the resource group location.

### Learn More

To learn more, see:

-   [Azure fundamentals](https://docs.microsoft.com/en-us/azure/cloud-adoption-framework/ready/considerations/fundamental-concepts)
-   [Create your initial subscriptions](https://docs.microsoft.com/en-us/azure/cloud-adoption-framework/ready/azure-best-practices/initial-subscriptions)
-   [Create additional Azure subscriptions to scale your Azure environment](https://docs.microsoft.com/en-us/azure/cloud-adoption-framework/ready/azure-best-practices/scale-subscriptions)
-   [Organize and manage your Azure subscriptions](https://docs.microsoft.com/en-us/azure/cloud-adoption-framework/ready/azure-best-practices/organize-subscriptions)
-   [Organize your resources with Azure management groups](https://docs.microsoft.com/en-us/azure/governance/management-groups/overview)
-   [Understand resource access management in Azure](https://docs.microsoft.com/en-us/azure/cloud-adoption-framework/govern/resource-consistency/resource-access-management)
-   [Subscription service limits](https://docs.microsoft.com/en-us/azure/azure-resource-manager/management/azure-subscription-service-limits)


### Actions

**Create a management group:**

Create a management group to help you manage access, policy, and compliance for multiple subscriptions.

1. Go to **Management groups**.
1. Select **Add management group**.

**Create an additional subscription:**

Use subscriptions to manage costs and resources that are created by users, teams, or projects.

1. Go to **Subscriptions**.
1. Select **Add**.

**Create a resource group:**

Create a resource group to hold resources like web apps, databases, and storage accounts that share the same lifecycle, permissions, and policies.

1. Go to **Resource groups**.
1. Select **Add**.
1. Select the **Subscription** that you want your resource group created under.
1. Enter a name for the **Resource group**.
1. Select a **Region** for the resource group location.

## Naming Standards

A good naming standard helps to identify resources in the Azure portal, on a billing statement, and in automation scripts. Your naming strategy should include business and operational details as components of resource names:

The business-related side of this strategy should ensure that resource names include the organizational information that's needed to identify the teams. Use a resource along with the business owners who are responsible for resource costs.

The operational side should ensure that names include information that IT teams need. Use the details that identify the workload, application, environment, criticality, and other information that's useful for managing resources.

Different resource types have different [naming rules and restrictions](https://docs.microsoft.com/en-us/azure/azure-resource-manager/management/resource-name-rules). For more information and recommendations aimed specifically at supporting enterprise cloud adoption efforts, see the Cloud Adoption Framework's [guidance on naming and tagging](https://docs.microsoft.com/en-us/azure/cloud-adoption-framework/ready/azure-best-practices/naming-and-tagging).

The following table includes naming patterns for a few sample types of Azure resources.

```ad-tip

Avoid using any special characters (`-` or `_`) as the first or last character in any name. These characters cause most validation rules to fail.

```


| Entity | Scope | Length | Casing | Valid characters | Suggested pattern | Example |
| --- | --- | --- | --- | --- | --- | --- |
| Resource group | Subscription | 1-90 | Case insensitive | Alphanumeric, underscore, parentheses, hyphen, period (except at end), and Unicode characters | `<service short name>-<environment>-rg` | `profx-prod-rg` |
| Availability set | Resource group | 1-80 | Case insensitive | Alphanumeric, underscore, and hyphen | `<service-short-name>-<context>-as` | `profx-SQL-as` |
| Tag | Associated entity | 512 (name), 256 (value) | Case insensitive | Alphanumeric | `"Key" : "value"` | `"Department" : "Central IT"` |

## Resource Tags

Tags are useful to quickly identify your resources and resource groups. 

You apply tags to your Azure resources to logically organize them by categories. Each tag consists of a name and a value.

For example, you can apply the name "environment" and the value "production" to all the resources in production. Tags should include context about the resource's associated workload or application, operational requirements, and ownership information.

After you apply tags, you can retrieve all the resources in your subscription with that tag name and value. When you organize resources for billing or management, tags can help you retrieve related resources from different resource groups.

You can also use tags for many other things. Common uses include:

- **Metadata and documentation:** Administrators can easily see detail about the resources they're working on by applying a tag like `ProjectOwner`.
- **Automation:** You might have regularly running scripts that can take an action based on a tag value like `ShutdownTime` or `DeprovisionDate`.
- **Cost optimization:** You can allocate resources to the teams and resources who are responsible for the cost. In the Azure Cost Management + Billing, you can apply the cost center tag as a filter to report the charges based on a team or department usage.

Each resource or resource group can have a maximum of 50 tag name and value pairs. This limitation only applies to tags directly applied to the resource group or resource.

For more tagging recommendations and examples, see [Recommended naming and tagging conventions](https://docs.microsoft.com/en-us/azure/cloud-adoption-framework/ready/azure-best-practices/naming-and-tagging) in the Cloud Adoption Framework.

### Apply a Resource Tag

To apply a tag to a resource group:

1. Go to [Resource groups](https://portal.azure.com/#blade/HubsExtension/BrowseResourceGroups).
1. Select a resource group.
1. Select **Assign tags**.
1. Enter a new name and value, or use the drop-down list to select an existing name and value.

### Learn More

To learn more, see [Use tags to organize your Azure resources](https://docs.microsoft.com/en-us/azure/azure-resource-manager/management/tag-resources).

### Action

**Apply a resource tag:**

To apply a tag to a resource group:

1. Go to **Resource groups**.
1. Select a resource group.
1. Select **Tags**.
1. Enter a new name and value, or select an existing name and value.


***

Links: [[020 - Development]] | [[MOC - Setup]] | [[Cloud Hosted Environments]] | [[Organize and Manage your Azure Subscriptions]]

Sources: [Organize your Azure resources effectively - Cloud Adoption Framework | Microsoft Docs](https://docs.microsoft.com/en-us/azure/cloud-adoption-framework/ready/azure-setup-guide/organize-resources?tabs=AzureManagementGroupsAndHierarchy)

