FROM node:18.17.1-alpine

WORKDIR /app

COPY ./package.json .

RUN npm i -g pnpm
RUN pnpm i --production

COPY . .

RUN pnpm build

CMD ["pnpm", "start"]
