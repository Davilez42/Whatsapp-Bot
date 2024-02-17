FROM node:20-slim

WORKDIR /site/wwwroot

COPY  package*.json ./

RUN npm install

RUN npm ci --omit=dev

COPY  . . 

EXPOSE 8000

CMD ["node","index.js"]