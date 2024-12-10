# File ./Dockerfile
FROM node:20.18.1-alpine AS build

WORKDIR /app

COPY package.json ./

RUN yarn install

ENV PATH=/app/node_modules/.bin:$PATH

COPY . .

RUN yarn run build --mode=production

FROM nginx:1.27.2-alpine

RUN apk add --no-cache bash

COPY ./nginx/nginx.conf /etc/nginx
COPY --from=build /app/dist /var/www/html/

COPY 03-setup-env.sh /docker-entrypoint.d/03-setup-env.sh
RUN dos2unix /docker-entrypoint.d/03-setup-env.sh
RUN chmod +x /docker-entrypoint.d/03-setup-env.sh

COPY 05-envsubst-in-dist.sh /docker-entrypoint.d/05-envsubst-in-dist.sh
RUN dos2unix /docker-entrypoint.d/05-envsubst-in-dist.sh
RUN chmod +x /docker-entrypoint.d/05-envsubst-in-dist.sh

EXPOSE 80

ENTRYPOINT ["/docker-entrypoint.sh"]
CMD ["nginx","-g","daemon off;"]