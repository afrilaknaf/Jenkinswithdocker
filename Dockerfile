From node:20

WORKDIR /app

COPY package*.json .

RUN npm install

COPY . .

EXPOSE 2004

CMD ["node","index.js"]