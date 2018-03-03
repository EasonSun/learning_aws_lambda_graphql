# learning_aws_lambda_graphql
A project for learning purposes following this tutorial https://cloudacademy.com/blog/how-to-write-graphql-apps-using-aws-lambda/

Structure:
lambda.js
src
├── app.js
└── graphql
    ├── queries
    │   └── Post.js
    ├── resolvers
    │   └── Post.js
    ├── schema.js
    └── types
        └── Post.js
server.js

The projects is a web service written in GraphQL and run on AWS Lambda, using Node.js as runtime and Express.js as framework. _app.js_ and _server.js_ config the server and they can be combined. _lambda.js_ is the "handler" that "Lambda can invoke when service executes your code." (See https://docs.aws.amazon.com/lambda/latest/dg/nodejs-prog-model-handler.html). Inside the src dir, _schema.js_ exports a GraphQL Schema object that defines the query, which is the core of GraphQL. The reason GraphQL is different from REST because it does the query for the client (and as a result the client can only specify which fields and optionally which types of that fields that they need. More see https://blog.graph.cool/graphql-server-basics-the-schema-ac5e2950214e?gi=99f8fe8c29e6). Here the field is called "posts" defined at line 19 in _schema.js_. The following PostQuery.index() is a query that defined in _./queries/Post.js_, in which the resolver for this field is defined in _./resolvers/Posts.json_ and the types for this field is defined in _./types/Post.json_. Notice the dir structure / naming convention is easily extensible; all the Posts.js are so named for the posts field and thus we can define \*.js for \* fields. But back to the _schema.js_, I believe there can be only one this file because it is required by the express-graphql middleware so that epxress can talk with graphql.

My questions remaining are:
1. What is the exact excution order of the files at the server? Does the order depend on using aws lambda? Also, does the dir structure matter, e.g., should the app.js put at the / ?
2. How to write multiple queries? Can there be one more _schema.js_ ?
3. How to connect to a db / multiple db?

The working api is at gl3nizg5.execute-api.us-east-2.amazonaws.com/test/
