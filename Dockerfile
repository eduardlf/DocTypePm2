FROM node:16-bullseye-slim

WORKDIR /usr/app

COPY ["*.json","./"]

RUN npm install pm2@5.2.2 -g && chown -R node /usr/app

USER node

EXPOSE 8080