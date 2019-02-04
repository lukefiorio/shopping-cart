

var merchArr =
    [
        {product: "Finger Toothbrush", description: "A helping hand to a nicer smile.", price: 1.11}, 
        {product: "Barry Manilow's Greatest Hits Collection Vol 1", description: "Music the way it should be! Reminisce the past glory as your ship to happiness has sailed.", price: 39.57}, 
        {product: "Ramen Oreos", description: "The overly used cliche 'East Meets West' comes to life as Nabisco has infused the savory flavors of the Far East sandwiched between two chocolate wafers. Dip that in your sake.", price: 8.88}, 
        {product: "Woof Washer 360", description: "Wash your dirty stinky mutt in minutes! Water and dog not included." , price: 9.29}, 
        {product: "Sauna Pants", description: "Is it hot in here? Indeed. It's my pants. Look cool while losing weight.", price: 2.33}, 
        {product: "Hug Me Pillow", description: "No more lonely nights as you snuggle with your best friend. And it will never walk out on you.", price: 599.99}
    ];

//calculate subtotal price
var subTotalPrice = merchArr.reduce((a, b) => a + b.price, 0);

// add sub-total to end of merchArr
merchArr.push({product: "Subtotal",description: "",price: subTotalPrice});

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
var cartLabel = document.createElement('h2');
cartLabel.className='cart';
cartLabel.id='cartLabel';
cartLabel.innerHTML='Shopping Cart';

// place img & label in header container
headerBox.appendChild(cartImg);
headerBox.appendChild(cartLabel);

//make array to hold image links
//last link is a blank image to keep the Subtotal in the correct place
// there has to be a better way...
var imgArray = [
    'https://images.pet-supermarket.co.uk/images/w_400/product/I9210278/Kokoba-Finger-Toothbrush-Set-for-Dogs',
    'https://img.discogs.com/Jf8fMcTNG9qZtcHcZaMwFZ6Wi1Q=/fit-in/600x600/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-2382962-1360331108-2121.jpeg.jpg',
    'https://cdn.trendhunterstatic.com/phpthumbnails/253/253437/253437_1_230c.jpeg',
    'https://images-na.ssl-images-amazon.com/images/I/51AF%2BqomYPL.jpg',
    'http://www.saunatimes.com/wp-content/uploads/sauna-pants1.jpg',
    'https://images.prod.meredith.com/product/20459cbcb9c409ca83fb28a33c9ddf91/1518828691340/l/hug-me-decorative-throw-pillow-gray-17-x17',
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQIAAABvCAMAAAAwjD5SAAAAA1BMVEX///+nxBvIAAAAM0lEQVR4nO3BMQEAAADCoPVPbQsvoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAICrAXBNAAEknkf6AAAAAElFTkSuQmCC'
];


//what's best practice for the last "subtotal" spot?

for (var i=0; i<merchArr.length; i++) {
    // make merch class to hold all info on a product
    var merchBox = document.createElement('div');
    merchBox.className = 'merch'
    document.body.appendChild(merchBox);

    // make prodContent class to hold img, name, and desc
    var prodContent = document.createElement('div');
    prodContent.className = 'prodContent';
    merchBox.appendChild(prodContent);

    // make prodImg to hold images.
    var imgBox = document.createElement('img');
    imgBox.className = 'prodImg';
    prodContent.appendChild(imgBox);
    imgBox.src = imgArray[i];


    // make prodAndDesc class to hold Product & Description
    var prodAndDescBox = document.createElement('div');
    prodAndDescBox.className = 'prodDesc';
    prodContent.appendChild(prodAndDescBox);

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
    var priceBox = document.createElement('p');
    priceBox.className = 'price';
    priceBox.id = 'price'+(i+1);
    priceBox.innerHTML = '$'+merchArr[i].price;
    merchBox.appendChild(priceBox);
}

// bold the subtotal price
document.getElementsByClassName('price')[merchArr.length-1].style.fontWeight='bold';

// hide empty images