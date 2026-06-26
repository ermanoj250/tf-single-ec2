FROM node:18-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

ENV BACKEND_URL=http://aws_backend:8000/api

EXPOSE 3000

CMD ["npm", "start"]