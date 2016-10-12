//1.
var Cart = function () {
    var products = [];
    
        this.addProduct = function (product) {
            products.push(product);
        },
        this.getProduct = function (i) {
        return products[i]
    }

}

var cart = new Cart;

//2.
function Product() {
    this.name = null;
    this.price = null;
}

Product.createEmpty = function(){
    var product = new Product;
    product.name = "goods";
    product.price = 0;
    return product;
}

Product.createFromData = function(name,price){
    var product = new Product;
    product.name = name;
    product.price = price;
    return product;
}

var tv = Product.createEmpty();
var phone = Product.createFromData("meizu", 3000)

console.log(tv,phone)

