# NJTicks4Science! Front end

## Build history
1/17/2024 - frontend built with commit 32e9b92
7/20/2023 - the frontend is currently built with commit 205bc4cb
develop is currently on commit b888502d

## .env files

You can set up different files for different environments and depending on the task, one will supercede another.

- start: .env.local > .env.development > .env
- build: .env.local > .env.production > .env
- test: .env.test > .env

## production
sudo cp -r ./build/. /var/www/ticks.rutgers.edu/
