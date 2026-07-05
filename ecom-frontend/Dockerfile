# Stage 1: Build the React app
FROM node:20-alpine AS build
WORKDIR /app

# Accept build-time variables
ARG VITE_BACK_END_URL
ARG VITE_STRIPE_PUBLISHABLE_KEY
ENV VITE_BACK_END_URL=$VITE_BACK_END_URL
ENV VITE_STRIPE_PUBLISHABLE_KEY=$VITE_STRIPE_PUBLISHABLE_KEY

COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Stage 2: Serve it
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]