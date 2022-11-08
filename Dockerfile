## Frontend

FROM node:16

WORKDIR /app

COPY package.json ./app

COPY package-lock.json ./app

COPY . .

RUN npm i

EXPOSE 3000

CMD ["npm", "run", "start"]