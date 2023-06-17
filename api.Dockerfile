FROM node:16.20.0-alpine3.18

RUN apk add --no-cache bash

WORKDIR /app/api

COPY api/package.json api/yarn.lock ./

COPY ./api .

RUN yarn

EXPOSE 4000

CMD ["yarn", "dev"]