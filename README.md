# React-Stack
---
This is a base stack for React development. It has the most basic utilities to help a developer write code, check syntax errors, compile stylus code and the like.

####Installation
Clone the repository to an empty folder by executing:

```javascript
npm clone https://github.com/randgris-team/React-Stack.git
```

Then install the project dependencies by the following instruction:


```javascript
npm install
```

####Global Dependencies
As our project will use Grunt tasks, its recommended to install the Grunt CLI. This can be done by inputting:

```javascript
npm install -g grunt-cli
```

####Development
Before starting development process, there are two tasks that must be run on separate terminals (as they are blocking tasks):

```javascript
grunt watch
```
This task will look over for changes on our .styl and .js(x) files. 

```javascript
grunt webserver
```

This task will initialize our Webpack Development Server on our local machine. By default, the content will be served on:
* [http://localhost:8080](http://localhost:8080)
* [http://localhost:8080/webpack-dev-server/](http://localhost:8080/webpack-dev-server/)
