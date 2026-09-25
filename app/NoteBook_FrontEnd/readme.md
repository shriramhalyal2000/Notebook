# multistage docker build for Dockerfile.
- This frontend is containerised with docker multistage build with only dependecy files required for execulatble build file.

- This makes a very light code artifact that uses less space as content and disk space when executed.

- The container image is stripped of code and framework dependency, and only has build files which only need light base image of the kind ex: node:20-alpine to run build files.

- the container os is stripped of root user, for security reasons it onlyhas an executable user node that only executes this files when run, stripped of any other root perms to keep container secure.
