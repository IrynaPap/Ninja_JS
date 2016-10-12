function Product(data) {
    this.name = data.name || 0;
    this.price = data.price || 0;
}

Product.prototype.getObjectName = function () {
    return ("Name: " + this.name + "; Price: " + this.price + ";")
}

Product.prototype.createTable = function () {
    var table = document.createElement("table");

    for (var key in this) {
        if (this[key] instanceof Function) {
            continue;
        }
        var tr = document.createElement("tr")
        table.appendChild(tr);

        var td = document.createElement("td");
        tr.appendChild(td);
        td.innerHTML = key;

        var tdVal = document.createElement("td");
        tr.appendChild(tdVal);
        tdVal.innerHTML = this[key];

    }
    return table;

}

Product.prototype.validate = function () {
    return this.name !== undefined && this.price !== undefined;
}

function Electronics(data) {
    Product.apply(this, arguments);
    this.electronicType = data.electronicType;
    this.voltage = data.voltage;

    if (!this.validate()) {
        throw new Error("Wrong data");
    };
}

Electronics.prototype = Object.create(Product.prototype);
Electronics.prototype.validate = function () {
    return (Product.prototype.validate.apply(this) && this.data !== undefined)
}

function Close(data) {
    Product.apply(this, arguments);
    this.size = data.size;
    this.closeType = data.closeType;

    if (!this.validate()) {
        throw new Error("Wrong data");
    };
}

Close.prototype = Object.create(Product.prototype);
Close.prototype.validate = function () {
    return (Product.prototype.validate.apply(this) && this.data !== undefined)
}

function Goods(data) {
    Product.apply(this, arguments);
    this.weight = data.weight || 0;
    this.manufacturingDate = data.manufacturingDate || 0;

    if (!this.validate()) {
        throw new Error("Wrong data");
    };
}

Goods.prototype = Object.create(Product.prototype);
Goods.prototype.validate = function () {
    return (Product.prototype.validate.apply(this) && this.data !== undefined)
}

function TV(data) {
    Electronics.apply(this, arguments);
    this.diagonal = data.diagonal;

    if (!this.validate()) {
        throw new Error("Wrong data");
    };
}

TV.prototype = Object.create(Electronics.prototype);
TV.prototype.validate = function () {
    return (Electronics.prototype.validate.apply(this) && this.diagonal !== undefined)
}

var telik = new TV({ name: "LG", price: 700, diagonal: 16 })
console.log(telik.createTable())