FROM node:latest as build
WORKDIR /app
COPY package.json ./
RUN npm install
RUN npm ci --production
COPY . .
RUN npm run build


FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html
#ENV PORT 8080
#ENV HOST 0.0.0.0
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
