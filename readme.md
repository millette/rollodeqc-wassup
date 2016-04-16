# Le point sur le RoLLodeQc

```sh
$ npm install
$ npm start
```

Deux autres scripts sont configurés:

```sh
$ npm run lint # utilise standard (feross) pour vérifier le JavaScript.
$ npm run make
```

```npm run make``` lance d'abord ```lint``` puis crée les fichiers
**index.html** et **bundle.js** nécessaires à un site statique.

Éditez index.jade et css/style.css à votre goût, sauvez et le browser
se met à jour.

Naviguez vers <http://localhost:1234>.

## TODO
* Configurer webpack pour *outputter* ses fichiers dans dist/

# En savoir plus
Le plus important, c'est de comprendre Lost pour gérer le grid html.

## Lost Grid
<https://github.com/peterramsing/lost>

## Boy
<https://github.com/corysimmons/boy>

## Responsive Type
<https://github.com/seaneking/postcss-responsive-type> *inspiré de Typographic*

## Jade (templates)
<http://jade-lang.com/reference/>

## Webpack
<https://github.com/webpack/webpack>

## PostCSS
<https://github.com/postcss/postcss>

## cssnext
<https://github.com/MoOx/postcss-cssnext/>

# L'auteur
## Robin Millette
<http://robin.millette.info/> <https://twitter.com/rollodeqc>

## Prototype du RoLLodeQc
<http://www.rollodeqc.com/>
