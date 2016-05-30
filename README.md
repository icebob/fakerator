# fakerator [![NPM version](https://img.shields.io/npm/v/fakerator.svg)](https://www.npmjs.com/package/fakerator)
> Random fake data generator with localization

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/939fc8b138a64c65b9827543e30dab39)](https://www.codacy.com/app/mereg-norbert/fakerator?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=icebob/fakerator&amp;utm_campaign=Badge_Grade)
[![Build Status](https://travis-ci.org/icebob/fakerator.svg?branch=master)](https://travis-ci.org/icebob/fakerator)
[![Coverage Status](https://coveralls.io/repos/github/icebob/fakerator/badge.svg?branch=master)](https://coveralls.io/github/icebob/fakerator?branch=master)

[![Dependency Status](https://david-dm.org/icebob/fakerator.svg)](https://david-dm.org/icebob/fakerator)
[![devDependency Status](https://david-dm.org/icebob/fakerator/dev-status.svg)](https://david-dm.org/icebob/fakerator#info=devDependencies)
[![Downloads](https://img.shields.io/github/downloads/icebob/fakerator/total.svg)](https://www.npmjs.com/package/fakerator)

## Demo
[JSFiddle test page](https://jsfiddle.net/icebob/wngcbpkq/)

[Tonic demo](https://tonicdev.com/icebob/574c36fc8e1b8e130072a138)

## Install

### Bower

```bash
$ bower install fakerator
```

### NodeJS

```bash
$ npm install fakerator
```

### Manual
Download the package and use the `dist/fakerator.js` or the `dist/fakerator.min.js` file in your project.

## Usage
### Browser
```html
<script src="https://rawgit.com/icebob/fakerator/master/dist/fakerator.js"></script>

<script>
  var fakerator = new Fakerator();
  var name = fakerator.names.name();
  var user = fakerator.entity.user();
</script>
```

### NodeJS
```js
var Fakerator = require("fakerator");
var fakerator = new Fakerator("de-DE");
var name = fakerator.names.name();
// Result: 'Dr. Marcus Drechsler'
```

## Seeding
The library uses the [Mersenne Twister](http://www.math.sci.hiroshima-u.ac.jp/~m-mat/MT/emt.html) random number generator, so you can set seed for random.
```js
fakerator.seed(5567832);
```
or
```js
fakerator.seed(new Date().valueOf());
```

## Localization
The library supports localizations. You can set the locale code in contructor.

### Usage
```js
  // Use default
  var fakerator = new Fakerator();
  console.log(fakerator.names.name());
  // Floyd Corkery
```

```js
  // Use german
  var fakerator = new Fakerator("de-DE");
  console.log(fakerator.names.name());
  // Hassan vom Kumbernuss
```

```js
  // Use russia
  var fakerator = new Fakerator("ru-RU");
  console.log(fakerator.names.name());
  // Альберт Валентинович Архипов
```

### Available localizations:
Code      | Language/Country      | Usage                   | Creator/Source
--------- | --------------------- | ----------------------- | --------------
default   | English (default)     | `new Fakerator();`        | [faker.js](https://github.com/Marak/faker.js)
de-DE     | German                | `new Fakerator("de-DE");` | [faker.js](https://github.com/Marak/faker.js)
es-ES     | Spanish               | `new Fakerator("es-ES");` | [faker.js](https://github.com/Marak/faker.js)
fr-FR     | French                | `new Fakerator("fr-FR");` | [faker.js](https://github.com/Marak/faker.js)
hu-HU     | Hungarian             | `new Fakerator("hu-HU");` | [Icebob](https://github.com/icebob)
it-IT     | Italic                | `new Fakerator("it-IT");` | [faker.js](https://github.com/Marak/faker.js)
pl-PL     | Polish                | `new Fakerator("pl-PL");` | [faker.js](https://github.com/Marak/faker.js)
ru-RU     | Russia                | `new Fakerator("ru-RU");` | [faker.js](https://github.com/Marak/faker.js)

## Generators
TODO

### names
Function                          | Description                     | Sample result
--------------------------------- | ------------------------------- | -----------------------
`fakerator.names.name()`          | Generate a full name            | "Dr. Sheryl Gleichner"
`fakerator.names.nameM()`         | Generate a male full name (*)   | "Bruce Weber"
`fakerator.names.nameF()`         | Generate a female full name (*) | "Juanita Daniel"
`fakerator.names.firstName()`     | Generate a first name           | "Marco"
`fakerator.names.firstNameM()`    | Generate a male first name (*)  | "Bruce"
`fakerator.names.firstNameF()`    | Generate a female first name (*)| "Kelly"
`fakerator.names.lastName()`      | Generate a last name            | "Reilly"
`fakerator.names.lastNameM()`     | Generate a male last name (*)   | "Collier"
`fakerator.names.lastNameF()`     | Generate a female last name (*) | "Moore"
`fakerator.names.prefix()`        | Generate a name prefix name     | "Mr."
`fakerator.names.suffix()`        | Generate a name suffix          | "MD"
(*) - if localization supported
 
### address
### names
Function                          | Description                     | Sample result
--------------------------------- | ------------------------------- | -----------------------
`fakerator.address.country()`         | Give a country name         | "Romania"
`fakerator.address.countryCode()`     | Give a country code         | "RO"
`fakerator.address.countryAndCode()`  | Give a country object       | `{ code: "RO", name: "Romania" }`
`fakerator.address.city()`            | Generate a city name        | "Merlestad"
`fakerator.address.street()`          | Generate a street address   | "96214 Annette Radial Apt. 543"
`fakerator.address.streetName()`      | Generate a street name      | "Gabriel Islands"
`fakerator.address.buildingNumber()`  | Generate a building number  | "196"
`fakerator.address.postCode()`        | Generate a post code        | "54360-6405"
`fakerator.address.geoLocation()`     | Generate a geolocation      | `{ latitude: 40.4233, longitude: -131.9741 }` 
`fakerator.address.altitude()`        | Generate an altitude        | 1180

### phone
TODO

### company
TODO

### internet
TODO

### lorem
TODO

### date
TODO

### misc
TODO

### entity
TODO

## Templates
You can also generate fake data with templates:

```js
fakerator.populate("#{names.name}")
// Ross Hansen
```

```js
fakerator.populate("#{address.street}")
// 0662 Ferry Drive
```

```js
fakerator.populate("Hi, my name is #{names.name}. I was born in #{address.city}, #{address.country}. I am #{date.age} years old.")
// Hi, my name is Mrs. Rufus Shanahan. I was born in Hilpertton, Denmark. I am 44 years old.
```

### Replace symbols
The populate replace `#` symbol to a random number and `?` symbol to a random letter.
```js
fakerator.populate("#{names.firstName}-###-???")
// Mandy-802-oqs
```


## TODO
- [ ] use localized country list

## Contribution
Please send pull requests improving the usage and fixing bugs, improving documentation and providing better examples, or providing some testing, because these things are important.

## License
fakerator is available under the [MIT license](https://tldrlegal.com/license/mit-license).

## Contact

Copyright (C) 2016 Icebob

[![@icebob](https://img.shields.io/badge/github-icebob-green.svg)](https://github.com/icebob) [![@icebob](https://img.shields.io/badge/twitter-Icebobcsi-blue.svg)](https://twitter.com/Icebobcsi)
