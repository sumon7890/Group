
// var rect = function (width, height) {


//     this.width = width
//     this.height = height


//     var position = {
//         x: 45,
//         y: 66
//     }
//     var printract = function () {
//         console.log('My weight is ' + this.width);
//         console.log('My height is ' + this.height);
//     }.bind(this)


//     // this.getPosition = function () {
//     //     return position
//     // }

//     this.darw = function () {
//         console.log('I am sumon Khan');
//         printract()
//         console.log('Position x = ' + position.x + ' ' + '   Y= ' + position.y);

//     }

//     Object.defineProperty(this, 'position', {
//         get: function () {
//             return position
//         },
//         set: function (value) {
//             position = value
//         }
//     })

// }



// var rect1 = new rect(10, 40)
// rect1.darw()

// rect1.position = {
//     x: 254,
//     y: -950
// }


// console.log(rect1.position)
// function extend(praent, child) {
//     praent.prototype = Object.create(child.prototype)
//     praent.prototype.constructor = praent
// }
// //------------------------------------------------------//

// function Square(width, color) {
//     Shape.call(this, color)
//     Circel.call(),
//         Sumon.call(),
//         this.width = width

// }
// extend(Square, Shape)

// Square.prototype.common = function () {
//     console.log('Hello I am Calling methods')

// }


// var sqr = new Square(5, 'Green, Yellow')
// //----------------------------------------------------//
// function Shape(color, name) {
//     this.color = color
//     this.name = name
// }

// extend(Square, Shape)

// Shape.prototype.common = function () {
//     console.log('I am Sumon For Your Nose');



// }

// extend(Square, Shape)



// Square.prototype.darw = function () {
//     console.log('Draw')

// }


// function Circel(color, readis) {
//     Shape.call(this, color)
//     this.readis = readis
// }

// extend(Circel, Shape)

// Circel.prototype.common = function () {
//     // Sumon.prototype.common.call(this)
//     console.log('Hello I am Circel in the round');
// }

// var c = new Circel('Pink', 942)


// // --------------------------------------------------------------------//

// function Sumon(color, name, classt) {
//     Shape.call(this, color)
//     this.name = name
//     this.classt = classt
// }

// extend(Sumon, Shape)

// Sumon.prototype.common = function () {
//     // Square.prototype.common.call(this),
//     //     Shape.prototype.common.call(this)
//     console.log('Hello I am sumon please override');

// }

// var m = new Sumon('Black & White', 'Lotif', 'Two')

// //------------------------------------------------------------------------//



// // var sap = new Shape()

// var s = new Square(220, 'Browran')

// var all = [sqr, c, m]

// for (var i of all) {
//     i.common()
// }
// ----- Class creatd---

// class Recactngle {
//     constructor(weight, height) {
//         this.height = height
//         this.weight = weight
//     }


//     draw() {
//         console.log('Drowing.......');
//     }

// }

// let react1 = new Recactngle(33, 99)

class Parson {
    constructor(name, email) {
        this.name = name
        this.email = email
    }

    print() {
        console.log(this.name, this.email);
    }


    static create(str) {
        let parson = JSON.parse(str)
        return new Parson(parson.name, parson.email)
    }
}

let str = `{"name": "Md Anisur Rahman Sumon", "email": "sumon.ct.2019@gmail.com"}`

let p1 = Parson.create(str)
p1.print()

console.log(typeof p1);