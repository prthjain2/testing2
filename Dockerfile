From node:16
WORKDIR /app
COPY package.json/app
RUN npm install
COPY . /app
CMD node app1.js
EXPOSE 8000