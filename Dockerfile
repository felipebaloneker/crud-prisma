FROM node:16

ENV DATABASE_URL=postgresql://postgres:12345@db:5432/prisma-node?schema=public

WORKDIR /app

COPY package.json package.json
COPY yarn.lock yarn.lock
COPY prisma ./prisma/

RUN yarn install

RUN npx prisma generate 
RUN npx prisma migrate deploy

COPY . .

RUN yarn compile