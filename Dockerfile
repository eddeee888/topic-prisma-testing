FROM node:12.18.0-alpine3.11 AS base
WORKDIR /usr/src/app
RUN apk update \ 
  && apk add bash \
  && rm -rf /var/cache/apk/*
COPY . . 
RUN yarn install --frozen-lockfile
RUN yarn prisma:generate