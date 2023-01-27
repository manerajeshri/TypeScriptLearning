// 08_interface.ts
var objProduct1 = {
    id: 101,
    name: "iphone",
    description: "Its awsome",
    price: 100000
};
var objProduct2 = {
    id: 11,
    name: "red mi",
    description: "phone"
};
var product = /** @class */ (function () {
    function product() {
    }
    return product;
}());
var Excle = /** @class */ (function () {
    function Excle() {
    }
    Excle.prototype.print = function () {
        console.log("Excel");
    };
    return Excle;
}());
var Doc = /** @class */ (function () {
    function Doc() {
    }
    Doc.prototype.print = function () {
        console.log("Doc");
    };
    return Doc;
}());
var PDF = /** @class */ (function () {
    function PDF() {
    }
    PDF.prototype.print = function () {
        console.log("PDF");
    };
    return PDF;
}());
var objEXCEL = new Excle();
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
