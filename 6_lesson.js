alert("fgg")

var Cart = function () {

    var products = [];
    this.addProduct = function (product) {
        if (validateProduct(product)) {
            var item = getProductByName(product.name)
            if (item) {
                item.count++;
            } else {
                //невнятное решение задания 2, урок 6.
                this.getLocalSt = (function (data) {
                    if (localStorage.getItem(data) != undefined) {
                        products.push({ obj: product, count: 1 });
                    }
                })("cart")

                products.push({ obj: product, count: 1 });
                localStorage.setItem("cart", JSON.stringify(products))
            }

        } else {
            console.error("wrong input data!")
        }

    },
        this.getProduct = function (i) {
            return products[i].obj
        };

    function validateProduct(product) {
        return (product != undefined && product.name != undefined && product.price != undefined);
    };

    function getProductByName(productName) {
        for (var i = 0; i < products.length; i++) {
            if (products[i].obj.name == productName) {
                return products[i]
            }
        }
    }

    this.getProductDiscount = function (productName) {
        if (productName) {
            //discount 1
            var item = getProductByName(productName);
            return calcDiscount(item)

        } else {
            //discount all cart
            var fullDiscount = 0;
            for (var i = 0; i < products.length; i++) {
                fullDiscount += calcDiscount(products[i])
            }
        } return fullDiscount;
    }

    this.getProductPrice = function (productName) {
        var item = getProductByName(productName);
        var discont = calcDiscount(item) / item.count;
        return item.obj.price - discont;
    }

    this.getProductSum = function (productName) {
        if (productName) {
            var item = getProductByName(productName);
            return this.getProductPrice(productName) * item.count;
        } else {
            var fullSum = 0;
            for (var i = 0; i < products.length; i++) {
                fullSum += this.getProductPrice(products[i].obj.name) * products[i].count;
            }
        } return fullSum;

    }
}

function calcDiscount(product) {
    var count = product.count;
    if (count > 5) {
        return product.obj.price * 10 / 100 * count;
    } else {
        if (count > 3) {
            return (product.obj.price * 5 / 100 * count);
        }
    }
}


function Product() {
    this.name = null;
    this.price = null;
}

Product.createEmpty = function () {
    var product = new Product;
    product.name = "goods";
    product.price = 100;
    return product;
}

Product.createFromData = function (name, price) {
    var product = new Product;
    product.name = name;
    product.price = price;
    return product;
}

var cart = new Cart;

cart.addProduct(Product.createFromData("banana", 5));
cart.addProduct(Product.createFromData("banana", 5));
cart.addProduct(Product.createFromData("tomato", 45));
cart.addProduct(Product.createFromData("table", 345));
cart.addProduct(Product.createEmpty());
