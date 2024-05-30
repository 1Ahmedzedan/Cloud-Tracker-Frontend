# Stage 1: Build the React application
FROM node:18-alpine as BUILD_IMAGE
WORKDIR /app/react-app

# Copy only package.json and package-lock.json first to leverage Docker cache
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the application
RUN npm run build

# Stage 2: Prepare the production image
FROM node:18-alpine as PRODUCTION_IMAGE
WORKDIR /app/react-app

# Copy the build output from the build stage
COPY --from=BUILD_IMAGE /app/react-app/dist/ /app/react-app/dist/

# Expose the port the application will run on
EXPOSE 8080

# Copy only the necessary files for running the application
COPY package.json package-lock.json ./
COPY vite.config.ts ./

# Install only production dependencies
RUN npm install --only=production

# Ensure TypeScript is available in the production image (if needed)
RUN npm install typescript

# Expose the application port and specify the command to run the application
CMD ["npm", "run", "preview"]
