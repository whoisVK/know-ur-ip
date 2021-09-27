FROM node:14

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

RUN useradd -u 8855 KarthikVenkatesh

USER KarthikVenkatesh

CMD ["node", "app.js"]
