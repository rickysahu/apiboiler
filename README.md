# Logger API
Allows internal apps to write logs to 1uphealth cassandra / elastic log db.

## Required Parameters
lvl = debug, info, warn, error  
msg = message to be logged  

## Optional Parameters
process_id = process id of the app  
file = the file within the app from where the logs came from  
local_ip = the local in network location from where the log was produced  
environment = development or production  
git_rev = the short git id  

## Custom parameters, any other params you want

## Invoke by ...
making a post request to http://localhost:1095/logger/v1/write
with content like
{
  "lvl":"warn",
  "msg":"test log",
  "other": "stuff"
}

## Start
```
npm install
npm install -g gulp
gulp server
pm2 start npm --name loggerapi -- start
```
