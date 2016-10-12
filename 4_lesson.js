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

function clonObj(obj, count) {
    var newObj = {};
    var arrObj = [];
    var res;
    for (var i = 0; i < count; i++) {
        for (key in obj) {
            newObj[key] = obj[key];
        }
        if (count == 1) {
            res = newObj;
        } else {
            arrObj.push(newObj);
            res = arrObj
        }
    } console.log(res)
}

clonObj(flat, 1)

2.
function difDate() {
    var dif, difMore, difLess;
    do {
        var getUserDate = prompt("Set a date", "");
    } while (!getUserDate.match(/(0[1-9]|1[0-9]|2[0-9]|3[01]).(0[1-9]|1[012]).[0-9]{4}/))

    var t = getUserDate.split(".");
    var userDate = new Date();
    userDate.setFullYear(t[2]);
    userDate.setMonth(t[1] - 1);
    userDate.setDate(t[0]);
    userDate = Date.parse(userDate);

    var currentDate = new Date();
    currentDate = Date.parse(currentDate);
    if (userDate > currentDate) {
        dif = new Date(userDate - currentDate);
        difMore = Math.ceil((dif.getTime()) / 86400000);

        day = declension(difMore)
        alert("до " + getUserDate + " осталось " + difMore + " " + day)

    } else {
        dif = new Date(currentDate - userDate);
        difLess = Math.ceil((dif.getTime()) / 86400000);
        day = declension(difLess);
        alert("с " + getUserDate + " прошло " + difLess + " " + day)
    }

}

difDate()

function declension(dayNumber) {
    var day;
    var lastCh = dayNumber % 10;
    if (lastCh == 1) {
        day = "день"
    } else {
        if (lastCh > 1 && lastCh < 4) {
            day = "дня"
        } else {
            day = "дней"
        }
    }
    return day;
}

3.
    //основной файл
    < html >

    <head>
        <meta charset="utf-8">
            <script src="test.js"></script>
</head>

        <body>
            <script>

                alert(myMath.deduct(5, 3));

            </script>

        </body>

</html>

//модуль
var myMath = (function () {
    return {
        add: function () {
            var res = 0;
            var i = 0;
            while (i < arguments.length) {
                res = res + arguments[i];
                i++;
            }
            return res
        },
        multiply: function () {
            var res = 1;

            var i = 0;
            while (i < arguments.length) {
                res = res * arguments[i];
                i++;
            }
            return res
        }
    }
})()
