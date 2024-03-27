// navabar
function navslide(){
    const nav=document.querySelector(".navabar");
    const menu=document.querySelector(".nav-links");
    const burger=document.querySelector(".burger");
    burger.addEventListener("click",()=>{
        menu.classList.toggle("nav-active");
        burger.classList.toggle("toggle");
    })
}
navslide();
function GstCalculate(){
    let name=document.getElementById('Name').value
    let phone=document.getElementById('phone').value
    let email=document.getElementById('email').value
    let place=document.getElementById('place').value
    let Hyderabad=document.getElementById('Hyderabad').value
    let Guntur=document.getElementById('Guntur').value
    let Vizag=document.getElementById('Vizag').value
    let Tenali=document.getElementById('Tenali').value
    let Bapatla=document.getElementById('Bapatla').value
    let GST=document.getElementById('GST').value
    let payment=document.getElementById('payment').value

    let array=[
        parseInt(Hyderabad),
        parseInt(Guntur),
        parseInt(Vizag),
        parseInt(Tenali),
        parseInt(Bapatla),
    ];


    let sum=0;
    for(let i=0;i<array.length;i++){

        sum = sum+array[i];
        
    }
    let totalCalculate = (sum * GST) / 100

     let total = sum + totalCalculate;



    if (total >= 6000) {
        console.log(total + 1000)

    }
    else {
        console.log(total + 500)
    }

    let details = `<h4>Name:${name}</h4><br>
    // <h6>PhoneNo:${phone}</h6><br>
    // <h6>Email:${email}</h6><br>
    // <h6>Place:${place}</h6><br>
    <h6>Total:${sum}</h6><br>
    <h6>WithGst:${total}</h6>
     `
      
    let data=document.getElementById("data").innerHTML=details
    

}
// fetch functainality
const url = "https://fakestoreapi.com/products";
const productContainer = document.getElementById("product_card");
const loadMoreBtn = document.getElementById("loadMoreBtn");

let page = 1;
const productsPerPage = 1;
let loadedProducts = 0;


async function fetchProducts() {
    try {
        const response = await fetch(`https://fakestoreapi.com/products?page=${page}`);
            if (!response.ok) { 
            
            throw new Error('Failed to fetch data');
        }

        const data = await response.json();

        appendProducts(data);
        if (loadedProducts >= data.length) {
            loadMoreBtn.style.display = 'none';
        } else {
            loadMoreBtn.style.display = 'block';
        }

        page++;
    } catch (error) {
        console.error('Error fetching data:', error.message);
    }
}

function appendProducts(data) {
    for (let i = loadedProducts; i < Math.min(loadedProducts + productsPerPage, data.length); i++) {
        const item = data[i];
        const productCard = createProductCard(item);
        productContainer.appendChild(productCard);
    }

    loadedProducts += productsPerPage;
}

function createProductCard(item) {
    const productCard = document.createElement("div");
    productCard.classList.add("productCard");

    let truncatedDescription = item.description.length > 100 ? item.description.substring(0, 100) + "..." : item.description;

    productCard.innerHTML = `
    <div class="product_list">
        <div class="title">
            <h3>${item.title}</h3>
        </div>
        <div class="price">
            <p>$${item.price}</p>
        </div>
        <div class="description">
            <p>${truncatedDescription}</p>
            {item.description.length > 100 ? <a className="readMoreBtn" data-item={encodeURIComponent(JSON.stringify(item))}>Read More</a> : ''}
            </div>
        
        <div class="category">
            <p>${item.category}</p>
        </div>

        <div class="product_img">
            <img src="${item.image}" alt="${item.title}" >
        </div>
        <div class="rating">
            <div class="rate">
                <p>${item.rating.rate}</p>
            </div>
            <div class="count">
                <p>${item.rating.count}</p>
            </div>
        </div>
    </div>  
  
`;

return productCard;
}

function handleReadMore(event) {
    const encodedItemData = event.target.dataset.item;
    const decodedItemData = decodeURIComponent(encodedItemData);
    const itemData = JSON.parse(decodedItemData);

    const productCard = event.target.closest('.productCard');

    if (productCard) {
        const descriptionParagraph = productCard.querySelector('.description p');

        if (descriptionParagraph) {
            descriptionParagraph.textContent = itemData.description;
            event.target.style.display = 'none';
        } else {
            console.error('Description paragraph not found within the product card');
        }
    } else {
        console.error('Product card not found');
    }
}

loadMoreBtn.addEventListener("click", fetchProducts);
fetchProducts();

productContainer.addEventListener('click', function(event) {
    if (event.target.classList.contains('readMoreBtn')) {
        handleReadMore(event);
    }
});
// displa image 
const fullimage = document.getElementById("fullimg")
const expandedimg = document.getElementById("expandImg")
const closeBtn = document.getElementById("img-btn")
const images = document.querySelectorAll(".images")


images.forEach((image)=>{
    image.addEventListener('click',function(){
        expandimg(image);
    });
});
closeBtn.addEventListener('click',function(){
    imgbtn();
});

function expandimg(image){
    expandedimg.src = image.src;
    fullimage.style.display = 'block';
}
function imgbtn(){
    fullimage.style.display = 'none';
}







