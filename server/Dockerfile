FROM node:21

WORKDIR /app

COPY package*.json .

RUN npm ci

RUN npx -y playwright@1.46.1 install --with-deps

COPY . .

EXPOSE 8080

CMD ["npm", "run", "start"]

