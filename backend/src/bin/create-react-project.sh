# Verify if a name project was passed as argument
if [ -z "$1" ]; then
  echo "You need to pass a name for the project"
  exit 1
fi

PROJECT_NAME=$1

# Create a new project using the create-react-app
echo "Creating a new project using create-react-app"
npx create-react-app $PROJECT_NAME --template typescript
if [ $? -ne 0 ]; then
  echo "An error occurred while creating the project"
  exit 1
fi

# Move to the project folder
cd $PROJECT_NAME
if [ $? -ne 0 ]; then
  echo "An error occurred while moving to the project folder"
  exit 1
fi

# Initialize Git repository
echo "Initializing Git repository"
git init
if [ $? -ne 0 ]; then
  echo "An error occurred while initializing Git repository"
  exit 1
fi

# Create .gitignore file
echo "Creating .gitignore file"
echo 'node_modules
build
.env.local
.env.development.local
.env.test.local
.env.production.local
dist' > .gitignore
if [ $? -ne 0 ]; then
  echo "An error occurred while creating the .gitignore file"
  exit 1
fi

# Install the dependencies
echo "Installing the dependencies"
yarn add @types/react @types/node typescript @types/react-dom @types/jest @types/react-test-renderer
if [ $? -ne 0 ]; then
  echo "An error occurred while installing the dependencies"
  exit 1
fi

# Add the eslint and prettier dependencies
echo "Adding the eslint and prettier dependencies"
yarn add eslint prettier eslint-config-airbnb eslint-config-prettier eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react eslint-plugin-react-hooks @typescript-eslint/eslint-plugin @typescript-eslint/parser -D
if [ $? -ne 0 ]; then
  echo "An error occurred while adding the eslint and prettier dependencies"
  exit 1
fi

# Create Dockerfile
cat <<EOF > Dockerfile
# Use the official lightweight Node.js 14 image
FROM node:14-slim

# Set the working directory
WORKDIR /usr/src/app

# Copy the file from your host to your current location
COPY package.json yarn.lock ./

# Install the dependencies
RUN yarn install

# Copy the rest of your app
COPY . .

# Expose the port your app runs on
EXPOSE 4000

# Run the command
CMD ["yarn", "start"]
EOF
echo "Creating Dockerfile"
if [ $? -ne 0 ]; then
  echo "An error occurred while creating Dockerfile"
  exit 1
fi