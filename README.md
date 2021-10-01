# DeployWithKubernetes

docker build container

$ docker build -t app-1-k8s:1 .

Deploy on kubernetes with minikube, minikube is a single node cluster made for
testing purpose, minikube requires virtualbox or hyperviser (virtual machine) as well to run on local system

check the minikube working or not by checking it's version
$ minikube version
start the cluster on local machine
$ minikube start 
check the status of nodes on kubernetes cluster with kubectl, a command line tool  
$ kubectl get nodes

To use docker images in kubernetes you need to run 
$ eval $(minikube docker-env)

Important note: You have to run eval $(minikube docker-env) on each terminal you want to use, since it only sets the environment variables for the current shell session.

apply the kubernetes configurations set in K8s/main.yaml to the cluster
$ kubectl apply -f K8s/main.yaml

check whether minikube is working or not open 
