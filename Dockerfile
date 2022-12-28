FROM node:latest

WORKDIR /usr/app_users/api

COPY package*.json ./
COPY *.lock ./

RUN yarn

COPY . .

EXPOSE 5000

CMD ['yarn': 'dev']