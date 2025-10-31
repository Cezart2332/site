FROM node:25-bookworm-slim As build

WORKDIR /usr/src/app

COPY package*.json package-lock.json ./

RUN npm ci 

COPY ./ ./

RUN npm run build
