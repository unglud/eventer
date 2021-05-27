FROM node:alpine

WORKDIR /app

RUN npm install -g pnpm

COPY package.json .
RUN pnpm install --only=prod

COPY . .

CMD pnpm start
