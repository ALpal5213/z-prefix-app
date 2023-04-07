FROM node:alpine
WORKDIR /backend
COPY . /backend
EXPOSE 7999
RUN npm install
CMD ["/bin/sh", "start.sh"]