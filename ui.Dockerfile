FROM node:16.20.0-alpine3.18

RUN apk add --no-cache bash

WORKDIR /app/ui

COPY ui/package.json ui/yarn.lock ./

COPY ./ui .

RUN yarn

EXPOSE 4000

CMD ["yarn", "start"]