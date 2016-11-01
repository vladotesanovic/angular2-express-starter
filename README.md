<img width="150" src="https://i.cloudup.com/zfY6lL7eFa-3000x3000.png" />
<img width="50" src="https://angular.io/resources/images/logos/angular2/angular.svg" />

## Angular2 Express Starter

- Angular 2 ( 2.1 release )
- ExpressJS ( with compression )
- Webpack ( angular-cli )
- Redux ( NgRx/Store - with server calls)


## Install / Development

```bash
git clone https://github.com/vladotesanovic/angular2-express-starter
cd angular2-express-starter

# Install dependencies
npm install

# start server
npm run start

# Client url: http://localhost:4200
# Application ( epxress ) API: http://localhost:4300
```

## Build / Production
Uncomment in public/index.html:

```bash

npm run build

## Deploy dist server

Structure of dist folder:

/dist/server <-- expressjs
/dist/client <-- angular2

```
