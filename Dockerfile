FROM node:16-alpine
WORKDIR /srv/app
COPY . .
RUN npm install
RUN npm run build
RUN apk update 
RUN apk add --no-cache tzdata
ENV TZ America/Lima

CMD [ "node", "dist" ]
