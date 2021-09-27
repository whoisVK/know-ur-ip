# know-ur-ip

This application serves the ip of the client and the current timestamp.

## Dependencies
1. Node JS 
2. Docker
3. Kubernetes - Kubectl & Minikube

## Running the app via Terminal
1. Clone the code from the repository into your local machine.
2. Once nodeJS is installed, Run the node app:

```NodeJS
node app.js
```
2. Open the browser and check with the localhost:3000
3. The ip and the timestamp will be displayed in the JSON format

## Running the app via Docker
1. Clone the code from the repository into your local machine.
2. Make sure the dependancies are installed.
3. Build the image with the given dockerfile

```Shell
docker build -t ipimg .
```
4. Run a container with the created image

```Shell
docker run -it ipimg
```
5. Open the browser and check with the server ip:3000, you should be able to see the ip and timestamp in the JSON format.

## Running the app via Kubernetes
1. Clone the code from the repository into your local machine.
2. Make sure the dependencies are installed.
3. Deploy both the deployment file and service YAML files: 

```Shell
kubectl apply -f ip-deployments.yml
```

```Shell
kubectl apply -f ip-service.yml 
```
4. Open the browser and check with the NodePort Ip:30001 , you should be able to see the ip and timestamp in the JSON format.
5. If that doesnt work then we can also port forward to the specific ip and check, which in this case is should open with localhost:3000

```Shell
kubectl port-forward svc/ip-service 3000 --address 0.0.0.0
```


