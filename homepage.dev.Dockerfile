FROM node:20

# Create app directory

WORKDIR /usr/src/app

# Install yarn
# RUN npm install -g yarn

# Bundle app source
COPY ./code .

# Copy posts into the container

COPY ./posts ./public/blog/posts
COPY ./posts/image ./public/image
COPY ./assets ./public/assets

RUN yarn install

EXPOSE 3000

CMD [ "npm", "run", "dev" ]