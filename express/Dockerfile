FROM --platform=linux/amd64 node:20.10.0-alpine

WORKDIR /examples

ENV NODE_ENV=production
ENV PORT=3000

COPY express .

WORKDIR /examples/express

RUN npm install --production=false
RUN npm run build

EXPOSE 3000

CMD [ "node", "dist/index.js" ]