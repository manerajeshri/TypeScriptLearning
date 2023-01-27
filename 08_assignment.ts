abstract class Car{
    Wheel(): string {
        return "4 Wheelar";
    }
    CheckAC() : string {
        return "AC is available "
    }
    CallFacility() : string{
        return "Call facility Supported"
    }
    abstract Price() : number;
    abstract getTotalSeats(): number;
    abstract Color() : string;
    abstract supportsGPS() : string;
    }

    class Toyota extends Car{
        supportsGPS(): string {
            return "GPS: Not Supported"
        }
        Price(): number {
            return 1000000;
        }
        getTotalSeats(): number {
            return 5;
        }
        Color(): string {
            return "white";
        }

    }

    class Hundai extends Car {
        supportsGPS(): string {
            return "Gps: Supported"
        }
        Price(): number {
            return 900000;
        }
        getTotalSeats(): number {
            return 7;
        }
        Color(): string {
            return "gray";
        }

    }

let toyota = new Toyota(); // creating new object 
let hundai = new Hundai();

console.log(`Is Toyota Support GPS?`,toyota.supportsGPS());
console.log(`Is Hundai Support GPS?`,hundai.supportsGPS());
    

    