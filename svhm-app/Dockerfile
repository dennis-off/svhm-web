# File ./Dockerfile
FROM node:20.18.1-alpine AS build

WORKDIR /app

COPY package.json ./

RUN yarn install

ENV PATH /app/node_modules/.bin:$PATH

COPY . .

RUN yarn run build

FROM nginx:1.27.2-alpine

COPY ./nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /var/www/html/

EXPOSE 3000

ENTRYPOINT ["nginx","-g","daemon off;"]