FROM node:6.9.1-alpine
LABEL maintainer "naratip.ud@gmail.com"
# ENV NODE_ENV production
WORKDIR /toh
# COPY ["package.json", "package-lock.json*", "./"]
# RUN npm install --production --silent && mv node_modules ../
# RUN npm install --silent
# COPY . /toh
EXPOSE 4200
CMD npm start
