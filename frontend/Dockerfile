# Use a lightweight Nginx web server image
FROM nginx:alpine

# Copy all files from the current directory to the web server directory in the container
COPY . /usr/share/nginx/html

# Expose port 80 for the Nginx web server
EXPOSE 80

# Run the Nginx web server
CMD ["nginx", "-g", "daemon off;"]
