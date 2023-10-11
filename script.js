var _a, _b, _c, _d, _e, _f;
var carted = [];
var cart = [];
function all(category) {
    var allCategories = ["all", "mens", "womens", "electronics", "jewelery"];
    allCategories.forEach(function (e) {
        document.getElementById(e).style.backgroundColor = "grey";
    });
    document.getElementById(category).style.backgroundColor = "red";
    if (category === "mens")
        category = "men's clothing";
    if (category === "womens")
        category = "women's clothing";
    try {
        fetch('https://fakestoreapi.com/products?sort=desc')
            .then(function (res) { return res.json(); })
            .then(function (json) {
            console.log(json[0]);
            var content = document.getElementsByClassName("content")[0];
            content.innerHTML = "";
            json.forEach(function (element) {
                var _a;
                if (category === "all" || element.category === category) {
                    var pdiv = document.createElement("div");
                    var img = document.createElement("img");
                    img.setAttribute("src", element.image);
                    pdiv.appendChild(img);
                    var title = document.createElement("h5");
                    title.innerHTML = element.title;
                    pdiv.appendChild(title);
                    var price = document.createElement("p");
                    price.innerHTML = "$ " + element.price;
                    pdiv.appendChild(price);
                    pdiv.addEventListener("click", function () {
                        content.innerHTML = "";
                        var div1 = document.createElement("div");
                        var div2 = document.createElement("div");
                        var img = document.createElement("img");
                        img.setAttribute("src", element.image);
                        img.style.width = "100%";
                        img.style.height = "100%";
                        div1.appendChild(img);
                        div1.style.backgroundColor = "white";
                        div2.style.backgroundColor = "white";
                        div1.style.width = "35%";
                        div2.style.width = "40%";
                        div2.style.padding = "4vw";
                        var heading = document.createElement("h5");
                        heading.innerHTML = element.title;
                        div2.appendChild(heading);
                        var categorydesc = document.createElement('p');
                        categorydesc.innerHTML = element.category;
                        div2.appendChild(categorydesc);
                        div2.appendChild(document.createElement('hr'));
                        price.innerHTML = "Price: $ " + element.price;
                        div2.appendChild(price);
                        var rating = document.createElement('h6');
                        rating.innerHTML = "Rating: " + element.rating.rate + "⭐⭐⭐⭐⭐ " + element.rating.count + " Reviews";
                        div2.appendChild(rating);
                        var desc = document.createElement('h6');
                        desc.innerHTML = element.description;
                        div2.appendChild(desc);
                        var button = document.createElement("button");
                        button.innerHTML = "Add to the Cart";
                        button.setAttribute("id", "addcart");
                        button.setAttribute("class", "btn btn-primary");
                        button.style.alignSelf = "center";
                        // button.addEventListener("click", () => {
                        //   const item: CartItem = {
                        //     title: element.title,
                        //     price: element.price, 
                        //   };
                        //   cart.push(item);
                        //   console.log("Added to cart: " + element.title);
                        //   // Call the function to update the cart display
                        //   displayCart();
                        // });
                        button.addEventListener("click", function () {
                            carted.push(element);
                        });
                        //pdiv.appendChild(button);
                        div2.appendChild(button);
                        content.appendChild(div1);
                        content.appendChild(div2);
                    });
                    content.appendChild(pdiv);
                    function displayCart() {
                        var cartItemsList = document.getElementById("cart-items");
                        //cartItemsList.innerHTML = ""; // Clear the previous cart items
                        cart.forEach(function (item, index) {
                            var listItem = document.createElement("li");
                            listItem.innerHTML = "<span>".concat(item.title, "</span> - <span>$").concat(item.price.toFixed(2), "</span>");
                            var removeButton = document.createElement("button");
                            removeButton.innerText = "Remove";
                            removeButton.addEventListener("click", function () {
                                cart.splice(index, 1);
                                displayCart(); // Update the cart display
                            });
                            listItem.appendChild(removeButton);
                            cartItemsList.appendChild(listItem);
                        });
                        var cartElement = document.getElementById("cart");
                        var cartTitle = cartElement.querySelector(".title");
                        cartTitle.textContent = "CART";
                        cartElement.style.display = cart.length > 0 ? "block" : "none";
                    }
                    // Call the function initially to hide the cart section
                    // displayCart();
                    (_a = document.getElementById("title")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", function () { displayCart(); });
                }
            });
        });
    }
    catch (e) {
        console.log(e);
    }
}
function cartItems() {
    var allCategories = ["all", "mens", "womens", "electronics", "jewelery"];
    allCategories.forEach(function (e) {
        document.getElementById(e).style.backgroundColor = "grey";
    });
    var main = document.getElementsByClassName("content")[0];
    main.innerHTML = "";
    var buttonContinue = document.createElement("button");
    buttonContinue.setAttribute("class", "btn btn-secondary");
    buttonContinue.innerHTML = "Keep Shopping";
    buttonContinue.addEventListener("click", function () { return all('all'); });
    main.appendChild(buttonContinue);
    if (carted.length === 0) {
        var noitem = document.createElement("p");
        noitem.innerHTML = "Please add items to the cart!!";
        main.appendChild(noitem);
    }
    else {
        var totalCost_1 = 0;
        var table = document.createElement("table");
        table.setAttribute("class", "table");
        //var thead = document.createElement("thead");
        // var trow = document.createElement("tr");
        //   var th1 = document.createElement("th");
        //   th1.innerHTML = "";
        //   var th2 = document.createElement("th");
        //   th2.innerHTML = "Product";
        //   var th3 = document.createElement("th");
        //   th3.innerHTML = "Price";
        //   var th4 = document.createElement("th");
        //   th4.innerHTML = "Quantity";
        //   var th5 = document.createElement("th");
        //   th5.innerHTML = "Quantity";
        //   trow.append(th1);
        //   trow.append(th2);
        //   trow.append(th3);
        //   trow.append(th4);
        //   trow.append(th5);
        var tbody = document.createElement("tbody");
        carted.forEach(function (element) {
            var trow = document.createElement("tr");
            var td1 = document.createElement("td");
            td1.innerHTML = "";
            var image = document.createElement("img");
            image.setAttribute("src", element.image);
            image.style.width = "60px";
            image.style.height = "60px";
            td1.appendChild(image);
            var td2 = document.createElement("td");
            td2.innerHTML = element.title;
            var td3 = document.createElement("td");
            var td4 = document.createElement("td");
            td4.innerHTML = "";
            totalCost_1 += element.price;
            td3.innerHTML = "$ " + element.price;
            var td5 = document.createElement("td");
            var removeElement = document.createElement("button");
            removeElement.setAttribute("class", "btn");
            removeElement.setAttribute("type", "button");
            removeElement.innerHTML = "Remove Item";
            removeElement.addEventListener("click", function () { return removeEle(element); });
            td5.appendChild(removeElement);
            trow.appendChild(td1);
            trow.appendChild(td2);
            trow.appendChild(td3);
            trow.appendChild(td4);
            trow.appendChild(td5);
            tbody.appendChild(trow);
        });
        table.appendChild(tbody);
        main.appendChild(table);
        var button = document.createElement('button');
        button.innerHTML = "CHECKOUT";
        var subtotal = document.createElement('h3');
        subtotal.style.display = "flex";
        subtotal.style.justifyContent = "space-between";
        var span1 = document.createElement('span');
        var span2 = document.createElement('span');
        span1.innerHTML = "Total Amount ";
        span2.innerHTML = "" + Math.round(totalCost_1);
        subtotal.appendChild(span1);
        subtotal.appendChild(span2);
        subtotal.style.gap = "2vw";
        main.appendChild(document.createElement('hr'));
        main.appendChild(subtotal);
        main.appendChild(document.createElement('hr'));
        main.appendChild(button);
    }
}
function clearTheDialog() {
    var dialog = document.getElementsByClassName("modal fade show")[0];
    dialog.innerHTML = "";
    cartItems();
}
function removeEle(item) {
    carted = carted.filter(function (element) { return element != item; });
    cartItems();
}
// function addToCart(element.item:any){
//   var additemid:number = 0;
//     function addtocart(item:any) {
//       additemid += 1;
//       var selecteditem = document.createElement('div');
//       selecteditem.classList.add('cartimg');
//       selecteditem.setAttribute('id', additemid);
//       var img = document.createElement('img');
//       img.setAttribute('src', item.children[0].currentSrc);
//       var title = document.createElement('div');
//       title.innerText = item.children[1].innerText;
//       var label = document.createElement('div');
//       label.innerText = item.children[2].children[0].innerText;
//       var select = document.createElement('span');
//       select.innerText = item.children[2].children[1].value;
//       label.append(select);
//       var delbtn = document.createElement('button');
//       delbtn.innerText = 'Clear';
//       delbtn.onclick = function(){
//         selecteditem.remove();
//       }
//       var cartitems:any = document.getElementById('title');
//       selecteditem.append(img);
//       selecteditem.append(title);
//       selecteditem.append(label);
//       selecteditem.append(delbtn);
//       cartitems.append(selecteditem);
//     }
// }
all("all");
(_a = document.getElementById("all")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", function () { return all("all"); });
(_b = document.getElementById("mens")) === null || _b === void 0 ? void 0 : _b.addEventListener("click", function () { return all("mens"); });
(_c = document.getElementById("womens")) === null || _c === void 0 ? void 0 : _c.addEventListener("click", function () { return all("womens"); });
(_d = document.getElementById("electronics")) === null || _d === void 0 ? void 0 : _d.addEventListener("click", function () { return all("electronics"); });
(_e = document.getElementById("jewelery")) === null || _e === void 0 ? void 0 : _e.addEventListener("click", function () { return all("jewelery"); });
(_f = document.getElementById("logo")) === null || _f === void 0 ? void 0 : _f.addEventListener("click", function () { return all("all"); });
var x = document.getElementsByClassName("btn btn-primary position-relative")[0];
x.addEventListener("click", function () {
    return cartItems();
});
var startpage = document.getElementById("logo");
startpage.addEventListener("click", function () { return all("all"); });
// displayCart(); 
