# Use the official Node.js image
FROM node:14-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and install dependencies
COPY package.json .
RUN npm install

# Copy the rest of the backend code
COPY . .

# Expose port 3000 for the Node.js application
EXPOSE 3000

# Command to run the application
CMD ["node", "server.js"]
