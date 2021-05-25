# eventer
Tech demo of a service with event-driven architecture

## Set ENV VARS
```kubectl create secret generic jwt-secret --from-literal=JWT_KEY=asdf```

## Update Ingress service name
Make sure that url to Ingress service is correct. `htts://INGRESS_SERVICE_NAME.NAMESPACE.svc.cluster.local`. Curently it's `http://nginx-ingress-1621591142-controller.default.svc.cluster.local`. 
To find a name and namespace run `kubectl get namespace`. Then find a `nginx-ingress` service with type `LoadBalancer` in a namespace. For example `kubectl get services -n default` where `default` is a namespace.
