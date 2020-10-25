FROM node:14.5.0-alpine

RUN mkdir -p /usr/src
WORKDIR /usr/src

COPY . /usr/src

RUN yarn install

RUN yarn build
EXPOSE 3000
CMD yarn start
