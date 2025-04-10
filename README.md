# Ticks4Science

## Description
Dina Fonseca's (Rutgers Entomology) project to use citizen science to track ticks and tick borne illness in New Jersey.

## Installation
1. Clone the repository
2. `yarn install` in both the frontend and backend directories
3. Create a .env file in the backend directory that is **gitignored** containing the variables PORT, CORS_ORIGIN, SERVER_URL, DB_USER, DB_PASS, DB_NAME.
1. Create a .env file in the frontend directory containing the variable REACT_APP_BASENAME.  Do not put secrets in this file, react does not hide the info when building.

## Usage
1. `yarn start` the backend or `yarn dev` if making changes to the code.
1. `yarn start` the frontend to develop
1. `yarn build` the frontend to finalize changes and copy the build folder to the public server
cp -r ./build/. /var/www/html/tick-frontend/ **on mosaic**
sudo cp -r ./build/. /var/www/ticks.rutgers.edu **on tessera**
 npx update-browserslist-db@latest **on mosaic**
 npx browserslist --update-db **on tessera**

## Credits
This project was developed by Michelle Stuart for the Office of Research Analytics at Rutgers University.

## License
MIT License
Copyright (c) 2022 Michelle Stuart

[Example website](https://mosaic.njaes.rutgers.edu/tick-map/)

[Google doc slides](https://docs.google.com/presentation/d/1muZgI3MPhEVlv0JKxF1sGIYx0K7GVXOh/edit#slide=id.p1)

[images folder](https://drive.google.com/drive/u/0/folders/1Jee3Wwa-ECUgsmB5n5MsIWpg2R7W25yg)

Dina would like to use this address for tick submissions:

Tick4Science
Rutgers CVB
180 Jones Ave.
New Brunswick, NJ 08901
If the sender is using FedEx, they can use this phone number as the shipping phone:  848-932-3146
contact email is CVB@rutgers.edu
the url will be ticks.rutgers.edu

Missing Info:
1. How will they be notified? Text should either provide instructions for accessing new info or collect email for notifications.
1. Missing insect and spider images on Tick or Insect page
1. Missing photos on identify tick page
1. missing coin, ruler, and nail examples on how to take tick pics page
1. Need to know max number of photos per person, can possibly run out of storage space which will result in submissions failing or being sent to nowhere (user will think it sent, but you will never get it).
