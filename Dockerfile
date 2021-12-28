FROM node:alpine3.14 as build
WORKDIR /app/

COPY package.json ./
RUN npm install

COPY . .
CMD ["npm" , "start"]

# FROM nginx:alpine

# COPY --from=build /app/build /usr/share/nginx/html
# CMD ["nginx", "-g", "daemon off;"]