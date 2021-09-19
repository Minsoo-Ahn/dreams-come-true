FROM php:7.4-fpm

# install composer

RUN cd /usr/bin && curl -sS https://getcomposer.org/installer | php -- --version=1.10.15 && ln -s /usr/bin/composer.phar /usr/bin/composer

RUN apt-get update \
&& apt-get install -y \
git \
zip \
unzip \
make \
vim \
nodejs \
zlib1g-dev \
libzip-dev \
npm \
&& docker-php-ext-install zip pdo_mysql


RUN pecl install xdebug-2.9.8 \
    && docker-php-ext-enable xdebug

RUN export XDEBUG_SESSION=phpstorm
RUN npm i npm@latest -g
RUN npm i -g redoc-cli

WORKDIR /var/www
