docker build -t jhigginson/multi-client:latest -t jhigginson/multi-client:$SHA -f ./client/Dockerfile ./client
docker build -t jhigginson/multi-server:latest -t jhigginson/multi-server:$SHA -f ./server/Dockerfile ./server
docker build -t jhigginson/multi-worker:latest -t jhigginson/multi-worker:$SHA -f ./worker/Dockerfile ./worker
docker push jhigginson/multi-client:latest
docker push jhigginson/multi-server:latest
docker push jhigginson/multi-worker:latest
docker push jhigginson/multi-client:$SHA
docker push jhigginson/multi-server:$SHA
docker push jhigginson/multi-worker:$SHA
kubectl apply -f k8s
kubectl set image deployments/server-deployment server=jhigginson/multi-server:$SHA
kubectl set image deployments/client-deployment client=jhigginson/multi-client:$SHA
kubectl set image deployments/worker-deployment worker=jhigginson/multi-worker:$SHA
