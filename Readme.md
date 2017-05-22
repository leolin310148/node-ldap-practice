Node ldap example
===
* An simple example setup ldap server and authenticate.


Run ldap server
---
```
docker run --name apacheds -d -p 10389:10389 jjhughes57/apacheds-docker
```

Install [ApacheDS Studio](http://directory.apache.org/studio/) 

Import `import.ldif` using ApacheDS Studio
```
uid=admin,ou=system
secret
```

Run project
---
```
yarn install
node index.js
```


