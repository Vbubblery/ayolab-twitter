# ayolab-twitter

## Preparation:
- Install Node.js from office website https://nodejs.org/en/ (Ps. the NodeJs version should be >= 10.16.3)
- Chack the NodeJs and npm (or yarn) version

```bash
npm --version
6.4.1

node --version
v10.15.0
```

- Clone the Project into you local disk.

## Installation:
- Go into the root of the project.
run:

```bash
npm install
or
yarn
```

## Usage:

For this project I upload the env which includes the infomtion of database connection.

run the server:
```bash
npm run watch
```
when there is the conosole log show that "server ready at http://localhost:4000"
You can go to http://localhost:4000/graphql to mangage Graphql request with UI.

## The Take Top N

You can find the logical to implment it in the file: /src/graphql/resolvers/user.ts and start from line 10.
There are functions: 
  - getTopNResolver: the worst way to get the TOP N.
  - getTopNResolverOpt1: the better way, but for the last sort step, I use quick sort, so it chould be better.
  - Todo: getTopNResolverOpt2: the best way, use partition sort to replace tje quick sort.


