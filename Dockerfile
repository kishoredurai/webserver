FROM node:18.12-alpine

WORKDIR /app

COPY package.json /app

RUN npm install --legacy-peer-deps

COPY . /app

CMD ["npm","start"]