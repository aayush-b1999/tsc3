"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
// decorators
function Logger(obj) {
    console.log('Logging');
    console.log(obj);
}
let Aadmi = class Aadmi {
    constructor() {
        this.name = 'Naruto';
        console.log('Creating class');
    }
};
Aadmi = __decorate([
    Logger
], Aadmi);
const pers = new Aadmi();
console.log(pers);
// Decorator factory
function LoggingFactory(a) {
    console.log('inside factory');
    return function (constructor) {
        console.log(a);
        console.log(constructor);
    };
}
let Man = class Man {
    constructor() {
        this.name = 'Naruto';
        console.log('Creating object...');
    }
};
Man = __decorate([
    LoggingFactory('Logging...... stuff up')
], Man);
// Building more useful decorators with multiple decorators
function WithTemplate(template, hookId) {
    console.log('inside template');
    return function (constructor) {
        const div = document.getElementById(hookId);
        if (div) {
            div.innerHTML = template;
            const pers = new constructor();
            const h1 = document.querySelector('h1');
            if (h1) {
                h1.innerText = pers.name;
            }
        }
    };
}
let Person = class Person {
    constructor() {
        this.name = 'Naruto';
        console.log('Creating object...');
    }
};
Person = __decorate([
    LoggingFactory('Logging lots of stuff'),
    WithTemplate('<h1>Person Object</h1>', 'app')
], Person);
// property decorator
function Log(target, property) {
    console.log("property decoration");
    console.log(target, property);
}
class Product {
    constructor(a, b) {
        this.title = a;
        this._price = b;
    }
    set setPrice(a) {
        if (a > 0) {
            this._price = a;
            return;
        }
        else {
            throw new Error('Invalid value');
        }
    }
    getPriceWithTax(tax) {
        return (1 + tax) * this._price;
    }
}
__decorate([
    Log
], Product.prototype, "title", void 0);
// more type of decorators
function Log2(a, b, c) {
    // setter decorator
    console.log('Setter Getter Decorator');
    console.log(a);
    console.log(b);
    console.log(c);
}
function Log3(a, b, c) {
    console.log('Function decorator');
    console.log(a);
    console.log(b);
    console.log(c);
}
function Log4(a, b, c) {
    console.log('Parameter Decorator');
    console.log(a);
    console.log(b);
    console.log(c);
}
console.log('\n\n\n\n');
class Item {
    constructor(a, b) {
        this.title = a;
        this._price = b;
    }
    set setPrice(a) {
        if (a > 0) {
            this._price = a;
            return;
        }
        else {
            throw new Error('Invalid value');
        }
    }
    getPriceWithTax(tax) {
        return (1 + tax) * this._price;
    }
}
__decorate([
    Log
], Item.prototype, "title", void 0);
__decorate([
    Log2
], Item.prototype, "setPrice", null);
__decorate([
    Log3,
    __param(0, Log4)
], Item.prototype, "getPriceWithTax", null);
