# WELCOME TO  DOCKER TUTORIAL LEARNINGS :-
 - dlt node_modules folder and make Dockerfile
 - using command  :-
   - docker build -t nikhilsharmacr7/hey-nodejs:0.0.1.RELEASE . created an image
 -  to run this image :-
   -  docker container run -d -p 3000:3000 nikhilsharmacr7/hey-nodejs:0.0.1.RELEASE
 - to check status :-
   - docker container ls
 - Its showing {"Hey":"Nodejs"} on localhost:3000 to stop the container
   - docker container stop 552
 
##  We were able to create a rest API at 1 point and was able to containerize it  
 - To make it public :-
   - docker push nikhilsharmacr7/hey-nodejs:0.0.1.RELEASE
  ![alt text](image.png)
  Anyone from copying this command can run this 
 - If we dlt this image from our docker then 
   -  docker pull nikhilsharmacr7/hey-nodejs:0.0.1.RELEASE
  
### Images And Container :-
 ![alt text](image-1.png)
 ![alt text](image-2.png)
 ![alt text](image-3.png)
 ![alt text](image-4.png)
 ![alt text](image-5.png)
 
### Base Image OR Parent Image :-
![image](https://github.com/Nikhil562/DockerTut/assets/103209278/2238b289-1ee6-45d4-9e84-7cb52379cc07)


