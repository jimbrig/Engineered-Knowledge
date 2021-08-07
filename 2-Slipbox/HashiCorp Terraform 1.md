---
Creation Date: 2021-08-05 19:22
Last Modified Date: Thursday 5th August 2021 19:22:16
Author: Jimmy Briggs <jimbrig1993@outlook.com>
Alias: Terraform
Tags: ["#Development"]
---

# HashiCorp Terraform

## Introduction to Infrastructure as Code with Terraform

Infrastructure as code (IaC) tools allow you to manage infrastructure with configuration files rather than through a graphical user interface. IaC allows you to build, change, and manage your infrastructure in a safe, consistent, and repeatable way by defining resource configurations that you can version, reuse, and share.

Terraform is HashiCorp’s infrastructure as code tool. It lets you define resources and infrastructure in human-readable, declarative configuration files, and manages your infrastructure’s lifecycle. Using Terraform has several advantages over manually managing your infrastructure:

-   Terraform can manage infrastructure on multiple cloud platforms.
-   The human-readable configuration language helps you write infrastructure code quickly.
-   Terraform's state allows you to track resource changes throughout your deployments.
-   You can commit your configurations to version control to safely collaborate on infrastructure.

### Manage any Infrastructure

Terraform plugins called providers let Terraform interact with cloud platforms and other services via their application programming interfaces (APIs). HashiCorp and the Terraform community have written over 1,000 providers to manage resources on Amazon Web Services (AWS), Azure, Google Cloud Platform (GCP), Kubernetes, Helm, GitHub, Splunk, and DataDog, just to name a few. Find providers for many of the platforms and services you already use in the [Terraform Registry](https://registry.terraform.io/browse/providers). If you don't find the provider you're looking for, you can write your own.

### Standardize Deployment Workflow

Providers define individual units of infrastructure, for example compute instances or private networks, as resources. You can compose resources from different providers into reusable Terraform configurations called modules, and manage them with a consistent language and workflow.

Terraform’s configuration language is declarative, meaning that it describes the desired end-state for your infrastructure, in contrast to procedural programming languages that require step-by-step instructions to perform tasks. Terraform providers automatically calculate dependencies between resources to create or destroy them in the correct order.

![Terraform deployment workflow](https://learn.hashicorp.com/img/terraform/terraform-iac.png)

To deploy infrastructure with Terraform:

-   **Scope** - Identify the infrastructure for your project.
-   **Author** - Write the configuration for your infrastructure.
-   **Initialize** - Install the plugins Terraform needs to manage the infrastructure.
-   **Plan** - Preview the changes Terraform will make to match your configuration.
-   **Apply** - Make the planned changes.

### Track your infrastructure

Terraform keeps track of your real infrastructure in a state file, which acts as a source of truth for your environment. Terraform uses the state file to determine the changes to make to your infrastructure so that it will match your configuration.

### Collaborate

Terraform allows you to collaborate on your infrastructure with its remote state backends. When you use Terraform Cloud (free for up to five users), you can securely share your state with your teammates, provide a stable environment for Terraform to run in, and prevent race conditions when multiple people make configuration changes at once.

You can also connect Terraform Cloud to version control systems (VCSs) like GitHub, GitLab, and others, allowing it to automatically propose infrastructure changes when you commit configuration changes to VCS. This lets you manage changes to your infrastructure through version control, as you would with application code.

## Installation

[Chocolatey](https://chocolatey.org/) is a free and open-source package management system for Windows. Install the [Terraform package](https://chocolatey.org/packages/terraform) from the command-line.

On Windows, simply install via [[Chocolatey]]:

```powershell
cinst terraform -y
```

## Build Infrastructure





***

Links: 

Sources:

