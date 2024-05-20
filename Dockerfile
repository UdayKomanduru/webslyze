# Use nginx image as the base
FROM nginx:latest
FROM httpd:latest

# Create a directory for the application files
# RUN mkdir /usr/share/nginx/slyze

# Copy the HTML, JS, and CSS files to the directory
COPY . /usr/share/nginx/slyze

# Configure Nginx to serve your application from this directory
# COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 80

# Use the default nginx configuration
CMD ["nginx", "-g", "daemon off;"]