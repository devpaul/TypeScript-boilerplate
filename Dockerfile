FROM node:6

EXPOSE 8888

RUN mkdir /myapp
RUN npm install grunt-cli -g

COPY . /myapp

WORKDIR /myapp
RUN npm install
RUN grunt dev

CMD ["grunt", "serve"]
