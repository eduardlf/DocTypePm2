FROM node:16-bullseye-slim

WORKDIR /usr/app

COPY ["*.json","./"]

RUN npm install pm2@5.2.2 -g

RUN chown -R node /usr/app

USER node

VOLUME /usr/app/src
EXPOSE 8080