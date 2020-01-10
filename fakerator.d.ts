declare module 'fakerator' {

  export interface IRandomStringOptions {
    min?: number,
    max?: number
  }

  export type ITimesOptions = IRandomStringOptions;

  export interface ICountryAndCode {
    code: string,
    name: string
  }

  export interface ILatitudeAndLongitude {
    latitude: number,
    longitude: number
  }

  export enum LoremPixelCategories {
    Abstract = 'abstract',
    Animals = 'animals',
    Business = 'business',
    Cats = 'cats',
    City = 'city',
    Food = 'food',
    Nightlife = 'nightlife',
    Fashion = 'fashion',
    People = 'people',
    Nature = 'nature',
    Sports = 'sports',
    Technics = 'technics',
    Transport = 'transport',
    Technics = 'flickr',
    ColorImage = 'color',
    GrayImage = 'gray'
  }

  export interface IUser {
    "firstName": string,
    "lastName": string,
    "userName": string,
    "password": string,
    "email": string,
    "phone": string,
    "dob": string,
    "website": string,
    "ip": string,
    "avatar": string,
    "gravatar": string,
    "address": IAddress,
    "status": boolean
  }

  export interface ICompany {
    "name": string,
    "email": string,
    "phone": string,
    "website": string,
    "ip": string,
    "address": IAddress
  }

  export interface IAddress {
    "country": string,
    "countryCode": string,
    "state": string,
    "city": string,
    "street": string,
    "zip": string,
    "geo": ILatitudeAndLongitude
  }

  export interface IPost {
    "title": string,
    "keywords": Array<string>,
    "created": string,
    "content": string
  }

  class fakeratorRandom {
    /**
     * It starts from 0
     * Sample: 0
     * @param max Max number function will select
     * @returns number
     */
    number(max: number): number;

    /**
     * Random number selection between min and max. Min and max values are included.
     * Sample: 0
     * @param min Min number function will select
     * @param max Max number function will select
     * @returns number
     */
    number(min: number, max: number): number;

    /**
     * Random number selection between min and max. Min and max values are included.
     * Sample: 45.2
     * @param min Min number function will select
     * @param max Max number function will select
     * @param precision Can generate floating number if you define this parameter. Note: Do not use 0
     * @returns number
     */
    number(min: number, max: number, precision: number = 1): number;


    /**
     * Random boolean value.
     * Sample: true
     * @returns boolean
     */
    boolean(): boolean;

    /**
     * Random boolean value if it below likelyhood
     * Sample: true
     * @param likelyhood Returns true if selected random value between 0 and 100 below this parameter.
     * @returns boolean
     */
    boolean(likelyhood: number = 50): boolean;


    /**
     * Random 9 character string
     * Sample:
     * @returns string
     */
    digit(): string;


    /**
     * Random hexedemical string
     * @returns string
     */
    hex(): string;

    /**
     * Random hexedemical string
     * @param length Length of the generated string
     * @returns string
     */
    hex(length: number = 1): string;

    /**
     * Just one letter.
     */
    letter(): string;

    string(): string;
    string(length: number): string;
    string(options: IRandomStringOptions): string;

    arrayElement<T>(array: Array<T>): T;

    objectElement<returnType>(object: object): returnType;

    masked(format: string): string;
  }

  class fakeratorNames {
    /**
     * Dr. Sheryl Gleichner
     */
    name(): string;

    /**
     * Bruce Weber
     */
    nameM(): string;

    /**
     * Juanita Daniel
     */
    nameF(): string;

    /**
     * Marco
     */
    firstName(): string;

    /**
     * Bruce
     */
    firstNameM(): string;

    /**
     * Kelly
     */
    firstNameF(): string;

    /**
     * Reilly
     */
    lastName(): string;

    /**
     * Collier
     */
    lastNameM(): string;

    /**
     * Moore
     */
    lastNameF(): string;

    /**
     * Mr.
     */
    prefix(): string;

    /**
     * MD
     */
    suffix(): string;
  }

  class fakeratorAddress {
    /**
     * Romania
     */
    country(): string;

    /**
     * RO
     */
    countryCode(): string;

    /**
     * { code: "RO", name: "Romania" }
     */
    countryAndCode(): ICountryAndCode;

    /**
     * Merlestad
     */
    city(): string;

    /**
     * 96214 Annette Radial Apt. 543
     */
    street(): string;

    /**
     * Gabriel Islands
     */
    streetName(): string;

    /**
     * 196
     */
    buildingNumber(): string;

    /**
     * 54360-6405
     */
    postCode(): string;

    /**
     * { latitude: 40.4233, longitude: -131.9741 }
     */
    geoLocation(): ILatitudeAndLongitude;

    /**
     * 1180
     */
    altitude(): number;
  }

  class fakeratorPhone {
    /**
     * (640) 552-0763
     */
    number(): string;
  }

  class fakeratorCompany {
    /**
     * Weber, Gleichner and Kertzmann Inc.
     */
    name(): string;

    /**
     * LLC
     */
    suffix(): string;
  }

  class fakeratorInternet {
    /**
     * kelly.moore14
     */
    userName(): string;

    /**
     * Generate a username based an existing name
     * Sample: johndoe19
     * @param firstName First name
     * @param lastName Last Name
     */
    userName(firstName: string, lastName: string): string;

    /**
     * Generates a password
     */
    password(): string;

    /**
     * Generates a password
     */
    password(length: number): string;

    password(length: number, memorable: boolean): string;

    password(length: number, memorable: boolean, pattern: string): string;

    password(length: number, memorable: boolean, pattern: string, prefix: string): string;

    /**
     * merle-gleichner.net
     */
    domain(): string;

    /**
     * http://ella-parisian.com
     */
    url(): string;

    url(isHttps: boolean): string;

    url(isHttps: boolean, hasWWW: boolean): string;

    /**
     * kelly.moore@gmail.com
     */
    email(): string;

    /**
     * Generate an email address from an existing name
     * Sample: john.doe@hotmail.com
     * @param firstName First name
     * @param lastName Last name
     */
    email(firstName: string, lastName: string): string;

    email(firstName: string, lastName: string, domain: string): string;


    /**
     * http://lorempixel.com/640/480
     */
    image(): string;

    /**
     * http://lorempixel.com/640/480
     */
    image(width: number, height: number): string;

    /**
     * http://lorempixel.com/640/480/sports
     */
    image(width: number, height: number, category: LoremPixelCategories): string;


    /**
     * 65:a1:a6:18:94:0b
     */
    mac(): string;


    /**
     * 69.45.112.94
     */
    ip(): string;


    /**
     * b2e9:4275:95a9:65a1:a618:940b:a6ce:adb6
     */
    ipv6(): string;


    /**
     * Generates a hexedemical color string
     * b76f49
     */
    color(): string;

    /**
     * Give an avatar link (uifaces.com)
     * https://s3.amazonaws.com/uifaces/faces/twitter/snowwrite/128.jpg
     */
    avatar(): string;


    /**
     * Generate a gravatar link
     * https://www.gravatar.com/avatar/a91004b566f80271f0a3577f71d43cd4
     */
    gravatar(): string;

    /**
     * Generate a gravatar link from an email address
     * https://www.gravatar.com/avatar/a91004b566f80271f0a3577f71d43cd4
     */
    gravatar(email: string): string;
  }

  class fakeratorLorem {
    /**
     * lorem
     */
    word(): string;

    /**
     * Libero similique quam voluptas soluta.
     */
    sentence(): string;

    /**
     * Ut velit enim vel. Unde aut sint possimus velit commodi numquam. Autem expedita dignissimos est qui consequatur et delectus. Et qui necessitatibus voluptas quam. Dicta temporibus animi optio tempora aperiam repudiandae beatae. Placeat quo voluptatibus neque repellendus dolorem.
     */
    paragraph(): string;
  }

  class fakeratorDate {
    /**
     * Asia/Bangkok
     */
    timezone(): string;

    past(years: number, refDate: Date): Date;

    future(years: number, refDate: Date): Date;

    between(from: Date, to: Date): Date;

    recent(days): Date;

    age(min: number, max: number): number;

    month(): string;

    weekday(): string;

    weekdayShort(): string;

    weekdayMin(): string;
  }

  class fakeratorMisc {
    uuid(): string;
  }

  class fakeratorEntity {
    user(): IUser;

    user(sex: 'M' | 'F'): IUser;

    address(): IAddress;

    company(): ICompany;

    post(): IPost;
  }

  class fakerator {
    constructor(localeID: string = 'default');

    seed(newSeed: string = 'default');

    capitalize(textWillBeCapitalized: string): string;

    slugify(textWillBeSlugified: string): string;

    replaceSymbols(format: string): string;
    replaceSymbols(format: string, numberSymbol: string = "#", alphaSymbol: string = "\\?"): string;

    shuffle(textWillBeShuffled: string): string;
    shuffle<T>(arrayWillBeShuffled: Array<T>): Array<T>;

    populate(format: string, ...args: Array<any>): string;

    times(functionWillRepeat: Function, nTimes: number, ...args: Array<any>): Array<any>;
    times(functionWillRepeat: Function, options: ITimesOptions, ...args: Array<any>): Array<any>;

    utimes(functionWillRepeat: Function, nTimes: number, ...args: Array<any>): Array<any>;
    utimes(functionWillRepeat: Function, options: ITimesOptions, ...args: Array<any>): Array<any>;

    generate(functionWillBeUsedForGeneration: Function, ...args: Array<any>): string;

    public random = new fakeratorRandom();

    public names = new fakeratorNames();

    public address = new fakeratorAddress();

    public phone = new fakeratorPhone();

    public company = new fakeratorCompany();

    public internet = new fakeratorInternet();

    public lorem = new fakeratorLorem();

    public date = new fakeratorDate();

    public misc = new fakeratorMisc();

    public entity = new fakeratorEntity();
  }

  export default new fakerator();
}
