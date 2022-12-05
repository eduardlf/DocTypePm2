FROM node:16-bullseye-slim

WORKDIR /usr/app/src

COPY ["package.json", "tsconfig.json", "./"]

RUN npm install pm2@5.2.2 -g

RUN npm install

EXPOSE 8080

RUN chown -R node /usr/app/src

USER node
# CMD ["npm", "start"]