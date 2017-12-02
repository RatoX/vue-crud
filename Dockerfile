FROM node:8.5.0

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package.json /usr/src/app/
RUN npm install --production=false

COPY . /usr/src/app

RUN npm run lint
RUN npm run test
RUN npm run build
