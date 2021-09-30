FROM node:14.18-alpine

WORKDIR "/app"

COPY ./package.json ./
RUN npm install \
 && npm install axios
 
COPY . .

CMD ["npm","run","start"]
