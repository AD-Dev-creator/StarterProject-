# Verify if a name project was passed as argument
if [ -z "$1" ]; then
  echo "You need to pass a name for the project"
  exit 1
fi

PROJECT_NAME=$1
if [ -z "$2" ]; then
  echo "You need to pass a name for the database"
  exit 1
fi

# Create a new project using the typeScrypt
echo "Creating a new project using typeScrypt"
npx create-typeScrypt-app $PROJECT_NAME
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
dist' > .gitignore
if [ $? -ne 0 ]; then
  echo "An error occurred while creating the .gitignore file"
  exit 1
fi

# Create .env file
echo "Creating .env file"
echo "DATABASE_URL=mysql://root:root@localhost:3306/$2" > .env
echo "DATABASE_NAME=$2" >> .env
echo "DATABASE_USER=root" >> .env
echo "DATABASE_PASSWORD=root" >> .env
echo "DATABASE_PORT=3306" >> .env
echo "DATABASE_HOST=localhost" >> .env
echo "DATABASE_DRIVER=mysql" >> .env
echo "DATABASE_CHARSET=utf8mb4" >> .env
if [ $? -ne 0 ]; then
  echo "An error occurred while creating .env file"
  exit 1
fi

# Create folder src
mkdir src
echo "Creating src folder"
if [ $? -ne 0 ]; then
  echo "An error occurred while creating src folder"
  exit 1
fi

# Create folder src/modules
mkdir src/modules
echo "Creating src/modules folder"
if [ $? -ne 0 ]; then
  echo "An error occurred while creating src/modules folder"
  exit 1
fi

# Create file src/modules/server.ts
cat <<EOT >> src/modules/server.ts
import express from 'express';
import dotenv from 'dotenv';
import { createConnection } from 'typeorm';
import { routes } from './routes';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/api', routes);

createConnection().then(() => {
  app.listen(PORT, () => {
    console.log(\`Server is running on port \${PORT}\`);
  });
}).catch(error => console.log(error));
EOT
echo "Creating src/modules/server.ts file"
if [ $? -ne 0 ]; then
  echo "An error occurred while creating src/modules/server.ts file"
  exit 1
fi

# Create file src/modules/routes.ts
cat <<EOT >> src/modules/routes.ts
import { Router } from 'express';

const routes = Router();

routes.get('/', (req, res) => {
  res.send('API is running');
});

export { routes };
EOT
echo "Creating src/modules/routes.ts file"
if [ $? -ne 0 ]; then
  echo "An error occurred while creating src/modules/routes.ts file"
  exit 1
fi

# Create tsconfig.json file
cat <<EOT >> tsconfig.json
{
  "compilerOptions": {
    "target": "es6",
    "module": "commonjs",
    "outDir": "./dist",
    "rootDir": "./src",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules"]
}
EOT
echo "Creating tsconfig.json file"
if [ $? -ne 0 ]; then
  echo "An error occurred while creating tsconfig.json file"
  exit 1
fi

# Install the dependencies
echo "Installing the dependencies"
yarn add express dotenv mysql2 typeorm reflect-metadata
yarn add @types/express @types/dotenv @types/mysql2 @types/node @types/reflect-metadata ts-node-dev -D
yarn add bcryptjs jsonwebtoken
yarn add jest ts-jest @types/jest @types/bcryptjs @types/jsonwebtoken @types/supertest supertest -D
if [ $? -ne 0 ]; then
  echo "An error occurred while installing the dependencies"
  exit 1
fi

# Create Dockerfile
cat <<EOT >> Dockerfile
# Use the official Node.js image as the base image
FROM node:14

# Set the working directory
WORKDIR /usr/src/app

# Copy package.json and yarn.lock files
COPY package.json yarn.lock ./

# Install dependencies
RUN yarn install

# Copy the rest of the application code
COPY . .

# Build the TypeScript code
RUN yarn build

# Expose the application port
EXPOSE 3000

# Start the application
CMD ["yarn", "start"]
EOT
echo "Creating Dockerfile"
if [ $? -ne 0 ]; then
  echo "An error occurred while creating Dockerfile"
  exit 1
fi