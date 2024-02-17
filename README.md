# Phonebook

## introduction


Introduction
This is a simple full stack React application which provides a solid starting point for [React JS](https://react.dev/), [sequelize](https://sequelize.org/), [ExpressJS](https://expressjs.com/) and [NodeJS](https://nodejs.org/en/) based applications. Client side code and the backend API is written using Express.

Phonebook is an application made to store names and telephone number of friends, family, or other people we recognize.

## Before You Begin

Before you begin i recommend you to read about the basic building blocks that assemble this application:
- ReactJS - React's [Official Website](https://react.dev/) is a great starting point.
- Express - The best way to understand express is through it's [Official Website](https://expressjs.com/), which has a [Getting Started](https://expressjs.com/en/starter/installing.html) guide, as well as an [ExpressJS](https://expressjs.com/en/guide/routing.html) guide for general express topics.
-Sequelize - Get in-depth information about Sequelize on the [Official Website](https://sequelize.org/) to learn the [Core Concept](https://sequelize.org/docs/v6/category/core-concepts/) of Sequelize.
- Node.js - Start by going through [Node.js Official Website](https://nodejs.org/en/) which should get you going with the Node.js platform.

## Prerequisites
Make sure you have installed all of the following prerequisites on your development machine:

- Git - [Download & Install Git](https://git-scm.com/downloads). OSX and Linux machines typically have this already installed.
- Node.js - [Download & Install Node.js](https://nodejs.org/en/download/) and the npm package manager.
- POstgreSQL - [Download & Install PostgreSQL](https://www.postgresql.org/download/) and make sure the sequelize migration configuration is the same as the PostgreSQL configuration on your device

## front End

- ReactJS (ES6)
- react-router-dom
- redux
- redux-thunk

source files in `phonebook-client`/ folder

## back-end

- NodeJS
- ExpressJS
source files in `phonebook-server`/ folder


## Getting Started

First, open terminal to run the server.
```
# Clone the repository
git clone https://github.com/sulthanrizal/PHONEBOOK_WEB.git

# Go inside the directory
cd PHONEBOOK_WEB

# Install dependencies for server
cd phonebook-server && npm install

# Start server
npm run dev
```
open terminal to run the Socket.IO server.
```
# Go inside the directory
cd PHONEBOOK_WEB

# Install dependencies for client
cd phonebook-client && npm install

# Start client
npm start
```

This application should run on port 3000 , you can access it through browser, just go to http://localhost:3000/ for Client App, and http://localhost:3001 for RESTful APIs

## Preview

- Home

  ![Screen Shot 2024-02-12 at 23 53 31](https://github.com/sulthanrizal/PHONEBOOK_WEB/assets/146927147/127fe6a8-f516-4516-bc69-461f3c025f43)
  
- Edit

![Screen Shot 2024-02-16 at 14 48 48](https://github.com/sulthanrizal/PHONEBOOK_WEB/assets/146927147/0054f54e-cfdd-439a-bd04-3b616ce8aa8d)

- Add

![Screen Shot 2024-02-16 at 14 51 01](https://github.com/sulthanrizal/PHONEBOOK_WEB/assets/146927147/f1eb268a-a714-499f-a7d9-126b62c2017e)

- Avatar

https://github.com/sulthanrizal/PHONEBOOK_WEB/assets/146927147/b95c1125-8d25-4e26-841f-86df50ad49d0

- Delete

  
![Screen Shot 2024-02-16 at 15 15 11](https://github.com/sulthanrizal/PHONEBOOK_WEB/assets/146927147/3e02fc13-6a0c-4bb6-8ef8-25f5f362ed65)




