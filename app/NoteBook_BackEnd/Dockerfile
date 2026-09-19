# stage:1 install dependencies

FROM node:20.0-alpine AS deps
WORKDIR /app

# copy dependency packages
COPY package*.json ./

# install npm clean
RUN npm ci --omit=dev

# stage 2 runner

FROM node:20.0-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production

# copy node dependency n=modules
COPY --from=deps /app/node_modules ./node_modules

# copy dependency packages
COPY package.json ./

# copy code
COPY . .

USER node
EXPOSE 5000

CMD ["node", "index.js"]