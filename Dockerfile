FROM node:16.17-alpine

WORKDIR /app

COPY package.json /app

RUN npm install --legacy-peer-deps

COPY . /app

CMD ["npm","start"]