[![](https://raw.githubusercontent.com/icebob/fakerator/gh-pages/binary-1327501.jpg)](https://github.com/icebob/fakerator)
# fakerator [![NPM version](https://img.shields.io/npm/v/fakerator.svg)](https://www.npmjs.com/package/fakerator)
> Random fake data generator with localization

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/939fc8b138a64c65b9827543e30dab39)](https://www.codacy.com/app/mereg-norbert/fakerator?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=icebob/fakerator&amp;utm_campaign=Badge_Grade)
[![Build Status](https://travis-ci.org/icebob/fakerator.svg?branch=master)](https://travis-ci.org/icebob/fakerator)
[![Coverage Status](https://coveralls.io/repos/github/icebob/fakerator/badge.svg?branch=master)](https://coveralls.io/github/icebob/fakerator?branch=master)

[![Dependency Status](https://david-dm.org/icebob/fakerator.svg)](https://david-dm.org/icebob/fakerator)
[![devDependency Status](https://david-dm.org/icebob/fakerator/dev-status.svg)](https://david-dm.org/icebob/fakerator#info=devDependencies)
[![Downloads](https://img.shields.io/npm/dt/fakerator.svg)](https://www.npmjs.com/package/fakerator)

fakerator was inspired by and has used data definitions from [Marak's faker.js library](https://github.com/Marak/faker.js)

**If you like my work, please [donate](https://www.paypal.me/meregnorbert). Thank you!**

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
  var fakerator = Fakerator();
  var name = fakerator.names.name();
  var user = fakerator.entity.user();
</script>
```

### NodeJS
```js
var Fakerator = require("fakerator");
var fakerator = Fakerator("de-DE");
var name = fakerator.names.name();
// Result: 'Dr. Marcus Drechsler'
```

Shortly
```js
var fakerator = require("fakerator")("hu-HU");
var name = fakerator.names.name();
// Result: 'Fülöp Magdolna'
```

Or load a specific locale

```js
var fakerator = require("fakerator/locales/de-DE")();
var name = fakerator.names.name();
// Result: 'Dr. Marcus Drechsler'
```


## Seeding
The library uses the [Mersenne Twister](http://www.math.sci.hiroshima-u.ac.jp/~m-mat/MT/emt.html) pseudorandom number generator, so set seed value, if you want to get a repeatable random sequence:
```js
fakerator.seed(5567832);
```

## Random
Generate random values or select a random element from array.

Function                           | Description                 | Sample result
-----------------------------------| --------------------------- | -----------------------
`fakerator.random.boolean()`                    | Generate a boolean value                              | true
`fakerator.random.boolean(likelihoodPercent)`   | Generate a boolean value based a likelihood value.    | false
`fakerator.random.number(max)`                  | Generate a number value between 0 and max value       |  87
`fakerator.random.number(min, max)`             | Generate a number value between min and max           |  54
`fakerator.random.digit()`                      | Generate a digit (0..9)                               | 5
`fakerator.random.letter()`                     | Generate a letter (a..z)                              | "h"
`fakerator.random.arrayElement(array)`          | Give a random element from the array                  |
`fakerator.random.objectElement(obj)`           | Give a random `{ key: value }` from the object
`fakerator.random.masked(mask)`                 | Generate a masked string ( a - lowercase letter, A - uppercase letter, 9 - digit, * - letter or digit |  "aaa-AAA_999:*" -> "aqa-RPG_932:6"
`fakerator.random.hex(length)`                  | Generate a hexadecimal number                         | "7950a0b9"
`fakerator.random.string(length)`               | Generate a random string                              | "dulgecbhrsa"


## Localization
The library supports localizations. You can set the locale code in constructor.

### Usage
```js
  // Use default (English) localization
  var fakerator = Fakerator();
  console.log(fakerator.names.name());
  // Floyd Corkery
```

```js
  // Use german
  var fakerator = Fakerator("de-DE");
  console.log(fakerator.names.name());
  // Hassan vom Kumbernuss
```

```js
  // Use russian
  var fakerator = Fakerator("ru-RU");
  console.log(fakerator.names.name());
  // Альберт Валентинович Архипов
```

In production, you can load only a specific locale:

```js
  // Use french
  var fakeratorFR = require("fakerator/locales/fr-FR")();
  console.log(fakeratorFR.names.name());
  // Dufour Camille
```


### Available localizations:
Code      | Language/Country      | Usage                     | Creator/Source
--------- | --------------------- | ------------------------- | --------------
default   | English (default)     | `Fakerator();`        | [faker.js](https://github.com/Marak/faker.js)
cs-CZ     | Czech                 | `Fakerator("cs-CZ");` | [zpiman](https://github.com/zpiman)
de-DE     | German                | `Fakerator("de-DE");` | [faker.js](https://github.com/Marak/faker.js)
en-AU     | English (Australia)   | `Fakerator("en-AU");` | [faker.js](https://github.com/Marak/faker.js)
en-CA     | English (Canada)      | `Fakerator("en-CA");` | [faker.js](https://github.com/Marak/faker.js)
es-ES     | Spanish               | `Fakerator("es-ES");` | [faker.js](https://github.com/Marak/faker.js)
fr-FR     | French                | `Fakerator("fr-FR");` | [faker.js](https://github.com/Marak/faker.js)
hu-HU     | Hungarian             | `Fakerator("hu-HU");` | [Icebob](https://github.com/icebob)
it-IT     | Italian               | `Fakerator("it-IT");` | [faker.js](https://github.com/Marak/faker.js)
nb-NO     | Norwegian             | `Fakerator("nb-NO");` | [faker.js](https://github.com/Marak/faker.js)
pl-PL     | Polish                | `Fakerator("pl-PL");` | [faker.js](https://github.com/Marak/faker.js)
pt-BR     | Brazilian Portuguese  | `Fakerator("pt-BR");` | [Filipe Forattini](https://github.com/filipeforattini)
ru-RU     | Russian               | `Fakerator("ru-RU");` | [faker.js](https://github.com/Marak/faker.js)
sk-SK     | Slovakian             | `Fakerator("sk-SK");` | [faker.js](https://github.com/Marak/faker.js)
sv-SE     | Swedish               | `Fakerator("sv-SE");` | [faker.js](https://github.com/Marak/faker.js)

### Custom locale
Please read this [how to add a new locale](LOCALES.md)

## Generators
Use this functions to generate fake random data

### Names
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
(*) - if localization support
 
### Address
Function                              | Description                 | Sample result
------------------------------------- | --------------------------- | -----------------------
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

### Phone
Function                           | Description                 | Sample result
-----------------------------------| --------------------------- | -----------------------
`fakerator.phone.number()`         | Generate a phone number     | "(640) 552-0763"

### Company
Function                           | Description                 | Sample result
-----------------------------------| --------------------------- | -----------------------
`fakerator.company.name()`         | Generate a company name     | "Weber, Gleichner and Kertzmann Inc."
`fakerator.company.suffix()`       | Generate a company suffix   | "LLC"

### Internet data
Function                            | Description                 | Sample result
----------------------------------- | --------------------------- | -----------------------
`fakerator.internet.userName()`     | Generate a username             | "kelly.moore14"
`fakerator.internet.userName(firstName, lastName)`     | Generate a username based an existing name | "johndoe19"
`fakerator.internet.password(length)` | Generate a password             | 
`fakerator.internet.domain()`       | Generate a domain name      | "merle-gleichner.net"
`fakerator.internet.url()`       | Generate an url      | "http://ella-parisian.com"
`fakerator.internet.email()`       | Generate an email address      | "kelly.moore@gmail.com"
`fakerator.internet.email(firstName, lastName)`       | Generate an email address from an existing name      | "john.doe@hotmail.com"
`fakerator.internet.image(width, height, category)`       | Generate a lorem image      | "http://lorempixel.com/640/480"
`fakerator.internet.mac()`       | Generate a MAC address      | "65:a1:a6:18:94:0b"
`fakerator.internet.ip()`       | Generate an IP v4 address      | "69.45.112.94"
`fakerator.internet.ipv6()`       | Generate an IP v6 address      | "b2e9:4275:95a9:65a1:a618:940b:a6ce:adb6"
`fakerator.internet.color()`       | Generate a color      | "b76f49"
`fakerator.internet.avatar()`       | Give an avatar link (uifaces.com) | [Sample](https://s3.amazonaws.com/uifaces/faces/twitter/snowwrite/128.jpg)
`fakerator.internet.gravatar()`       | Generate a gravatar link      | [Sample](https://www.gravatar.com/avatar/a91004b566f80271f0a3577f71d43cd4)
`fakerator.internet.gravatar(email)`       | Generate a gravatar link from an email address      | [Sample](https://www.gravatar.com/avatar/e13743a7f1db7f4246badd6fd6ff54ff)

### Lorem
Function                            | Description                 | Sample result
----------------------------------- | --------------------------- | -----------------------
`fakerator.lorem.word()`            | Give a lorem word           | "dolores"
`fakerator.lorem.sentence()`        | Generate a lorem sentence   | "Libero similique quam voluptas soluta."
`fakerator.lorem.paragraph()`       | Give a lorem paragraph      | "Ut velit enim vel. Unde aut sint possimus velit commodi numquam. Autem expedita dignissimos est qui consequatur et delectus. Et qui necessitatibus voluptas quam. Dicta temporibus animi optio tempora aperiam repudiandae beatae. Placeat quo voluptatibus neque repellendus dolorem."

### Date & time
Function                            | Description                 | Sample result
----------------------------------- | --------------------------- | -----------------------
`fakerator.date.timezone()`         | Give a timezone                     | "Asia/Bangkok"
`fakerator.date.past(years, refDate)`    | Generate a date in the past         | Date
`fakerator.date.future(years, refDate)`  | Generate a date in the future       | Date
`fakerator.date.between(from, to)`       | Generate a date between two dates   | Date
`fakerator.date.recent(days)`       | Generate a date in recent few days  | Date
`fakerator.date.age(min, max)`      | Generate an age number              | 26
`fakerator.date.month()`            | Give a month name                   | "September"
`fakerator.date.weekday()`          | Give a weekday name                 | "Sunday"
`fakerator.date.weekdayShort()`     | Give a short weekday name           | "Fri"
`fakerator.date.weekdayMin()`       | Give a min weekday name             | "Su"

### Miscellaneous
Function                            | Description                 | Sample result
----------------------------------- | --------------------------- | -----------------------
`fakerator.misc.uuid()`             | Generate an [UUID](https://github.com/defunctzombie/node-uuid)           | "e26717ad-1513-43c5-b7de-2849521fa195"

### Entities
You can generate complex entities

#### User
```js
fakerator.entity.user()
```
Result:
```js
{
    "firstName": "Ashley",
    "lastName": "Kautzer",
    "userName": "ashley38",
    "password": "yuzasimima",
    "email": "ashleykautzer74@hotmail.com",
    "phone": "1-485-841-6009",
    "dob": "1939-11-22T01:15:16.735Z",
    "website": "http://natalie-walker.info",
    "ip": "202.26.104.4",
    "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/jakemoore/128.jpg",
    "gravatar": "https://www.gravatar.com/avatar/7875d665c96e5e388aa4074697cab0a0",
    "address": {
        "country": "Northern Mariana Islands",
        "countryCode": "MP",
        "state": "Michigan",
        "city": "New Jamie",
        "street": "1730 Abbott Views Apt. 460",
        "zip": "77988",
        "geo": {
            "latitude": -41.5878,
            "longitude": 34.266400000000004
        }
    },
    "status": false
}
```
You can set genre of user with first parameter.
```js
// F - female, M - male
fakerator.entity.user("F");
```

#### Address
```js
fakerator.entity.address()
```
Result:
```js
{
    "country": "Bulgaria",
    "countryCode": "BG",
    "state": "Indiana",
    "city": "North Michele",
    "street": "06169 Beer Villages Suite 302",
    "zip": "20896",
    "geo": {
        "latitude": -9.275499999999994,
        "longitude": 92.53280000000001
    }
}
```

#### Company
```js
fakerator.entity.company()
```
Result:
```js
{
    "name": "Cormier, Murphy and Turcotte Ltd.",
    "email": "cormier-murphy-and-turcotte-ltd.90@hotmail.com",
    "phone": "044.708.8876 x834",
    "website": "https://olgabeatty.info",
    "ip": "54.65.201.35",
    "address": {
        "country": "Caribbean Netherlands",
        "countryCode": "BQ",
        "state": "Kansas",
        "city": "East Ronnie",
        "street": "81019 Cormier Mall",
        "zip": "11474-0882",
        "geo": {
            "latitude": 1.6444000000000045,
            "longitude": 107.97910000000002
        }
    }
}
```

#### Blog post
```js
fakerator.entity.post()
```
Result:
```js
{
    "title": "Esse excepturi eum id ab aut dolore veritatis et.",
    "keywords": [
        "commodi",
        "odio",
        "sit"
    ],
    "created": "2016-05-25T18:19:46.283Z",
    "content": "Mollitia officiis quam nulla veritatis omnis eius enim quis. Dolorem est reiciendis adipisci. Laboriosam enim saepe sunt nisi. Autem tempora ullam non laborum. Qui dolorem fugiat amet. Eius consectetur ea et minus ipsam et qui unde doloremque.\r\nNihil minima aut. Voluptatibus neque at nulla ut expedita laboriosam. Veniam natus voluptates nulla voluptas impedit cumque qui nihil.\r\nMinus quos in autem facere dolorem quidem rem rerum. Animi quo eaque debitis nam non earum molestiae. Maxime vitae exercitationem doloremque."
}
```

## Times
You can generate array of items with `times` and `utimes` (unique) functions. 
First parameter is the generator function. Second is the length of array. 
> You can pass further parameters, they will be passed to the generator function.

### Usage
```js
// Generate 3 names
fakerator.times(fakerator.names.name, 3);
// [ "Ross Hansen", "Thomas Pfeffer", "Alexis Hauck I" ]

// Generate 5 username with populate where first name must be 'John'
fakerator.times(fakerator.populate, 5, "#{internet.userName}", "John");
// [ 'john.langosh8341', 'john12', 'john.howe5075', 'john_jerde', 'john.grant9923' ]

// Generate 5 number from 1 to 10
fakerator.times(fakerator.random.number, 5, 1, 10);
// [ 10, 8, 1, 8, 5 ]
// Note: 8 is twice!

// Generator 5 UNIQUE number from 1 to 10
fakerator.utimes(fakerator.random.number, 5, 1, 10);
// [ 10, 2, 9, 6, 1 ]
// Note: every number is unique!
```

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


## Contribution
Please send pull requests improving the usage and fixing bugs, improving documentation and providing better examples, or providing some testing, because these things are important.

## License
fakerator is available under the [MIT license](https://tldrlegal.com/license/mit-license).

## Contact

Copyright (C) 2021 Icebob

[![@icebob](https://img.shields.io/badge/github-icebob-green.svg)](https://github.com/icebob) [![@icebob](https://img.shields.io/badge/twitter-Icebobcsi-blue.svg)](https://twitter.com/Icebobcsi)
