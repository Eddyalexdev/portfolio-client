FROM node:18.17.0-alpine

WORKDIR /app

COPY ./package.json .

RUN npm i -g pnpm
RUN pnpm i

COPY . .

CMD ["pnpm", "dev"]