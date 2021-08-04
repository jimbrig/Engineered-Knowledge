---
Creation Date: 2021-07-27 00:49
Last Modified Date: Tuesday 27th July 2021 00:50:12
Author: Jimmy Briggs <jimbrig1993@outlook.com>
Alias: Kubernetes-Sandbox
Tags: ["#Development", "#Code", "#CLI", "#Learning", "#PowerShell", "#Tools", "#Scripts", "#Windows", "#Videos"]
---

# Kubernetes Sandbox with Docker, `minikube` and `kubectl`
## Contents

- [Video](#Video)
- [Installations and Setup](#Installations%20and%20Setup)
		- [Install Script](#Install%20Script)
		- [Review Help and Validate Versions](#Review%20Help%20and%20Validate%20Versions)
- [Minikube and Kubernetes CLI](#Minikube%20and%20Kubernetes%20CLI)
	- [Minikube](#Minikube)
	- [kubectl](#kubectl)
	- [Start Services](#Start%20Services)
	- [Verify Setup Runtime](#Verify%20Setup%20Runtime)
	- [Review `kubectl get --help` Information](#Review%20`kubectl%20get%20--help`%20Information)
	- [Nodes, Pods, Services](#Nodes,%20Pods,%20Services)

## Video

<iframe width="560" height="315" src="https://www.youtube.com/embed/X48VuDVv0do" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Installations and Setup

- Pre-Requisite Installations:
	- [kubernetes-cli](kubernetes-cli) (aka [kubectl](kubectl))
	- [minikube](minikube)
	- [Docker Best Practices](Docker%20Best%20Practices.md)

#### Install Script

```powershell
sudo cinst kubernetes-cli minikube docker-desktop
```

#### Review Help and Validate Versions

```powershell
kubectl version
kubectl help
minikube help
```

## Minikube and Kubernetes CLI

### Minikube

- Creates a virtual environment running on a hypervisor, docker daemon, virtual machine, etc. 
- Runs a *single virtual node* representing `minikube`.

###  kubectl

- `kubectl` is the primary tool to interact with any [Kubernetes](Kubernetes) cluster.

In our simplified `minikube` setup, `kubectl` is the powerhouse that works with and submits commands to create, destroy, and manipulate resources within the `minikube` cluster.

 
## Start Services

- Docker Runtime/Daemon
- Minikube
- Kubernetes

### Start Docker:

```ad-important

Ensure the Docker Daemon is running, otherwise you will recieve this error message:

![[Screenshot 2021-07-27 005944.png]]

**Note the highlighted lines**
```

```powershell
Start-Process docker-desktop.exe
```

### Start Minikube:

- Utilize `--kubernetes-version=v1.21.2` to upgrade `kubernetes-cli`

*Optional: Update kubectl via command line arguments passes to `minikube start`*

```powershell
# start minikube and upgrade 
minikube start --kubernetes-version=v1.21.2
```

Upon Successful start of the minikube service in the docker daemon:

![](assets/Pasted%20image%2020210727005711.png)

Also, note the docker container and new volume:

![](assets/Pasted%20image%2020210727010634.png)

![](assets/Pasted%20image%2020210727010607.png)

## Verify Setup Runtime

- Run `kubectl get nodes` to ensure the minikube node is *Ready*
- Run `minikube status` and review output details

```powershell
kubectl get nodes
minikube status
```

Output: 

![](assets/Pasted%20image%2020210727011517.png)

### Review `kubectl get --help` Information

Review help for `kubectl get` via `kubectl get --help`:

```powershell
kubectl get --help
```


```text
Display one or many resources

 Prints a table of the most important information about the specified resources. You can filter the list using a label selector and the --selector flag. 
 If the desired resource type is namespaced you will only see results in your current namespace unless you pass --all-namespaces.

 Uninitialized objects are not shown unless --include-uninitialized is passed.

 By specifying the output as 'template' and providing a Go template as the value of the --template flag, you can filter the attributes of the fetched resources.

Use "kubectl api-resources" for a complete list of supported resources.

Examples:
  # List all pods in ps output format.
  kubectl get pods
  
  # List all pods in ps output format with more information (such as node name).
  kubectl get pods -o wide
  
  # List a single replication controller with specified NAME in ps output format.
  kubectl get replicationcontroller web
  
  # List deployments in JSON output format, in the "v1" version of the "apps" API group:
  kubectl get deployments.v1.apps -o json
  
  # List a single pod in JSON output format.
  kubectl get -o json pod web-pod-13je7
  
  # List a pod identified by type and name specified in "pod.yaml" in JSON output format.
  kubectl get -f pod.yaml -o json
  
  # List resources from a directory with kustomization.yaml - e.g. dir/kustomization.yaml.
  kubectl get -k dir/
  
  # Return only the phase value of the specified pod.
  kubectl get -o template pod/web-pod-13je7 --template={{.status.phase}}
  
  # List resource information in custom columns.
  kubectl get pod test-pod -o custom-columns=CONTAINER:.spec.containers[0].name,IMAGE:.spec.containers[0].image
  
  # List all replication controllers and services together in ps output format.
  kubectl get rc,services
  
  # List one or more resources by their type and names.
  kubectl get rc/web service/frontend pods/web-pod-13je7

Options:
  -A, --all-namespaces=false: If present, list the requested object(s) across all namespaces. 
															Namespace in current context is ignored even if specified with --namespace.
      --allow-missing-template-keys=true: If true, ignore any errors in templates when a field or map key is missing in the template. Only applies to golang
																					and jsonpath output formats.
      --chunk-size=500: Return large lists in chunks rather than all at once. Pass 0 to disable. This flag is beta and may change in the future.
      --field-selector='': Selector (field query) to filter on, supports '=', '==', and '!='.(e.g. --field-selector key1=value1,key2=value2). 
													 The server only supports a limited number of field queries per type.
  -f, --filename=[]: Filename, directory, or URL to files identifying the resource to get from a server.
      --ignore-not-found=false: If the requested object does not exist the command will return exit code 0.
  -k, --kustomize='': Process the kustomization directory. This flag can't be used together with -f or -R.
  -L, --label-columns=[]: Accepts a comma separated list of labels that are going to be presented as columns. Names are case-sensitive. You can also use
													multiple flag options like -L label1 -L label2...
      --no-headers=false: When using the default or custom-column output format, don't print headers (default print headers).
  -o, --output='': Output format. One of: json|yaml|wide|name|custom-columns=...|custom-columns-file=...|go-template=...|go-template-
																	file=...|jsonpath=...|jsonpath-file=... See custom columns [http://kubernetes.io/docs/user-guide/kubectl-overview/#custom-
																	columns], golang template [http://golang.org/pkg/text/template/#pkg-overview] and jsonpath template
																	[http://kubernetes.io/docs/user-guide/jsonpath].
      --output-watch-events=false: Output watch event objects when --watch or --watch-only is used. Existing objects are output as initial ADDED events.
      --raw='': Raw URI to request from the server.  Uses the transport specified by the kubeconfig file.
  -R, --recursive=false: Process the directory used in -f, --filename recursively. Useful when you want to manage related manifests organized within the same
													directory.
  -l, --selector='': Selector (label query) to filter on, supports '=', '==', and '!='.(e.g. -l key1=value1,key2=value2)
      --server-print=true: If true, have the server return the appropriate table output. Supports extension APIs and CRDs.
      --show-kind=false: If present, list the resource type for the requested object(s).
      --show-labels=false: When printing, show all labels as the last column (default hide labels column)
      --show-managed-fields=false: If true, keep the managedFields when printing objects in JSON or YAML format.
      --sort-by='': If non-empty, sort list types using this field specification.  The field specification is expressed as a JSONPath expression (e.g.
										'{.metadata.name}'). The field in the API resource specified by this JSONPath expression must be an integer or a string.
      --template='': Template string or path to template file to use when -o=go-template, -o=go-template-file. The template format is golang templates
										 [http://golang.org/pkg/text/template/#pkg-overview].
  -w, --watch=false: After listing/getting the requested object, watch for changes. Uninitialized objects are excluded if no object name is provided.
      --watch-only=false: Watch for changes to the requested object(s), without listing/getting first.

Usage:
  kubectl get [(-o|--output=)json|yaml|wide|custom-columns=...|custom-columns-file=...|go-template=...|go-template-file=...|jsonpath=...|jsonpath-file=...]
	(TYPE[.VERSION][.GROUP] [NAME | -l label] | TYPE[.VERSION][.GROUP]/NAME ...) [flags] [options]

Use "kubectl options" for a list of global command-line options (applies to all commands).

```

## Nodes, Pods, Services

- `kubectl get nodes`
- `kubectl get services`
- `kubectl get pod`

```
kubectl get nodes
kubectl get services
kubectl get pod
```

`kubectl get pod` will fail because we need to create a cluster.

## Create the Kubernetes Cluster Deployment

```powershell
kubernetes create --help
```

![](assets/Pasted%20image%2020210727014027.png)

Pod needs to be based on a certain deployment-based *image*:

Here I will create a deployment based off the default [Nginx](Nginx.md) docker image called `nginx-depl`:

```powershell
kubectl create deployment nginx-depl --image=nginx

# wait for pod to get ready...

kubectl get deployment
kubectl get pod
kubectl get replicaset
```

![](assets/Pasted%20image%2020210727014450.png)

## Edit Nginx Deployment

```powershell
kubectl edit deployment nginx-depl
```

Opens a [YAML](YAML) configuration file: *kubectl.exe-edit-3fcpn.yaml* which we can edit:

```text
# Please edit the object below. Lines beginning with a '#' will be ignored,
# and an empty file will abort the edit. If an error occurs while saving this file will be
# reopened with the relevant failures.

apiVersion: apps/v1
kind: Deployment
metadata:
  annotations:
    deployment.kubernetes.io/revision: "1"
  creationTimestamp: "2021-07-27T05:42:46Z"
  generation: 1
  labels:
    app: nginx-depl
  name: nginx-depl
  namespace: default
  resourceVersion: "2826"
  uid: 8c69d8d5-f2d7-4315-ae48-4a0fe2ecfe5a
spec:
  progressDeadlineSeconds: 600
  replicas: 1
  revisionHistoryLimit: 10
  selector:
    matchLabels:
      app: nginx-depl
  strategy:
    rollingUpdate:
      maxSurge: 25%
      maxUnavailable: 25%
    type: RollingUpdate
  template:
    metadata:
      creationTimestamp: null
      labels:
        app: nginx-depl
    spec:
      containers:
      - image: nginx
        imagePullPolicy: Always
        name: nginx
        resources: {}
        terminationMessagePath: /dev/termination-log
        terminationMessagePolicy: File
      dnsPolicy: ClusterFirst
      restartPolicy: Always
      schedulerName: default-scheduler
      securityContext: {}
      terminationGracePeriodSeconds: 30
status:
  availableReplicas: 1
  conditions:
  - lastTransitionTime: "2021-07-27T05:43:13Z"
    lastUpdateTime: "2021-07-27T05:43:13Z"
    message: Deployment has minimum availability.
    reason: MinimumReplicasAvailable
    status: "True"
    type: Available
  - lastTransitionTime: "2021-07-27T05:42:46Z"
    lastUpdateTime: "2021-07-27T05:43:13Z"
    message: ReplicaSet "nginx-depl-5c8bf76b5b" has successfully progressed.
    reason: NewReplicaSetAvailable
    status: "True"
    type: Progressing
  observedGeneration: 1
  readyReplicas: 1
  replicas: 1
  updatedReplicas: 1

```

## Logs

![](assets/Pasted%20image%2020210727015314.png)

## MongoDB Deployment

```powershell
kubectl create deployment mongo-depl --image=mongodb

## Logs via `kubectl logs`



***

Links: [[020 - Development]] | [[Docker]] | [[Kubernetes]] | [[Windows Developer Environment]]

Sources: 
- https://www.youtube.com/embed/X48VuDVv0do


