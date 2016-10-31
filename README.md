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

/server <-- expressjs
/client <-- angular2

```
