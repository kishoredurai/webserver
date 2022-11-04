FROM node:16.18-alpine

WORKDIR /app

COPY package.json /app

RUN npm install

COPY . /app

CMD ["npm","start"]