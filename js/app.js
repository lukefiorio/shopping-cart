

var merchArr =
    [
        {product: "Finger Toothbrush", description: "A helping hand to a nicer smile.", price: 1.11}, 
        {product: "Barry Manilow's Greatest Hits Collection Vol 1", description: "Music the way it should be! Reminisce the past glory as your ship to happiness has sailed.", price: 39.57}, 
        {product: "Ramen Oreos", description: "The overly used cliche 'East Meets West' comes to life as Nabisco has infused the savory flavors of the Far East sandwiched between two chocolate wafers. Dip that in your sake.", price: 8.88}, 
        {product: "Woof Washer 360", description: "Wash your dirty stinky mutt in minutes! Water and dog not included." , price: 9.29}, 
        {product: "Sauna Pants", description: "Is it hot in here? Indeed. It's my pants. Look cool while losing weight.", price: 2.33}, 
        {product: "Hug Me Pillow", description: "No more lonely nights as you snuggle with your best friend. And it will never walk out on you.", price: 599.99}
    ];

// make container to hold header img/label
var headerBox = document.createElement('div');
headerBox.id = 'header';
document.body.appendChild(headerBox);

// create container for cart img
var cartImg = document.createElement('img');
cartImg.className ='cart';
cartImg.id='cartImg';
cartImg.src = 'images/cart.svg';

// create container for cart label
var cartLabel = document.createElement('p');
cartLabel.className='cart';
cartLabel.id='cartLabel';
cartLabel.innerHTML='Shopping Cart';

// place img & label in header container
headerBox.appendChild(cartImg);
headerBox.appendChild(cartLabel);


for (var i=0; i<merchArr.length; i++) {
    // make merch class to hold all info on a product
    var merchBox = document.createElement('div');
    merchBox.className = 'merch'
    document.body.appendChild(merchBox);

    // make prodAndDesc class to hold Product & Description
    var prodAndDescBox = document.createElement('div');
    prodAndDescBox.className = 'prodDesc';
    merchBox.appendChild(prodAndDescBox);

    // append product to prodAndDesc class
    var productBox = document.createElement('div');
    productBox.className = 'product';
    productBox.innerHTML = merchArr[i].product;
    prodAndDescBox.appendChild(productBox);
    
    // append desc to prodAndDesc class
    var descriptionBox = document.createElement('div');
    descriptionBox.className = 'description';
    descriptionBox.innerHTML = merchArr[i].description;
    prodAndDescBox.appendChild(descriptionBox);

    // append price to merch class
    var priceBox = document.createElement('div');
    priceBox.className = 'price';
    priceBox.innerHTML = merchArr[i].price;
    merchBox.appendChild(priceBox);
}
