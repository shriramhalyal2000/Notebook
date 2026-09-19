# stage:1 install dependencies
FROM node:20.0-alpine AS deps
WORKDIR /app

# copy dependency files
COPY package*.json ./

# install npm 
RUN npm ci 

# stage:2 to build code

FROM node:20.0-alpine AS builder
WORKDIR /app

# copy build node files from deps
COPY --from=deps /app/node_modules ./node_modules

# copy code 
COPY . .

# build executable from npm
RUN npm run build

# stage:3 serve frontend files with nghinx

FROM nginx:alpine AS runner
WORKDIR /usr/share/nginx/html


RUN rm -rf ./*

COPY --from=builder /app/build .

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]