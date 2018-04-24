FROM node:6.9.1
LABEL maintainer "naratip.ud@gmail.com"
# ENV NODE_ENV production
# WORKDIR /usr/src/app
WORKDIR /toh
COPY ["package.json", "package-lock.json*", "./"]
# RUN npm install --production --silent && mv node_modules ../
RUN npm install
COPY . /toh
EXPOSE 4200
CMD npm start
