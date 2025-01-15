# Verify if a name project was passed as argument
if [ -z "$1" ]; then
  echo "You need to pass a name for the project"
  exit 1
fi

PROJECT_NAME=$1

# Create a new project using the create-next-app
echo "Creating a new project using create-next-app"
npx create-next-app $PROJECT_NAME --ts
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
.next
out
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

# Install ESLint and Prettier
echo "Installing ESLint and Prettier"
yarn add eslint prettier eslint-plugin-react eslint-config-prettier eslint-plugin-prettier --dev
if [ $? -ne 0 ]; then
  echo "An error occurred while installing ESLint and Prettier"
  exit 1
fi

# Create a tsconfig.json file
echo "Creating a tsconfig.json file"
touch tsconfig.json
if [ $? -ne 0 ]; then
  echo "An error occurred while creating the tsconfig.json file"
  exit 1
fi

# Add the content to the tsconfig.json file
echo '{
  "compilerOptions": {
    "target": "es5",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": false,
    "forceConsistentCasingInFileNames": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve"
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx"],
  "exclude": ["node_modules"]
}' > tsconfig.json
if [ $? -ne 0 ]; then
  echo "An error occurred while adding the content to the tsconfig.json file"
  exit 1
fi

# Create a next-env.d.ts file
echo "Creating a next-env.d.ts file"
touch next-env.d.ts
if [ $? -ne 0 ]; then
  echo "An error occurred while creating the next-env.d.ts file"
  exit 1
fi

# Add the content to the next-env.d.ts file
echo '/// <reference types="next" />
/// <reference types="next/types/global" />' > next-env.d.ts
if [ $? -ne 0 ]; then
  echo "An error occurred while adding the content to the next-env.d.ts file"
  exit 1
fi

# Create Dockerfile
cat <<EOT >> Dockerfile
# Create image based on the official Node 14 image from the dockerhub
FROM node:14

# Create a directory where the app will be placed
WORKDIR /usr/src/app

# Install dependencies
COPY package*.json  yarn.lock ./

# Install the dependencies
RUN yarn install

# Copy the rest of the application
COPY . .

# Expose the port the app runs in
EXPOSE 4000

# Serve the app
CMD ["yarn", "dev"]
EOT
echo "Creating Dockerfile"
if [ $? -ne 0 ]; then
  echo "An error occurred while creating Dockerfile"
  exit 1
fi
