FROM node:12-alpine as build-step
WORKDIR /app
COPY package.json ./
RUN npm install 
COPY . .
EXPOSE 4200
CMD npm run start