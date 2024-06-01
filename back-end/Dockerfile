FROM node:latest
# Installing libvips-dev for sharp Compatibility
RUN apt-get update && apt-get install -y build-essential gcc autoconf automake zlib1g-dev libpng-dev nasm bash libvips-dev git
ARG NODE_ENV=development
ENV NODE_ENV=${NODE_ENV}
WORKDIR /portfolio/
COPY package.json package-lock.json ./
RUN npm install -g node-gyp
RUN npm config set fetch-retry-maxtimeout 600000 -g && npm install
ENV PATH /portfolio/node_modules/.bin:$PATH
WORKDIR /portfolio/backend
COPY . .
RUN chown -R node:node /portfolio/backend
USER node
EXPOSE 1337
CMD ["sh", "-c", "if [ \"$NODE_ENV\" = \"development\" ]; then npm run develop; else npm run build && npm run start; fi"]
