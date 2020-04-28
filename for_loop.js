// for loop

// for (let counter = 1; counter <= 6; counter++) {

//     console.log('Inside the loop: ' + counter );
// }

//console.log('outside the loop:' + counter);

// 9 x 1 = 9

// var counter = 13;

// for (let i = 1; i <= 10; i++) {
//     console.log(counter + ' x ' + i + ' = ' + counter * i );

// }

// sum of odd number

var sum = 0;

for (var i = 1; i <= 100; i++) {
  // console.log(sum + ' + ' + i + ' = ' + (sum+i));
  // console.log(sum += i);
  if (i % 2 == 1) {
    // console.log(i);
    // console.log(sum +=i);
    ;
  }
  if (i % 2 == 0) {
    // console.log(i);
    console.log(sum + ' + ' +  i + ' = ' + (sum += i));
  }
}
