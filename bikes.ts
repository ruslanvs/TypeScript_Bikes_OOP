class Bike{
    constructor( public price: number, public max_speed: number, public miles?: number ){
        this.miles = 0;
    }

    displayInfo = () => {
        console.log( this.price, this.max_speed, this.miles );
        return this;
    }
    ride = () => {
        this.miles  += 10;
        console.log( "Riding", this.miles );
        return this;
    }
    reverse = () => {
        if( this.miles >= 5){
            this.miles -= 5;
            console.log( "Reversing", this.miles );
            return this;
        } else {
            console.log( "No more miles to reverse.", this.miles );
            return this;
        }
    }

}

let dono = new Bike( 200, 100 );
let tano = new Bike( 250, 120 );
let qute = new Bike( 280, 150 );


dono.ride().ride().ride().reverse().displayInfo()

tano.ride().ride().reverse().reverse().displayInfo()

qute.reverse().reverse().reverse().displayInfo()