Started by user admin
Obtained app/Jenkinsfile from git https://github.com/shriramhalyal2000/NoteBook.git
[Pipeline] Start of Pipeline
[Pipeline] node
Running on Jenkins in /var/jenkins_home/workspace/NoteBook-App
[Pipeline] {
[Pipeline] stage
[Pipeline] { (Declarative: Checkout SCM)
[Pipeline] checkout
Selected Git installation does not exist. Using Default
The recommended git tool is: NONE
using credential Git-creds
 > git rev-parse --resolve-git-dir /var/jenkins_home/workspace/NoteBook-App/.git # timeout=10
Fetching changes from the remote Git repository
 > git config remote.origin.url https://github.com/shriramhalyal2000/NoteBook.git # timeout=10
Fetching upstream changes from https://github.com/shriramhalyal2000/NoteBook.git
 > git --version # timeout=10
 > git --version # 'git version 2.47.3'
using GIT_ASKPASS to set credentials 
 > git fetch --tags --force --progress -- https://github.com/shriramhalyal2000/NoteBook.git +refs/heads/*:refs/remotes/origin/* # timeout=10
 > git rev-parse refs/remotes/origin/feature^{commit} # timeout=10
Checking out Revision d23d1867e156875a90952cf5227ad84a3c2bc98f (refs/remotes/origin/feature)
 > git config core.sparsecheckout # timeout=10
 > git checkout -f d23d1867e156875a90952cf5227ad84a3c2bc98f # timeout=10
Commit message: "update4"
 > git rev-list --no-walk c1c2e3fce57d0417c3bc3e94f97895274d7387d3 # timeout=10
[Pipeline] }
[Pipeline] // stage
[Pipeline] withEnv
[Pipeline] {
[Pipeline] withEnv
[Pipeline] {
[Pipeline] stage
[Pipeline] { (Checkout)
[Pipeline] checkout
Selected Git installation does not exist. Using Default
The recommended git tool is: NONE
using credential Git-creds
 > git rev-parse --resolve-git-dir /var/jenkins_home/workspace/NoteBook-App/.git # timeout=10
Fetching changes from the remote Git repository
 > git config remote.origin.url https://github.com/shriramhalyal2000/NoteBook.git # timeout=10
Fetching upstream changes from https://github.com/shriramhalyal2000/NoteBook.git
 > git --version # timeout=10
 > git --version # 'git version 2.47.3'
using GIT_ASKPASS to set credentials 
 > git fetch --tags --force --progress -- https://github.com/shriramhalyal2000/NoteBook.git +refs/heads/*:refs/remotes/origin/* # timeout=10
 > git rev-parse refs/remotes/origin/feature^{commit} # timeout=10
Checking out Revision d23d1867e156875a90952cf5227ad84a3c2bc98f (refs/remotes/origin/feature)
 > git config core.sparsecheckout # timeout=10
 > git checkout -f d23d1867e156875a90952cf5227ad84a3c2bc98f # timeout=10
Commit message: "update4"
[Pipeline] }
[Pipeline] // stage
[Pipeline] stage
[Pipeline] { (Building Frontend)
[Pipeline] dir
Running in /var/jenkins_home/workspace/NoteBook-App/app/NoteBook_FrontEnd
[Pipeline] {
[Pipeline] sh
+ docker build -t shriram2105/notebook-frontend:latest .
DEPRECATED: The legacy builder is deprecated and will be removed in a future release.
            Install the buildx component to build images with BuildKit:
            https://docs.docker.com/go/buildx/

Sending build context to Docker daemon  1.113MB

Step 1/8 : FROM node:20.0.0-alpine
 ---> 1d34273b1b48
Step 2/8 : WORKDIR /usr/src/app
 ---> Using cache
 ---> 683e7b81f028
Step 3/8 : COPY package*.json ./
 ---> Using cache
 ---> bf131f4a272a
Step 4/8 : RUN npm ci
 ---> Using cache
 ---> a0530e8ff7e4
Step 5/8 : COPY . .
 ---> Using cache
 ---> 93103a560034
Step 6/8 : RUN npm install build
 ---> Using cache
 ---> f52fe1191505
Step 7/8 : EXPOSE 3000
 ---> Using cache
 ---> c141fe791617
Step 8/8 : CMD ["npm", "start"]
 ---> Running in 1f47b1ed4899
 ---> Removed intermediate container 1f47b1ed4899
 ---> 59a4fc63a254
Successfully built 59a4fc63a254
Successfully tagged shriram2105/notebook-frontend:latest
[Pipeline] }
[Pipeline] // dir
[Pipeline] }
[Pipeline] // stage
[Pipeline] stage
[Pipeline] { (Building)
[Pipeline] dir
Running in /var/jenkins_home/workspace/NoteBook-App/app/NoteBook_BackEnd
[Pipeline] {
[Pipeline] sh
+ docker build -t shriram2105/notebook-backend:latest .
DEPRECATED: The legacy builder is deprecated and will be removed in a future release.
            Install the buildx component to build images with BuildKit:
            https://docs.docker.com/go/buildx/

Sending build context to Docker daemon  74.24kB

Step 1/7 : FROM node:20.0.0-alpine
 ---> 1d34273b1b48
Step 2/7 : WORKDIR /app
 ---> Using cache
 ---> f3226dc1ad68
Step 3/7 : COPY package*.json ./
 ---> Using cache
 ---> 4ab40e779556
Step 4/7 : RUN npm ci
 ---> Using cache
 ---> ee69e6e07e94
Step 5/7 : COPY . .
 ---> Using cache
 ---> df1d353f2b87
Step 6/7 : EXPOSE 5000
 ---> Using cache
 ---> b07285adaa8c
Step 7/7 : CMD ["node", "index.js"]
 ---> Running in bfc1fa3b27b9
 ---> Removed intermediate container bfc1fa3b27b9
 ---> d9f1b292f019
Successfully built d9f1b292f019
Successfully tagged shriram2105/notebook-backend:latest
[Pipeline] }
[Pipeline] // dir
[Pipeline] }
[Pipeline] // stage
[Pipeline] stage
[Pipeline] { (Pushing images to Hub)
[Pipeline] withCredentials
Masking supported pattern matches of $PASS
[Pipeline] {
[Pipeline] sh
+ echo ****
+ docker login -u shriram2105 --password-stdin

WARNING! Your credentials are stored unencrypted in '/var/jenkins_home/.docker/config.json'.
Configure a credential helper to remove this warning. See
https://docs.docker.com/go/credential-store/

Login Succeeded
+ docker push shriram2105/notebook-frontend:latest
The push refers to repository [docker.io/shriram2105/notebook-frontend]
db5a734d2ede: Waiting
84e8347837a3: Waiting
160e74699d85: Waiting
4fa68352a2d3: Waiting
c0bfa1a682ef: Waiting
263faafe3340: Waiting
78c94c8792d0: Waiting
2c8bfa6b2115: Waiting
f56be85fc22e: Waiting
c0bfa1a682ef: Waiting
263faafe3340: Waiting
78c94c8792d0: Waiting
2c8bfa6b2115: Waiting
f56be85fc22e: Waiting
db5a734d2ede: Waiting
84e8347837a3: Waiting
160e74699d85: Waiting
4fa68352a2d3: Waiting
f56be85fc22e: Waiting
db5a734d2ede: Waiting
84e8347837a3: Waiting
160e74699d85: Waiting
4fa68352a2d3: Waiting
c0bfa1a682ef: Waiting
263faafe3340: Waiting
78c94c8792d0: Waiting
2c8bfa6b2115: Waiting
c0bfa1a682ef: Waiting
263faafe3340: Waiting
78c94c8792d0: Waiting
2c8bfa6b2115: Waiting
f56be85fc22e: Waiting
db5a734d2ede: Waiting
84e8347837a3: Waiting
160e74699d85: Waiting
4fa68352a2d3: Waiting
f56be85fc22e: Waiting
db5a734d2ede: Waiting
84e8347837a3: Waiting
160e74699d85: Waiting
4fa68352a2d3: Waiting
c0bfa1a682ef: Waiting
263faafe3340: Waiting
78c94c8792d0: Waiting
2c8bfa6b2115: Waiting
160e74699d85: Waiting
4fa68352a2d3: Waiting
c0bfa1a682ef: Waiting
263faafe3340: Waiting
78c94c8792d0: Waiting
2c8bfa6b2115: Waiting
f56be85fc22e: Waiting
db5a734d2ede: Waiting
84e8347837a3: Waiting
c0bfa1a682ef: Waiting
263faafe3340: Waiting
78c94c8792d0: Waiting
2c8bfa6b2115: Waiting
f56be85fc22e: Waiting
db5a734d2ede: Waiting
84e8347837a3: Waiting
160e74699d85: Waiting
4fa68352a2d3: Waiting
c0bfa1a682ef: Waiting
263faafe3340: Waiting
78c94c8792d0: Waiting
2c8bfa6b2115: Waiting
f56be85fc22e: Waiting
db5a734d2ede: Waiting
84e8347837a3: Waiting
160e74699d85: Waiting
4fa68352a2d3: Waiting
c0bfa1a682ef: Waiting
263faafe3340: Waiting
78c94c8792d0: Waiting
2c8bfa6b2115: Waiting
f56be85fc22e: Waiting
db5a734d2ede: Waiting
84e8347837a3: Waiting
160e74699d85: Waiting
4fa68352a2d3: Waiting
160e74699d85: Waiting
4fa68352a2d3: Waiting
c0bfa1a682ef: Waiting
263faafe3340: Waiting
78c94c8792d0: Waiting
2c8bfa6b2115: Waiting
f56be85fc22e: Waiting
db5a734d2ede: Waiting
84e8347837a3: Waiting
c0bfa1a682ef: Waiting
263faafe3340: Waiting
78c94c8792d0: Waiting
2c8bfa6b2115: Waiting
f56be85fc22e: Waiting
db5a734d2ede: Waiting
84e8347837a3: Waiting
160e74699d85: Waiting
4fa68352a2d3: Waiting
c0bfa1a682ef: Waiting
263faafe3340: Waiting
78c94c8792d0: Waiting
2c8bfa6b2115: Waiting
f56be85fc22e: Waiting
db5a734d2ede: Waiting
84e8347837a3: Waiting
160e74699d85: Waiting
4fa68352a2d3: Waiting
2c8bfa6b2115: Waiting
f56be85fc22e: Waiting
db5a734d2ede: Waiting
84e8347837a3: Waiting
160e74699d85: Waiting
4fa68352a2d3: Waiting
c0bfa1a682ef: Waiting
263faafe3340: Waiting
78c94c8792d0: Waiting
c0bfa1a682ef: Waiting
263faafe3340: Waiting
78c94c8792d0: Waiting
2c8bfa6b2115: Waiting
f56be85fc22e: Waiting
db5a734d2ede: Waiting
84e8347837a3: Waiting
160e74699d85: Waiting
4fa68352a2d3: Waiting
c0bfa1a682ef: Waiting
263faafe3340: Waiting
78c94c8792d0: Waiting
2c8bfa6b2115: Waiting
f56be85fc22e: Waiting
db5a734d2ede: Waiting
84e8347837a3: Waiting
160e74699d85: Waiting
4fa68352a2d3: Waiting
160e74699d85: Waiting
4fa68352a2d3: Waiting
c0bfa1a682ef: Waiting
263faafe3340: Waiting
78c94c8792d0: Waiting
2c8bfa6b2115: Waiting
f56be85fc22e: Waiting
db5a734d2ede: Waiting
84e8347837a3: Waiting
263faafe3340: Waiting
78c94c8792d0: Waiting
2c8bfa6b2115: Waiting
f56be85fc22e: Waiting
db5a734d2ede: Waiting
84e8347837a3: Waiting
160e74699d85: Waiting
4fa68352a2d3: Waiting
c0bfa1a682ef: Waiting
c0bfa1a682ef: Waiting
263faafe3340: Waiting
78c94c8792d0: Waiting
2c8bfa6b2115: Waiting
f56be85fc22e: Waiting
db5a734d2ede: Waiting
84e8347837a3: Waiting
160e74699d85: Waiting
4fa68352a2d3: Waiting
f56be85fc22e: Waiting
db5a734d2ede: Waiting
84e8347837a3: Waiting
160e74699d85: Waiting
4fa68352a2d3: Waiting
c0bfa1a682ef: Waiting
263faafe3340: Waiting
78c94c8792d0: Waiting
2c8bfa6b2115: Waiting
2c8bfa6b2115: Waiting
f56be85fc22e: Waiting
db5a734d2ede: Waiting
84e8347837a3: Waiting
160e74699d85: Waiting
4fa68352a2d3: Waiting
c0bfa1a682ef: Waiting
263faafe3340: Waiting
78c94c8792d0: Waiting
c0bfa1a682ef: Waiting
263faafe3340: Waiting
78c94c8792d0: Waiting
2c8bfa6b2115: Waiting
f56be85fc22e: Waiting
db5a734d2ede: Waiting
84e8347837a3: Waiting
160e74699d85: Waiting
4fa68352a2d3: Waiting
4fa68352a2d3: Waiting
c0bfa1a682ef: Waiting
263faafe3340: Waiting
78c94c8792d0: Waiting
2c8bfa6b2115: Waiting
f56be85fc22e: Waiting
db5a734d2ede: Waiting
84e8347837a3: Waiting
160e74699d85: Waiting
160e74699d85: Waiting
4fa68352a2d3: Waiting
c0bfa1a682ef: Waiting
263faafe3340: Waiting
78c94c8792d0: Waiting
2c8bfa6b2115: Waiting
f56be85fc22e: Waiting
db5a734d2ede: Waiting
84e8347837a3: Waiting
c0bfa1a682ef: Waiting
263faafe3340: Waiting
78c94c8792d0: Waiting
2c8bfa6b2115: Waiting
f56be85fc22e: Waiting
db5a734d2ede: Waiting
84e8347837a3: Waiting
160e74699d85: Waiting
4fa68352a2d3: Waiting
c0bfa1a682ef: Waiting
263faafe3340: Waiting
78c94c8792d0: Waiting
2c8bfa6b2115: Waiting
f56be85fc22e: Waiting
db5a734d2ede: Waiting
84e8347837a3: Waiting
160e74699d85: Waiting
4fa68352a2d3: Waiting
f56be85fc22e: Waiting
db5a734d2ede: Waiting
84e8347837a3: Waiting
160e74699d85: Waiting
4fa68352a2d3: Waiting
c0bfa1a682ef: Waiting
263faafe3340: Waiting
78c94c8792d0: Waiting
2c8bfa6b2115: Waiting
c0bfa1a682ef: Waiting
263faafe3340: Waiting
78c94c8792d0: Waiting
2c8bfa6b2115: Waiting
f56be85fc22e: Waiting
db5a734d2ede: Waiting
84e8347837a3: Waiting
160e74699d85: Waiting
4fa68352a2d3: Waiting
c0bfa1a682ef: Waiting
263faafe3340: Waiting
78c94c8792d0: Waiting
2c8bfa6b2115: Waiting
f56be85fc22e: Waiting
db5a734d2ede: Waiting
84e8347837a3: Waiting
160e74699d85: Waiting
4fa68352a2d3: Waiting
c0bfa1a682ef: Waiting
263faafe3340: Waiting
78c94c8792d0: Waiting
2c8bfa6b2115: Waiting
f56be85fc22e: Waiting
db5a734d2ede: Waiting
84e8347837a3: Waiting
160e74699d85: Waiting
4fa68352a2d3: Waiting
f56be85fc22e: Waiting
db5a734d2ede: Waiting
84e8347837a3: Waiting
160e74699d85: Waiting
4fa68352a2d3: Waiting
c0bfa1a682ef: Waiting
263faafe3340: Waiting
78c94c8792d0: Waiting
2c8bfa6b2115: Waiting
f56be85fc22e: Waiting
db5a734d2ede: Waiting
84e8347837a3: Waiting
160e74699d85: Waiting
4fa68352a2d3: Waiting
c0bfa1a682ef: Layer already exists
263faafe3340: Waiting
78c94c8792d0: Waiting
2c8bfa6b2115: Waiting
263faafe3340: Layer already exists
78c94c8792d0: Waiting
2c8bfa6b2115: Waiting
f56be85fc22e: Waiting
db5a734d2ede: Waiting
84e8347837a3: Waiting
160e74699d85: Waiting
4fa68352a2d3: Waiting
db5a734d2ede: Waiting
84e8347837a3: Waiting
160e74699d85: Waiting
4fa68352a2d3: Waiting
78c94c8792d0: Waiting
2c8bfa6b2115: Waiting
f56be85fc22e: Waiting
78c94c8792d0: Waiting
2c8bfa6b2115: Waiting
f56be85fc22e: Waiting
db5a734d2ede: Waiting
84e8347837a3: Waiting
160e74699d85: Waiting
4fa68352a2d3: Waiting
78c94c8792d0: Waiting
2c8bfa6b2115: Waiting
f56be85fc22e: Layer already exists
db5a734d2ede: Layer already exists
84e8347837a3: Waiting
160e74699d85: Waiting
4fa68352a2d3: Waiting
78c94c8792d0: Waiting
2c8bfa6b2115: Waiting
84e8347837a3: Waiting
160e74699d85: Waiting
4fa68352a2d3: Waiting
78c94c8792d0: Waiting
2c8bfa6b2115: Waiting
84e8347837a3: Waiting
160e74699d85: Waiting
4fa68352a2d3: Waiting
160e74699d85: Layer already exists
4fa68352a2d3: Waiting
78c94c8792d0: Waiting
2c8bfa6b2115: Waiting
84e8347837a3: Waiting
78c94c8792d0: Waiting
2c8bfa6b2115: Waiting
84e8347837a3: Waiting
4fa68352a2d3: Waiting
4fa68352a2d3: Waiting
78c94c8792d0: Waiting
2c8bfa6b2115: Waiting
84e8347837a3: Waiting
78c94c8792d0: Layer already exists
2c8bfa6b2115: Layer already exists
84e8347837a3: Layer already exists
4fa68352a2d3: Layer already exists
latest: digest: sha256:59a4fc63a25478ddcc155198d13b2b585e378aaf5fcaa916b23e4dfe9a5fe658 size: 2304
+ docker push shriram2105/notebook-backend:latest
The push refers to repository [docker.io/shriram2105/notebook-backend]
5609220a8c38: Waiting
263faafe3340: Waiting
a441505006a9: Waiting
f56be85fc22e: Waiting
78c94c8792d0: Waiting
4fa68352a2d3: Waiting
a1715d2335ab: Waiting
e6d688354e2d: Waiting
a441505006a9: Waiting
f56be85fc22e: Waiting
78c94c8792d0: Waiting
4fa68352a2d3: Waiting
a1715d2335ab: Waiting
e6d688354e2d: Waiting
5609220a8c38: Waiting
263faafe3340: Waiting
263faafe3340: Waiting
a441505006a9: Waiting
f56be85fc22e: Waiting
78c94c8792d0: Waiting
4fa68352a2d3: Waiting
a1715d2335ab: Waiting
e6d688354e2d: Waiting
5609220a8c38: Waiting
e6d688354e2d: Waiting
5609220a8c38: Waiting
263faafe3340: Waiting
a441505006a9: Waiting
f56be85fc22e: Waiting
78c94c8792d0: Waiting
4fa68352a2d3: Waiting
a1715d2335ab: Waiting
78c94c8792d0: Waiting
4fa68352a2d3: Waiting
a1715d2335ab: Waiting
e6d688354e2d: Waiting
5609220a8c38: Waiting
263faafe3340: Waiting
a441505006a9: Waiting
f56be85fc22e: Waiting
5609220a8c38: Waiting
263faafe3340: Waiting
a441505006a9: Waiting
f56be85fc22e: Waiting
78c94c8792d0: Waiting
4fa68352a2d3: Waiting
a1715d2335ab: Waiting
e6d688354e2d: Waiting
263faafe3340: Waiting
a441505006a9: Waiting
f56be85fc22e: Waiting
78c94c8792d0: Waiting
4fa68352a2d3: Waiting
a1715d2335ab: Waiting
e6d688354e2d: Waiting
5609220a8c38: Waiting
a1715d2335ab: Waiting
e6d688354e2d: Waiting
5609220a8c38: Waiting
263faafe3340: Waiting
a441505006a9: Waiting
f56be85fc22e: Waiting
78c94c8792d0: Waiting
4fa68352a2d3: Waiting
5609220a8c38: Waiting
263faafe3340: Waiting
a441505006a9: Waiting
f56be85fc22e: Waiting
78c94c8792d0: Waiting
4fa68352a2d3: Waiting
a1715d2335ab: Waiting
e6d688354e2d: Waiting
f56be85fc22e: Waiting
78c94c8792d0: Waiting
4fa68352a2d3: Waiting
a1715d2335ab: Waiting
e6d688354e2d: Waiting
5609220a8c38: Waiting
263faafe3340: Waiting
a441505006a9: Waiting
a441505006a9: Waiting
f56be85fc22e: Waiting
78c94c8792d0: Waiting
4fa68352a2d3: Waiting
a1715d2335ab: Waiting
e6d688354e2d: Waiting
5609220a8c38: Waiting
263faafe3340: Waiting
78c94c8792d0: Waiting
4fa68352a2d3: Waiting
a1715d2335ab: Waiting
e6d688354e2d: Waiting
5609220a8c38: Waiting
263faafe3340: Waiting
a441505006a9: Waiting
f56be85fc22e: Waiting
78c94c8792d0: Waiting
4fa68352a2d3: Waiting
a1715d2335ab: Waiting
e6d688354e2d: Waiting
5609220a8c38: Waiting
263faafe3340: Waiting
a441505006a9: Waiting
f56be85fc22e: Waiting
a441505006a9: Waiting
f56be85fc22e: Waiting
78c94c8792d0: Waiting
4fa68352a2d3: Waiting
a1715d2335ab: Waiting
e6d688354e2d: Waiting
5609220a8c38: Waiting
263faafe3340: Waiting
f56be85fc22e: Waiting
78c94c8792d0: Waiting
4fa68352a2d3: Waiting
a1715d2335ab: Waiting
e6d688354e2d: Waiting
5609220a8c38: Waiting
263faafe3340: Waiting
a441505006a9: Waiting
4fa68352a2d3: Waiting
a1715d2335ab: Waiting
e6d688354e2d: Waiting
5609220a8c38: Waiting
263faafe3340: Waiting
a441505006a9: Waiting
f56be85fc22e: Waiting
78c94c8792d0: Waiting
e6d688354e2d: Waiting
5609220a8c38: Waiting
263faafe3340: Waiting
a441505006a9: Waiting
f56be85fc22e: Waiting
78c94c8792d0: Waiting
4fa68352a2d3: Waiting
a1715d2335ab: Waiting
e6d688354e2d: Waiting
5609220a8c38: Waiting
263faafe3340: Waiting
a441505006a9: Waiting
f56be85fc22e: Waiting
78c94c8792d0: Waiting
4fa68352a2d3: Waiting
a1715d2335ab: Waiting
4fa68352a2d3: Waiting
a1715d2335ab: Waiting
e6d688354e2d: Waiting
5609220a8c38: Waiting
263faafe3340: Waiting
a441505006a9: Waiting
f56be85fc22e: Waiting
78c94c8792d0: Waiting
5609220a8c38: Waiting
263faafe3340: Waiting
a441505006a9: Waiting
f56be85fc22e: Waiting
78c94c8792d0: Waiting
4fa68352a2d3: Waiting
a1715d2335ab: Waiting
e6d688354e2d: Waiting
4fa68352a2d3: Layer already exists
a1715d2335ab: Waiting
e6d688354e2d: Waiting
5609220a8c38: Waiting
263faafe3340: Waiting
a441505006a9: Waiting
f56be85fc22e: Waiting
78c94c8792d0: Waiting
263faafe3340: Waiting
a441505006a9: Waiting
f56be85fc22e: Waiting
78c94c8792d0: Waiting
a1715d2335ab: Waiting
e6d688354e2d: Waiting
5609220a8c38: Waiting
263faafe3340: Waiting
a441505006a9: Waiting
f56be85fc22e: Waiting
78c94c8792d0: Waiting
a1715d2335ab: Waiting
e6d688354e2d: Waiting
5609220a8c38: Waiting
f56be85fc22e: Waiting
78c94c8792d0: Waiting
a1715d2335ab: Waiting
e6d688354e2d: Layer already exists
5609220a8c38: Waiting
263faafe3340: Waiting
a441505006a9: Waiting
5609220a8c38: Layer already exists
263faafe3340: Waiting
a441505006a9: Waiting
f56be85fc22e: Waiting
78c94c8792d0: Waiting
a1715d2335ab: Waiting
a1715d2335ab: Waiting
263faafe3340: Waiting
a441505006a9: Waiting
f56be85fc22e: Waiting
78c94c8792d0: Waiting
263faafe3340: Waiting
a441505006a9: Waiting
f56be85fc22e: Waiting
78c94c8792d0: Waiting
a1715d2335ab: Waiting
263faafe3340: Waiting
a441505006a9: Layer already exists
f56be85fc22e: Waiting
78c94c8792d0: Layer already exists
a1715d2335ab: Waiting
f56be85fc22e: Waiting
a1715d2335ab: Waiting
263faafe3340: Waiting
263faafe3340: Waiting
f56be85fc22e: Waiting
a1715d2335ab: Waiting
263faafe3340: Layer already exists
f56be85fc22e: Layer already exists
a1715d2335ab: Layer already exists
latest: digest: sha256:d9f1b292f019bb890e4e9196e60e2a965dd2e77f6803a8298b7525f7e2675388 size: 2081
[Pipeline] }
[Pipeline] // withCredentials
[Pipeline] }
[Pipeline] // stage
[Pipeline] stage
[Pipeline] { (Deploying Locally)
[Pipeline] script
[Pipeline] {
[Pipeline] dir
Running in /var/jenkins_home/workspace/NoteBook-App/app
[Pipeline] {
[Pipeline] sh
+ docker-compose down
+ docker-compose rm -rf
unknown shorthand flag: 'r' in -rf
+ true
+ docker-compose pull
 mongo Pulling 
 frontend Pulling 
 backend Pulling 
 backend Pulled 
 frontend Pulled 
 mongo Pulled 
+ docker-compose up -d
 Network app_app-network  Creating
 Network app_app-network  Created
 Container app-mongo-1  Creating
 Container app-mongo-1  Created
 Container app-backend-1  Creating
 Container app-backend-1  Created
 Container app-frontend-1  Creating
 Container app-frontend-1  Created
 Container app-mongo-1  Starting
 Container app-mongo-1  Started
 Container app-backend-1  Starting
 Container app-backend-1  Started
 Container app-frontend-1  Starting
 Container app-frontend-1  Started
+ docker-compose ps
NAME             IMAGE                           COMMAND                  SERVICE    CREATED         STATUS                  PORTS
app-backend-1    shriram2105/notebook-backend    "docker-entrypoint.s…"   backend    3 seconds ago   Up 1 second             0.0.0.0:5000->5000/tcp, :::5000->5000/tcp
app-frontend-1   shriram2105/notebook-frontend   "docker-entrypoint.s…"   frontend   2 seconds ago   Up Less than a second   0.0.0.0:3000->3000/tcp, :::3000->3000/tcp
app-mongo-1      mongo:6-jammy                   "docker-entrypoint.s…"   mongo      3 seconds ago   Up 1 second             0.0.0.0:27017->27017/tcp, :::27017->27017/tcp
+ docker-compose logs --tail=50
mongo-1  | {"t":{"$date":"2025-12-09T10:09:52.909+00:00"},"s":"I",  "c":"NETWORK",  "id":4915701, "ctx":"main","msg":"Initialized wire specification","attr":{"spec":{"incomingExternalClient":{"minWireVersion":0,"maxWireVersion":17},"incomingInternalClient":{"minWireVersion":0,"maxWireVersion":17},"outgoing":{"minWireVersion":6,"maxWireVersion":17},"isInternalClient":true}}}
mongo-1  | {"t":{"$date":"2025-12-09T10:09:52.917+00:00"},"s":"I",  "c":"CONTROL",  "id":23285,   "ctx":"main","msg":"Automatically disabling TLS 1.0, to force-enable TLS 1.0 specify --sslDisabledProtocols 'none'"}
mongo-1  | {"t":{"$date":"2025-12-09T10:09:52.925+00:00"},"s":"I",  "c":"NETWORK",  "id":4648601, "ctx":"main","msg":"Implicit TCP FastOpen unavailable. If TCP FastOpen is required, set tcpFastOpenServer, tcpFastOpenClient, and tcpFastOpenQueueSize."}
mongo-1  | {"t":{"$date":"2025-12-09T10:09:52.973+00:00"},"s":"I",  "c":"REPL",     "id":5123008, "ctx":"main","msg":"Successfully registered PrimaryOnlyService","attr":{"service":"TenantMigrationDonorService","namespace":"config.tenantMigrationDonors"}}
mongo-1  | {"t":{"$date":"2025-12-09T10:09:52.974+00:00"},"s":"I",  "c":"REPL",     "id":5123008, "ctx":"main","msg":"Successfully registered PrimaryOnlyService","attr":{"service":"TenantMigrationRecipientService","namespace":"config.tenantMigrationRecipients"}}
mongo-1  | {"t":{"$date":"2025-12-09T10:09:52.974+00:00"},"s":"I",  "c":"REPL",     "id":5123008, "ctx":"main","msg":"Successfully registered PrimaryOnlyService","attr":{"service":"ShardSplitDonorService","namespace":"config.tenantSplitDonors"}}
mongo-1  | {"t":{"$date":"2025-12-09T10:09:52.975+00:00"},"s":"I",  "c":"CONTROL",  "id":5945603, "ctx":"main","msg":"Multi threading initialized"}
mongo-1  | {"t":{"$date":"2025-12-09T10:09:52.982+00:00"},"s":"I",  "c":"CONTROL",  "id":4615611, "ctx":"initandlisten","msg":"MongoDB starting","attr":{"pid":1,"port":27017,"dbPath":"/data/db","architecture":"64-bit","host":"363ea2fbfe15"}}
mongo-1  | {"t":{"$date":"2025-12-09T10:09:52.982+00:00"},"s":"I",  "c":"CONTROL",  "id":23403,   "ctx":"initandlisten","msg":"Build Info","attr":{"buildInfo":{"version":"6.0.26","gitVersion":"0c4ec4b6005f75582ce208fc800f09f561b6c2e8","openSSLVersion":"OpenSSL 3.0.2 15 Mar 2022","modules":[],"allocator":"tcmalloc","environment":{"distmod":"ubuntu2204","distarch":"x86_64","target_arch":"x86_64"}}}}
mongo-1  | {"t":{"$date":"2025-12-09T10:09:52.982+00:00"},"s":"I",  "c":"CONTROL",  "id":51765,   "ctx":"initandlisten","msg":"Operating System","attr":{"os":{"name":"Ubuntu","version":"22.04"}}}
mongo-1  | {"t":{"$date":"2025-12-09T10:09:52.982+00:00"},"s":"I",  "c":"CONTROL",  "id":21951,   "ctx":"initandlisten","msg":"Options set by command line","attr":{"options":{"net":{"bindIp":"*"},"security":{"authorization":"enabled"}}}}
mongo-1  | {"t":{"$date":"2025-12-09T10:09:53.000+00:00"},"s":"I",  "c":"STORAGE",  "id":22270,   "ctx":"initandlisten","msg":"Storage engine to use detected by data files","attr":{"dbpath":"/data/db","storageEngine":"wiredTiger"}}
mongo-1  | {"t":{"$date":"2025-12-09T10:09:53.000+00:00"},"s":"I",  "c":"STORAGE",  "id":22297,   "ctx":"initandlisten","msg":"Using the XFS filesystem is strongly recommended with the WiredTiger storage engine. See http://dochub.mongodb.org/core/prodnotes-filesystem","tags":["startupWarnings"]}
mongo-1  | {"t":{"$date":"2025-12-09T10:09:53.000+00:00"},"s":"I",  "c":"STORAGE",  "id":22315,   "ctx":"initandlisten","msg":"Opening WiredTiger","attr":{"config":"create,cache_size=1311M,session_max=33000,eviction=(threads_min=4,threads_max=4),config_base=false,statistics=(fast),log=(enabled=true,remove=true,path=journal,compressor=snappy),builtin_extension_config=(zstd=(compression_level=6)),file_manager=(close_idle_time=600,close_scan_interval=10,close_handle_minimum=2000),statistics_log=(wait=0),json_output=(error,message),verbose=[recovery_progress:1,checkpoint_progress:1,compact_progress:1,backup:0,checkpoint:0,compact:0,evict:0,history_store:0,recovery:0,rts:0,salvage:0,tiered:0,timestamp:0,transaction:0,verify:0,log:0],"}}
[Pipeline] }
[Pipeline] // dir
[Pipeline] }
[Pipeline] // script
[Pipeline] }
[Pipeline] // stage
[Pipeline] stage
[Pipeline] { (Declarative: Post Actions)
[Pipeline] echo
build finished with status: SUCCESS
[Pipeline] sh
+ docker logout
Removing login credentials for https://index.docker.io/v1/
[Pipeline] echo
Build was successful. Docker image pushed to the registry.
[Pipeline] echo
 Application deployed with docker compose .
[Pipeline] sh
+ echo === Application URLs ===
=== Application URLs ===
+ echo Frontend: http://localhost:3000
Frontend: http://localhost:3000
+ echo Backend:   http://localhost:5000
Backend:   http://localhost:5000
+ echo 

+ echo === Running Containers ===
=== Running Containers ===
+ docker-compose -f app/docker-compose.yaml ps
NAME             IMAGE                           COMMAND                  SERVICE    CREATED         STATUS         PORTS
app-backend-1    shriram2105/notebook-backend    "docker-entrypoint.s…"   backend    6 seconds ago   Up 3 seconds   0.0.0.0:5000->5000/tcp, :::5000->5000/tcp
app-frontend-1   shriram2105/notebook-frontend   "docker-entrypoint.s…"   frontend   5 seconds ago   Up 3 seconds   0.0.0.0:3000->3000/tcp, :::3000->3000/tcp
app-mongo-1      mongo:6-jammy                   "docker-entrypoint.s…"   mongo      6 seconds ago   Up 4 seconds   0.0.0.0:27017->27017/tcp, :::27017->27017/tcp
[Pipeline] }
[Pipeline] // stage
[Pipeline] }
[Pipeline] // withEnv
[Pipeline] }
[Pipeline] // withEnv
[Pipeline] }
[Pipeline] // node
[Pipeline] End of Pipeline
Finished: SUCCESS
