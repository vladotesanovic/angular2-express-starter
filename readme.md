## Angular2 Express Starter

Demo: https://express-angular2.herokuapp.com/

- Angular 2 rc.4
- Express
- jwt ( JSON Web Tokens )
- ng-semantic ( https://github.com/vladotesanovic/ngSemantic )
- SystemJS ( loader )

## Install
```bash
git clone https://github.com/vladotesanovic/angular2-express-starter
cd angular2-express-starter

# Install dependencies
npm install

# start server
npm run develop

# Applciation url: http://localhost:3000
```

## Development
Uncomment in public/index.html:

```html
<script src="assets/js/systemjs.config.js"></script>
<script>
    System.import('app').catch(function(err) { console.error(err); });
</script>
```

Comment out
```html
<!-- Production mod -->
<script src="js/bundle.min.js"></script>
```
