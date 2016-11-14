# Chat Room 

A simple chat room node js app

##Dependencies:
* npm
* Redis

##Installation:
* use npm to install node modules in package.json
* make sure redis server is installed and running

###Run the server fom the server folder:
```node
node index.js
```

###Invoke test clients from helper folder:
```python 
python selenium_test.py
```
##Task list
- [x] Chat room server supporting concurrent clients
- [x] Redis to support multiple Node instances
- [x] Server filtering of censor words
- [x] Python utility for generating censor words 
- [x] Python utility to simulate multiple clients send multiple messages
- [ ] Scale out in cloud
- [ ] Node cluster set up in cloud
- [ ] One-one messaging
