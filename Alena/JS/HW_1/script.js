"use strict";
// console.log("---задание 2:");
// let a1 = 5 % 3;
// let a2 = 3 % 5;
// let a3 = 5 + '3';
// let a4 = '5' - 3;
// let a5 = 75 + 'кг';
// let a6 = 785 * 653;
// let a7 = 100 / 25;
// let a8 = 0 * 0;
// let a9 = 0 / 2;
// let a10 = 89 / 0;
// let a11 = 98 + 2;
// let a12 = 5 - 98;
// let a13 = (8 + 56 * 4) / 5;
// let a14 = (9 - 12) * 7 / (5 + 2);
// let a15 = +"123";
// let a16 = 1 || 0;
// let a17 = false || true;
// let a18 = true > 0;
// console.log(a1, ":", typeof (a1));
// console.log(a2, ":", typeof (a2));
// console.log(a3, ":", typeof (a3));
// console.log(a4, ":", typeof (a4));
// console.log(a5, ":", typeof (a5));
// console.log(a6, ":", typeof (a6));
// console.log(a7, ":", typeof (a7));
// console.log(a8, ":", typeof (a8));
// console.log(a9, ":", typeof (a9));
// console.log(a10, ":", typeof (a10));
// console.log(a11, ":", typeof (a11));
// console.log(a12, ":", typeof (a12));
// console.log(a13, ":", typeof (a13));
// console.log(a14, ":", typeof (a14));
// console.log(a15, ":", typeof (a15));
// console.log(a16, ":", typeof (a16));
// console.log(a17, ":", typeof (a17));
// console.log(a18, ":", typeof (a18));
// console.log("---задание 3:");
// let height = 23;
// let width = 10;
// let SPryam = height * width;
// console.log(SPryam, "cm^2");
// console.log("---задание 4:");
// let heightCilindra = 10;
// let VCilindra = ((3.14 * a7 * a7) / 4) * heightCilindra;
// console.log(VCilindra, "cm^3");
// console.log("---задание 5:");
// let r = 5;
// let SKruga = 3.14 * r * r;
// console.log(SKruga, "cm^2");
// console.log("---задание 6:");
// let base1 = 5;
// let base2 = 7;
// let heightTrap = 10;
// let STrap = ((base1 + base2) / 2) * heightTrap;
// console.log(STrap, "cm^2");
// console.log("---задание 7:");
// let S = 2,
//     p = 0.1,
//     years = 5,
//     Pereplata = (S * p * years);
// console.log(Pereplata, 'млн. руб');
// console.log("---задание 8:");
// let a = 8,
//     b = 3;
// console.log("Решите уравнение a+2(x-b)=16");
// let x = (16+2*b-a)/2;
// console.log('x =', x);
// console.log("Решите уравнение b(x+15)=a+6x");
// x = (a - 15*b)/(b-6);
// console.log('x =', x);
// console.log("Решите уравнение x+2x+ax+bx=23780");
// x = 23780/(3+a+b);
// console.log('x =', x);



// ClassWork

// console.log(!NaN);  //* !Boolean(NaN) *//
// console.log(!!NaN);  //* Boolean(NaN) *//
// console.log(NaN !== NaN)
// NaN === NaN && true
// false && true
// 0 && 1
// console.log(0 && 1);

// true && true && false
// 1 && 'abc' && ''
// console.log(1 && 'abc' && '');

// true && true && !!false && false
// 1 && 'abc' && undefined && null
// console.log(1 && 'abc' && undefined && null);

// '' || 0 || null
// console.log('' || 0 || null);

// null || undefined || 'a' || ''
// console.log(null || undefined || 'a' || '');

// 1 || 0 && 'abc' && NaN || null
// console.log(1 || 0 && 'abc' && NaN || null);
// 1

// null || NaN && 'abc' && 0 || 1
// console.log(null || NaN && 'abc' && 0 || 1);
// 'abc'
// NaN

// true && true
// '0' && 1 
// console.log('0' && 1 );


// '0' || 1
// console.log('0' || 1);

// 'null' && undefined
// console.log('null' && undefined);

// (0 || 1) && 'undefined' || 'abc' && null || (NaN && null) || ('' || 1)
// console.log(typeof ((0 || 1) && 'undefined' || 'abc' && null || (NaN && null) || ('' || 1)));

// if (false) {
//     console.log(5)
// } else {
//     console.log(10)
// }

// let output = 10 > 8 && 5 <= 7 ? 'null' : 1 < 9
// console.log(output);
let number = 1;

switch (number) {
    case 10:
        console.log(1);
        break
    case 5:
        console.log(5);
        break
    default:
        console.log('nothing not equal');
}

if (true) {
    continue
}