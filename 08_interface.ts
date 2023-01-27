// 08_interface.ts

interface IProduct {
    id :number;
    name : string;
    description:string;
    price ?:number; // using ?: 
}

var objProduct1 : IProduct = {
    id : 101,
    name : "iphone",
    description:"Its awsome",
    price:100000
}

var objProduct2 : IProduct = {
    id: 11,
    name: "red mi",
    description: "phone"
}

class product implements IProduct {
    id: number;
    name: string;
    description: string;
    price?: number | undefined;

}

interface Iprint {
    print():void;
}

class Excle implements Iprint {
    print(): void {
        console.log("Excel");   
    }
}
class Doc implements Iprint {
    print(): void {
        console.log("Doc");   
    }
}
class PDF implements Iprint {
    print(): void {
        console.log("PDF");   
    }
}

let objEXCEL = new Excle ();
objEXCEL.print();

//======================================== sir

// interface IProduct {
//     id: number;
//     name: string;
//     description: string;
//     price?: number;
//     display() : number; // only declaration 
// }




// class Product implements IProduct {
//     id: number;
//     name: string;
//     description: string;
//     price?: number | undefined;
//     display(): number {
//         throw new Error("Method not implemented.");
//     }

// }


// // abstarct class ad interface 

// // abstarct class have abstarct method or non abstarct method.
// // we have only abstarct method.


// // 

// interface IPrint {
//     print():void;
// }

// class EXCEL implements IPrint {
//     print(): void {
//        console.log('EXCEL');
//     }

// }

// class DOC implements IPrint {
//     print(): void {
//        console.log("DOC");
//     }

// }

// class PDF implements IPrint {
//     print(): void {
//         console.log("PDF");
//     }

// }

// let objEXCEL = new EXCEL();
// objEXCEL.print();
