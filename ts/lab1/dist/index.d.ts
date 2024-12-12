declare const concat: (a: string, b: string, c: string) => string;
declare let SaintPetersburg: number;
declare let based: string;
declare const bool: boolean;
declare const bi: bigint;
declare const lethimcook: any;
declare let func: (a: string, b: string, c: string) => string;
declare const id: number | string;
declare let obj: {
    name: string;
    age?: number;
};
interface Entity {
    id: number;
}
interface toJsonStringify extends Entity {
    field1?: number;
    field2?: string;
    field3?: boolean;
}
declare const data: toJsonStringify;
declare const jsonString: string;
