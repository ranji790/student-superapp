# Use Node.js for serving static files
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all frontend files
COPY . .

# Expose port 3000
EXPOSE 3000

# Start the HTTP server
CMD ["npm", "start"]
