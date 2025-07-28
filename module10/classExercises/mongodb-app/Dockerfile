FROM node:19-alpine
COPY package*.json ./
WORKDIR /app
COPY . .
EXPOSE 8080
RUN npm install
CMD ["npm","start" ]