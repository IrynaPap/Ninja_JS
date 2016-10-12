1.
var square = {
    width: 100,
    height: 100,
};

var flat = {
    room: 3,
    appNumber: 45,
    floor: 2,
    status: "new"
};

var product = {
    price: "32$",
    weight: "200g",
    manufactureDate: "10.03.2016",
    productType: "close"
};

var user = {
    name: "Vasya",
    age: 25,
    login: "vasyapupkin",
    mail: "vasya.p@mail.com"
};

2.
var car = {
    mark: "Suzuki",
    year: 2009,
    engineCapacity: 2
};

var dog = {
    breed: "doberman",
    age: 3,
    color: "black",
    weight: 45
};
var plant = {
    type: "flower",
    color: "red",
    age: 10,
    height: 0.2
};

var bag = {
    type: "baggage",
    width: 0.4,
    height: 0.8,
    color: "black"
};

var dishes = {
    type: "fork",
    use: "fish",
    numberOfTeeth: 4
};

3.

var surnames = ["Petrov", "Ivanenko", "Sidorov", "Vasylenko"];
var cars = ["BMW", "Fiat", "Mini Cooper", "Mercedes", "Audi"];
var browsers = ["Chrome", "Opera", "Mozilla", "Safari", "Explorer"];
var displayRes = ["800 x 600", "1024 x 768", "1280 x 1024"]

4.
for (var i = 0; i < surnames.length; i++) {
    console.log(surnames[i]);
};

var i = 0;
while (i < cars.length) {
    console.log(cars[i]);
    i++;
};

5.

var cars = [
    BMW = {
        name: "BMW",
        oct: 85
    },
    fiat = {
        name: "Fiat",
        oct: 90
    },
    miniCooper = {
        name: "Mini Cooper",
        oct: 92
    },
    mercedes = {
        name: "Mercedes",
        oct: 87
    },
    audi = {
        name: "Audi",
        oct: 95
    }
];

for (var i = 0; i < cars.length; i++) {
    if (cars[i].oct >= 92) {
        console.log(cars[i].name);
    }
}

6.
massive = [4, "str", true, obj = { name: "object" }]

7.
for (var i = 0; i < massive.length; i++) {
    if (typeof (massive[i]) == "boolean") {
        console.log(massive[i] + " - boolean")
    } else {
        if (typeof (massive[i]) == "string") {
            console.log(massive[i] + " - string")
        } else {
            if (typeof (massive[i]) == "number") {
                console.log(massive[i] + " - number")
            } else {
                if (typeof (massive[i]) == "object") {
                    console.log(massive[i] + " - object")
                }
            }
        }
    }
}


for (var i = 0; i < massive.length; i++) {
    switch (typeof (massive[i])) {
        case "boolean":
            console.log(massive[i] + " - boolean")
            break;
        case "string":
            console.log(massive[i] + " - string")
            break;
        case "number":
            console.log(massive[i] + " - number")
            break;
        case "object":
            console.log(massive[i] + " - object")
            break;
        default:
            break;
    }
}

8.
var arr = [3, 2, 7, 5, 9, 1, 4, 12];
var newArr = [];
while (arr.length > 0) {
    var min = arr[0];
    var k = 0;
    for (j = 0; j < arr.length; j++) {
        if (min > arr[j]) {
            min = arr[j];
            k = j;
        }
    }
    newArr.push(min);
    arr.splice(k, 1);
    console.log(min, i, j, arr)
}
console.log(newArr)




function put(A) {
    var arr = A.split("/");
     var n = arr.length;
     for(var i =0; i< n; i++){
         if(arr[i].indexOf(".") !== -1){
             alert(arr[i-1])
         }    
     }
     
    };
var f = "D:/doc/doc/uni/inf/Lab6/itgf_pap.doc";
put(f)