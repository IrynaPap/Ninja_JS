1.

var flat = {
    room: {
        kitchen: 1,
        hall: 2,
        badroom: 3,
        bathroom: 1
    },
    appNumber: 45,
    floor: 2,
    status: "new"
};

function keyValueObj(obj) {
    for (key in obj) {
        if (typeof (obj[key]) == "object") {
            keyValueObj(obj[key]);
        }
        else {
            console.log("key " + key + " value " + obj[key]);
        }

    }
}
keyValueObj(flat);

2.

function concate(x, y) {
    return String(x) + String(y);
}
concate(123, 456);

3.

function squereS(a, b) {
    if (typeof (b) == "undefined") {
        return a * a;
    } else {
        return a * b;
    }
}

squereS(2, 3);

4.

function argType() {
    for (var i = 0; i < arguments.length; i++) {
        if (typeof (arguments[i]) !== "number") {
            console.log("undefined");
        } else {
            if (arguments[i] < 0) {
                console.log(false);

            } else {
                console.log(true);
            }
        }
    }
}
argType(-2, 4, -6, 7, "fgfg", 6, -3, 0)

5.

function argArr() {
    var i = i || 0;
    var res = [];
    if (i == arguments.length - 1) {
        return arguments[i]
    } else {
        for (var i = 0; i < arguments.length; i++) {
            if (arguments[i] instanceof (Array)) {
                res = res.concat(arguments[i]);
            }

        } console.log(res)
    }
}

argArr([2, 3, 4], 3, 4, 5, [5, 6, 7], [2, 3])

6.

function pow(x, n) {
    var res = 1;
    while (n > 0) {
        res = res * x;
        n--;
    }
    return res;
}
pow(2, 3)

7.

function sumArrayRec(A, i) {
    i = i || 0;
    if (i == A.length - 1) {
        return A[i];
    } else {
        return A[i] + sumArrayRec(A, i + 1)
    }
}
sumArrayRec([2, 3, 4])

8.

var user = {
    name: 'andrey',
    login: '111',
    password: '222',
    address: {
        city: 'Krasnodar',
        house: {
            flat: 99,
            floor: 4
        }
    }
}

function keyValueObj(obj) {
    for (key in obj) {
        if (typeof (obj[key]) == "object") {
            keyValueObj(obj[key]);
        }
        else {
            console.log("key " + key + " value " + obj[key]);
        }

    }
}
keyValueObj(user);

9.

function fib(n) {
    if (n <= 1) {
        return n;
    } else {
        return fib(n - 1) + fib(n - 2)
    }
}

fib(5)

