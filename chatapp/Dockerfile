# Use an official Node.js runtime as a parent image
FROM node:14

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json files
COPY package*.json ./

# Install dependencies
RUN npm install
RUN npm install express

# Copy the rest of the application code
COPY . .

# Expose the application port
EXPOSE 8000

# Command to run the application
CMD ["node", "server.js"]
