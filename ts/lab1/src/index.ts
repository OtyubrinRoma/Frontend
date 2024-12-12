const concat = (a: string, b: string, c: string): string => {
    return a.concat(b, c);
}

let SaintPetersburg: number = 52;
let based: string = "Stalker Wiki is best wiki";
const bool: boolean = true;
const bi: bigint = BigInt(666);
const lethimcook: any = "letmehersolo";
let func: (a: string, b: string, c: string) => string = concat;
const id: number | string = 1;
let obj: {name: string, age?: number} = {name: "Microalan", age: 24};

interface Entity {
    id: number;
}

interface toJsonStringify extends Entity {
    field1?: number;
    field2?: string;
    field3?: boolean;
}

const data: toJsonStringify = {
    id: 3,
    field1: 52,
    field2: "Saint Petersburg",
    field3: true
}

const jsonString: string = JSON.stringify(data);

console.log(concat("Samara University", " is best place for studying", " (it's rofls, not cook again)"));

console.log(SaintPetersburg);
console.log(based);
console.log(bool);
console.log(bi);
console.log(lethimcook);
console.log(func);
console.log(id);
console.log(obj);

console.log(data);
console.log(jsonString);