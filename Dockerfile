FROM node:16-bullseye-slim

WORKDIR /usr/app/src

COPY ["package.json", "./"]

RUN npm install typescript@4.9.3 -g
RUN npm install pm2@5.2.2 -g

RUN npm install

EXPOSE 8080

RUN chown -R node /usr/app/src

USER node
# CMD ["npm", "start"]