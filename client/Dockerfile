FROM node:21

WORKDIR /app

COPY package*.json .

RUN npm ci

COPY . .

CMD ["npm", "run", "dev", "--", "--host"]

# EXPOSE 8080
