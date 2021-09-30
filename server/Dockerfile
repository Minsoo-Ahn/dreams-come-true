FROM node:14.18-alpine

WORKDIR "/app"

COPY ./package.json ./

RUN npm install -g nodemon \
 && npm install \
 && npm install mongoose
 
COPY . .

CMD ["npm","run","dev"]
