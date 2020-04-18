FROM node:current
WORKDIR /usr/src/app
COPY package.json .
RUN npm install
COPY . .
ARG APP_NAME='APP' 
ENV APP_NAME=$APP_NAME
ARG PORT=8080
ENV PORT=$PORT
EXPOSE $PORT
CMD ["npm" "start"]