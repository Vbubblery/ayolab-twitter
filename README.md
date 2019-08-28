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

### Create user
```
mutation{
  createUserParse(UserInput:{name:"user1"}){ //change the user1 to the name you want
    status
  }
}
```

You can create two or more users to test the followed.

### Get all users
And then you can get all users with the id name and who they followed id.

```
query{
  Users {
    id
    name
    followed{
      id
    }
  }
}

```
### Send a Post
User can send a post, but we need the user's id and the content of the post. The user's id you can get it with the above request.

```
mutation {
  createPostParse(
    PostCreate: {
      userId: "85c24d06-a368-49a4-adc9-ee91b5ac911f"
      post: { text: "a1" }
    }
  ) {
    status
  }
}

```
### User follow
User can follow others
```
mutation {
  userFollowParse(
    follow: {
      userId: "e415f54b-304c-4b89-aa7a-85b7b6eebfdb"         // this should be user's id
      followId: "85c24d06-a368-49a4-adc9-ee91b5ac911f"       // this is the user who you want to follow's id.
    }
  ){
    status
  }
}

```

### Recently posts
And then we can get the followed user's renctly posts (Change the userId.)

```
query{
  getTopN(userId:"e415f54b-304c-4b89-aa7a-85b7b6eebfdb",number:20){
    time
  }
}

or

query {
  getTopN1(userId: "e415f54b-304c-4b89-aa7a-85b7b6eebfdb", number: 20) {
    time
  }
}


```

## The Take Top N

You can find the logical to implment it in the file: /src/graphql/resolvers/user.ts and start from line 10.
There are functions: 
  - getTopNResolver: the worst way to get the TOP N.
  - getTopNResolverOpt1: the better way, but for the last sort step, I use quick sort, so it chould be better.
  - Todo: getTopNResolverOpt2: the best way, use partition sort to replace the quick sort.


