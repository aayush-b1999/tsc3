"use strict";
// Generics
const str = ['Hi its me'];
str[0].split(' ');
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Hi it's me");
    }, 2000);
});
promise.then((data) => {
    console.log(data);
});
// creating own generics function
function merge(a, b) {
    return Object.assign(a, b);
}
const mergeObj = merge({ name: 'John' }, { age: 44 });
console.log(mergeObj);
//constraint generics // forcing function to take only objects
function mergeObject(a, b) {
    return Object.assign(a, b);
}
// const ret=mergeObject({age:100},123); // this will not work
const ret = mergeObject({ age: 32 }, { name: 'Naruto' });
function countAndDescribe(a) {
    let descriptionText = 'Got no value';
    if (a.length === 1) {
        descriptionText = 'Got 1 element';
    }
    else if (a.length > 1) {
        descriptionText = 'Got ' + a.length + ' elements';
    }
    return [a, descriptionText];
}
console.log(countAndDescribe(['Sports', 'Cooking']));
// keyof constraint
function extractAndConvert(a, b) {
    return a[b];
}
console.log(extractAndConvert({ name: 'Naruto' }, 'name'));
// generic classes- problem with object as they are refrence and they must be deleted by storing object
class DataStorage {
    constructor() {
        this.data = [];
    }
    addItem(a) {
        this.data.push(a);
    }
    removeItem(a) {
        if (this.data.indexOf(a) === -1) {
            return;
        }
        this.data.splice(this.data.indexOf(a), 1);
    }
    printData() {
        console.log(...this.data);
    }
}
const numberStore = new DataStorage();
numberStore.addItem(123);
numberStore.addItem(1234);
numberStore.addItem(12345);
numberStore.addItem(123456);
numberStore.printData();
numberStore.removeItem(1234);
numberStore.printData();
function createCourseGoal(title, description, completeUntil) {
    let obj = {};
    obj.title = title;
    obj.description = description;
    obj.completeUntil = completeUntil;
    return obj;
}
const naam = ['John', 'Dwayne'];
// naam.push('Edge'); // will not work as naam is readonly
