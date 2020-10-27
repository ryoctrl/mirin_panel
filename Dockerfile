FROM node:14.5.0-alpine

RUN mkdir -p /usr/src
WORKDIR /usr/src

COPY . /usr/src

RUN yarn install

ARG NEXT_PUBLIC_apiKey
ARG NEXT_PUBLIC_authDomain
ARG NEXT_PUBLIC_databaseURL
ARG NEXT_PUBLIC_projectId
ARG NEXT_PUBLIC_storageBucket
ARG NEXT_PUBLIC_messagingSenderId
ARG NEXT_PUBLIC_appId
ARG NEXT_PUBLIC_measurementId
ARG NEXT_PUBLIC_NODE_ARG
ARG NEXT_PUBLIC_FRONTEND_ADDRESS

RUN yarn build:next
RUN yarn build:server
EXPOSE 3000
CMD yarn start
