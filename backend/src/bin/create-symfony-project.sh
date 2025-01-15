# Verify if a name project was passed as argument
if [ -z "$1" ]; then
  echo "You need to pass a name for the project"
  exit 1
fi

PROJECT_NAME=$1

# Create a new project using the symfony
echo "Creating a new project using symfony"
symfony new $PROJECT_NAME --full
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

# Install Yarn if not installed
if ! command -v yarn &> /dev/null; then
  echo "Yarn not found, installing Yarn"
  npm install -g yarn
  if [ $? -ne 0 ]; then
    echo "An error occurred while installing Yarn"
    exit 1
  fi
fi

# Initialize Git repository
echo "Initializing Git repository"
git init
if [ $? -ne 0 ]; then
  echo "An error occurred while initializing Git repository"
  exit 1
fi

# Create .env file
echo "Creating .env file"
cp .env .env.local
if [ $? -ne 0 ]; then
  echo "An error occurred while creating .env file"
  exit 1
fi

# Install the dependencies
echo "Installing the dependencies"
composer require symfony/webpack-encore-bundle
if [ $? -ne 0 ]; then
  echo "An error occurred while installing the dependencies"
  exit 1
fi

# Install Doctrine
echo "Installing Doctrine"
composer require orm
if [ $? -ne 0 ]; then
  echo "An error occurred while installing Doctrine"
  exit 1
fi

# Install MakerBundle
echo "Installing MakerBundle"
composer require maker
if [ $? -ne 0 ]; then
  echo "An error occurred while installing MakerBundle"
  exit 1
fi

# Install the dependencies
echo "Installing the dependencies"
yarn add @symfony/webpack-encore --dev
if [ $? -ne 0 ]; then
  echo "An error occurred while installing the dependencies"
  exit 1
fi

# Create a webpack.config.js file
echo "Creating a webpack.config.js file"
touch webpack.config.js
if [ $? -ne 0 ]; then
  echo "An error occurred while creating the webpack.config.js file"
  exit 1
fi

# Add the content to the webpack.config.js file
echo 'const Encore = require("@symfony/webpack-encore");
if (Encore.isRuntimeEnvironmentConfigured() === false) {
  Encore.configureRuntimeEnvironment(process.env.NODE_ENV || "dev");
}

Encore
  .setOutputPath("public/build/")
  .setPublicPath("/build")
  .addEntry("app", "./assets/app.js")
  .splitEntryChunks()
  .enableSingleRuntimeChunk()
  .cleanupOutputBeforeBuild()
  .enableSourceMaps(!Encore.isProduction())
  .enableVersioning(Encore.isProduction())
  .enableBuildNotifications()
  .enableSourceMaps(!Encore.isProduction())
  .enableVersioning(Encore.isProduction())
  .enableReactPreset()
  .configureBabel((config) => {
    config.plugins.push("@babel/plugin-proposal-class-properties");
  })
  .enableSassLoader()
  .enablePostCssLoader()
  .enableIntegrityHashes(Encore.isProduction())
;
module.exports = Encore.getWebpackConfig();' > webpack.config.js
if [ $? -ne 0 ]; then
  echo "An error occurred while adding the content to the webpack.config.js file"
  exit 1
fi

# Create Dockerfile
cat <<EOT >> Dockerfile
# Use the official PHP image as the base image
FROM php:8.0-apache

# Install system dependencies
RUN apt-get update && apt-get install -y \
    git \
    unzip \
    libicu-dev \
    libpq-dev \
    libzip-dev \
    zip \
    && docker-php-ext-install intl opcache pdo pdo_mysql pdo_pgsql zip

# Enable Apache mod_rewrite
RUN a2enmod rewrite

# Set working directory
WORKDIR /var/www/html

# Copy existing application directory contents
COPY . /var/www/html

# Copy existing application directory permissions
COPY --chown=www-data:www-data . /var/www/html

# Install Composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# Install Symfony CLI
RUN wget https://get.symfony.com/cli/installer -O - | bash && \
    mv /root/.symfony*/bin/symfony /usr/local/bin/symfony

# Install PHP dependencies
RUN composer install

# Expose port 3000
EXPOSE 3000

# Start Apache server
CMD ["apache2-foreground"]
EOT
echo "Creating Dockerfile"
if [ $? -ne 0 ]; then
  echo "An error occurred while creating Dockerfile"
  exit 1
fi
