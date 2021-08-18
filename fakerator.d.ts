declare module 'fakerator' {

    export interface RandomStringOptions {
        min?: number;
        max?: number;
    }

    export type TimesOptions = RandomStringOptions;

    export interface CountryAndCode {
        code: string;
        name: string;
    }

    export interface LatitudeAndLongitude {
        latitude: number;
        longitude: number;
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

    export interface User {
        "firstName": string;
        "lastName": string;
        "userName": string;
        "password": string;
        "email": string;
        "phone": string;
        "dob": string;
        "website": string;
        "ip": string;
        "avatar": string;
        "gravatar": string;
        "address": Address;
        "status": boolean;
    }

    export interface Company {
        "name": string;
        "email": string;
        "phone": string;
        "website": string;
        "ip": string;
        "address": Address;
    }

    export interface Address {
        "country": string;
        "countryCode": string;
        "state": string;
        "city": string;
        "street": string;
        "zip": string;
        "geo": LatitudeAndLongitude;
    }

    export interface Post {
        "title": string;
        "keywords": Array<string>;
        "created": string;
        "content": string;
    }

    class FakeratorRandom {
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
        string(options: RandomStringOptions): string;
    
        arrayElement<T>(array: Array<T>): T;
    
        objectElement<returnType>(object: object): returnType;
    
        masked(format: string): string;
    }

    class FakeratorNames {
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

    class FakeratorAddress {
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
        countryAndCode(): CountryAndCode;
    
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
        geoLocation(): LatitudeAndLongitude;
    
        /**
         * 1180
         */
        altitude(): number;
    }

    class FakeratorPhone {
        /**
       * (640) 552-0763
       */
        number(): string;
    }

    class FakeratorCompany {
        /**
         * Weber, Gleichner and Kertzmann Inc.
         */
        name(): string;
    
        /**
         * LLC
         */
        suffix(): string;
    }

    class FakeratorInternet {
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

    class FakeratorLorem {
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

    class FakeratorDate {
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

    class FakeratorMisc {
        uuid(): string;
    }

    class FakeratorEntity {
        user(): User;
    
        user(sex: 'M' | 'F'): User;
    
        address(): Address;
    
        company(): Company;
    
        post(): Post;
    }
    class Fakerator {
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
    
        public random = new FakeratorRandom();
    
        public names = new FakeratorNames();
    
        public address = new FakeratorAddress();
    
        public phone = new FakeratorPhone();
    
        public company = new FakeratorCompany();
    
        public internet = new FakeratorInternet();
    
        public lorem = new FakeratorLorem();
    
        public date = new FakeratorDate();
    
        public misc = new FakeratorMisc();
    
        public entity = new FakeratorEntity();
    }
    export default (localeID = 'default') => new Fakerator(localeID);
}
