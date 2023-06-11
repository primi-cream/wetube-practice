FROM node:18

WORKDIR /app

COPY package.json .

RUN npm install

COPY . /app

ENV PORT 8000

EXPOSE $PORT

RUN useradd -m -g root myuser

RUN chown root:root /home/myuser

RUN chmod 700 /home/myuser

USER myuser

CMD ["npm","run","start"]
