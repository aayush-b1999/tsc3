// Generics
const str:Array<string>=['Hi its me'];
str[0].split(' ');

const promise:Promise<string>=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Hi it's me");
    },2000)
})

promise.then((data)=>{
    console.log(data);
})

// creating own generics function

function merge<T,U>(a:T,b:U){
    return Object.assign(a,b);
}

const mergeObj=merge({name:'John'},{age:44});
console.log(mergeObj);

//constraint generics // forcing function to take only objects
function mergeObject<T extends object,U extends object>(a:T,b:U){
    return Object.assign(a,b);
}

// const ret=mergeObject({age:100},123); // this will not work
const ret=mergeObject({age:32},{name:'Naruto'});

// another generic funcction

interface Lengthy{
    length:number;
}

function countAndDescribe<T extends Lengthy>(a:T):[T,string]{
    let descriptionText='Got no value';
    if(a.length===1){
        descriptionText='Got 1 element';
    }
    else if(a.length>1){
        descriptionText='Got '+ a.length + ' elements';
    }
    return [a,descriptionText];
}

console.log(countAndDescribe(['Sports','Cooking']));

// keyof constraint
function extractAndConvert<T extends object,U extends keyof T>(a:T,b:U){
    return a[b];
}

console.log(extractAndConvert({name:'Naruto'},'name'));

// generic classes- problem with object as they are refrence and they must be deleted by storing object
class DataStorage<T extends number|string|boolean>{
    private data: T[]=[];
    addItem(a:T){
        this.data.push(a);
    }
    removeItem(a:T){
        if(this.data.indexOf(a)===-1){
            return;
        }
        this.data.splice(this.data.indexOf(a),1);
    }
    printData(){
        console.log(...this.data);   
    }
}

const numberStore=new DataStorage<number>();
numberStore.addItem(123);
numberStore.addItem(1234);
numberStore.addItem(12345);
numberStore.addItem(123456);
numberStore.printData();
numberStore.removeItem(1234);
numberStore.printData();

// Generic Utility Types
interface CourseGoal{
    title:string;
    description:string;
    completeUntil:Date
}

function createCourseGoal(title:string,description:string,completeUntil:Date): CourseGoal{
    let obj:Partial<CourseGoal>={};
    obj.title=title;
    obj.description=description;
    obj.completeUntil=completeUntil;
    return obj as CourseGoal;
}

const naam:Readonly<string[]>=['John','Dwayne'];
// naam.push('Edge'); // will not work as naam is readonly








