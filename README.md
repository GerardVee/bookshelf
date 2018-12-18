## Open source social app

my-bookshelf.co is an open source social app that allows users to interact around books. This app was built with Next.js, Material-UI, React and Redux. It also includes the following third party APIs: AWS Cognito, Gateway, Lambda, S3 and IoT.

Use the app [here](https://my-bookshelf.co).

<br>

## Use cases

See how AWS services and code come together to create a social network! Use the app to write about books, comment, like posts, add books to your collection, and get notifications you care about!

<br>

## Guide
- [Open source social app](#open-source-social-app)
- [Use cases](#use-cases)
- [Guide](#guide)
- [Configuration](#configuration)
  - [.env variables](#env-variables)
  - [API Gateway end points](#api-gateway-end-points)
- [Team](#team)
  - [Hire](#hire)
  - [Members](#members)
  - [Contributing](#contributing)
- [Project information](#project-information)
  - [Built with](#built-with)
  - [License](#license)
- [Issues](#issues)
  - [Posting issues](#posting-issues)
  - [Resolving issues](#resolving-issues)
  
<br>

## Configuration

### .env variables

Save these key, value pairs to an .env file, using this syntax:

```
VARIABLE_NAME=VALUE
VARIABLE_NAME_2=VALUE
```
<br>

| variable name  | datatype  | description |
|---|---|---|
| NODE_ENV  | String  | Either `production` or `development`. |
| BASE  | String  | The base of this app. Usually `/`. |
| IDENTITY_POOL_ID | String | AWS Cognito Identity Pool ID. |
| IOT_HOST | String (URL) | The base URL of the IoT. |
| IOT_CLIENT | String | AWS IoT Client |

<br><br>

### API Gateway end points

***Note***

All end points are provided via the app. Unfortunately, at this time, these endpoints are not customizable due to having very specific logic interwoven into them and lots of configuration on the AWS side of things. That means the app isn't really for modification, but rather just to run and see the code come together.

<br><br>

## Team

`my-bookshelf.co` was built using various technologies, and seeing these technologies fit together like a puzzle was a fascinating experience. Seeing the end result and the final big picture was well worth all the challenges I faced.

### Hire

`my-bookshelf.co` was made to practice my AWS skills as well and seeing a product through to the end. I was committed to finishing it, and I have. [Contact me](https://gerardvee.com/contact) if you're interested in my skills.


### Members

- [gerardvee](https://github.com/GerardVee)


### Contributing

Please post an issue if you believe you've found one. I'll get right to work on it. Additionally, you can post features under issues. Just make sure to clarify that it is a feature!

<br>

## Project information

Specifics of the project. Technologies and licensing are displayed here.

### Built with

**Base**

- [Material-UI](https://github.com/mui-org/material-ui)
- [Next](https://github.com/zeit/next.js)
- [React](https://github.com/facebook/react)
- [Redux](https://github.com/reduxjs/redux)

**Supported by**

- AWS IoT
- AWS Cognito
- AWS Gateway
- AWS Lambda
- AWS S3

### License

All code in this repository is provided under the [MIT License](https://github.com/GerardVee/bookshelf/blob/master/LICENSE.md).

<br>

## Issues

Issues are a part of life. That doesn't mean we have to live with them though! If you encounter an issue, make sure it hasn't been [resolved](https://github.com/GerardVee/bookshelf/issues?utf8=%E2%9C%93&q=is%3Aresolved) yet.


### Posting issues

New issue structure:

```
## Reproduce

How this issue can be reproduced.

## Work Around

(Potential work arounds), not necessary.

Potential Solutions

1. (Potential solution)
2. (Potential solution)
not necessary.

Extra information.
```

<br>

### Resolving issues

Issue resolved structure:

```
## What caused this

The specifics of what caused this.

## What was done

What was done to help resolve this.

## What technology was used

What extra technology if any was implemented/imported to help resolved this issue.

### Before

The code core to the issue before the change.

### After

The fixed code.

```