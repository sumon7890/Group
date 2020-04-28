var n = 0

for (var i = 0; i < 50; i++) {
    if (n % 2 == 0) {
        console.log(i);

    }
}


var sum = 0;
for (var i = 0; i <= 20; i++) {
    if (i % 2 == 0) {
        console.log(sum + ' + ' + i + ' = ' + (sum + i));
        sum += i

    }
}
var sum = 1;
for (var i = 0; i <= 20; i++) {
    if (i % 2 == 1) {
        console.log(sum + ' + ' + i + ' = ' + (sum + i));
        sum += i

    }
}

var sum = 0;
for (var i = 0; i <= 50; i++) {
    if (i % 2 == 1) {
        console.log(sum + i);


    }
}
var sum = 0;
for (var i = 0; i <= 50; i++) {
    if (i % 2 == 0) {
        console.log(sum + i);


    }
}