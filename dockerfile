# Use an official Node.js runtime as the base image
FROM node:14

# Create a directory for your application
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install application dependencies
RUN npm install express axios cors

# Copy the rest of the application code to the container
COPY . .

# Expose the port your application will run on
EXPOSE 3000

# Start your application when the container starts
CMD ["node", "app.js"]
