FROM node:14
WORKDIR /e-estilomb
COPY . .
RUN npm install
ENTRYPOINT npm start