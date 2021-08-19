// decorators
function Logger(obj: Function){
    console.log('Logging');
    console.log(obj);
    
}

@Logger
class Aadmi{
    name='Naruto';
    constructor(){
        console.log('Creating class');
    }
}

const pers=new Aadmi();
console.log(pers);

// Decorator factory
function LoggingFactory(a:string){
    console.log('inside factory');
    
    return function(constructor:Function){
        console.log(a);
        console.log(constructor);
        
    }
}

@LoggingFactory('Logging...... stuff up')
class Man{
    name='Naruto';
    constructor(){
        console.log('Creating object...');
    }
}


// Building more useful decorators with multiple decorators
function WithTemplate(template:string,hookId:string) {
    console.log('inside template');
    
    return function(constructor:any) {
        const div=document.getElementById(hookId);
        if(div){
            div.innerHTML=template;
            const pers=new constructor();
            const h1=document.querySelector('h1');
            if(h1){
                h1.innerText=pers.name;
            }
        }
    }
}

@LoggingFactory('Logging lots of stuff')
@WithTemplate('<h1>Person Object</h1>','app')
class Person{
    name='Naruto';
    constructor(){
        console.log('Creating object...');
    }
}

// property decorator
function Log(target:any,property:string|Symbol) {
    console.log("property decoration");
    console.log(target,property);
}

class Product{
    @Log
    title:string;
    private _price:number;
    constructor(a:string,b:number){
        this.title=a;
        this._price=b;
    }
    set setPrice(a:number) {
        if(a>0){
            this._price=a
            return;
        }
        else{
            throw new Error('Invalid value');
        }   
    }
    getPriceWithTax(tax:number){
        return (1+tax)*this._price;
    }
}

// more type of decorators

function Log2(a:any,b:string|Symbol,c:PropertyDescriptor) {
    // setter decorator
    console.log('Setter Getter Decorator');
    
    console.log(a);
    console.log(b);
    console.log(c);
}

function Log3(a:any,b:string|Symbol,c:PropertyDescriptor) {
    console.log('Function decorator');
    console.log(a);
    console.log(b);
    console.log(c);
}

function Log4(a:any,b:string|Symbol,c:number) {
    console.log('Parameter Decorator');
    console.log(a);
    console.log(b);
    console.log(c);
}

console.log('\n\n\n\n');


class Item{
    @Log
    title:string;
    private _price:number;
    constructor(a:string,b:number){
        this.title=a;
        this._price=b;
    }
    @Log2
    set setPrice(a:number) {
        if(a>0){
            this._price=a
            return;
        }
        else{
            throw new Error('Invalid value');
        }   
    }
    @Log3
    getPriceWithTax(@Log4 tax:number){
        return (1+tax)*this._price;
    }
}


