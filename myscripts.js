const object1 = [
    {
        imgSrc: "https://qne.com.pk/cdn/shop/files/Pepsico_image_300x.png?v=1711968189",
        paraText: 'Pepsico'
    },
    {
        imgSrc: "https://qne.com.pk/cdn/shop/files/WhatsApp_Image_2024-04-02_at_2.52.16_PM_300x.jpg?v=1712052413",
        paraText: 'Hilal'
    },
    {
        imgSrc: "https://qne.com.pk/cdn/shop/files/Bundles_Discount_Offer_Image_300x.png?v=1711968143",
        paraText: 'Discount Offeers'
    },
    {
        imgSrc: "https://qne.com.pk/cdn/shop/files/WhatsApp_Image_2024-04-01_at_2.02.26_PM_300x.jpg?v=1711962170",
        paraText: 'Baby'
    },
    {
        imgSrc: "https://qne.com.pk/cdn/shop/files/Snacks_Beverages_imge_300x.png?v=1711968168",
        paraText: "Snack"
    },
    {
        imgSrc: "https://qne.com.pk/cdn/shop/files/Groery_imge_300x.png?v=1711968219",
        paraText: 'Grocery'
    }
];

const container = document.getElementById("container");
object1.forEach(data => {
    const object = document.createElement("div");
    object.classList.add("object");

    const img = document.createElement("img");
    img.src = data.imgSrc;
    img.alt = "Image";
    img.classList.add('img_size1');
    object.appendChild(img);

    const para = document.createElement("p");
    para.textContent = data.paraText;
    object.appendChild(para);

    container.appendChild(object);
});



// object 2

const objectsData2 = [
    {
        discount: 'Save Rs 5.00',
        imgSrc: "https://qne.com.pk/cdn/shop/files/orgsize_47926WhatsApp_20Image_202024-04-22_20at_2011.52.47_20AM_200x.jpg?v=1714037661",
        price: 'Rs 315.00/-',
        info: 'Dove Nourishing Soap With Moroccan Argan Oil 90g',
        btn: 'Add To Cart'

    },
    {
        discount: 'Save Rs 20.00',
        imgSrc: "https://qne.com.pk/cdn/shop/products/slice9_200x.png?v=1642572438",
        price: 'Rs 180.00/-',
        info: 'Slice Mango Juice heavenly flavour of mango pulp 1 Litre',
        btn: 'Add To Cart'

    },
    {
        discount: 'Save Rs 5.00',
        imgSrc: "https://qne.com.pk/cdn/shop/products/orgsize_12269Paste_20_1_200x.jpg?v=1623910315",
        price: 'Rs 195.00/-',
        info: ' Shan Garlic Paste Spicy Flavour (310 gm)',
        btn: 'Add To Cart'

    },
    {
        discount: 'Save Rs 5.00',
        imgSrc: "https://qne.com.pk/cdn/shop/products/LemonMaxDishwashPasteGreen400g_200x.jpg?v=1628832616",
        price: 'Rs 120.00/-',
        info: 'Max Lemon Dishwash Paste Green Jar (400gm)',
        btn: 'Add To Cart'

    },
    {
        discount: 'Save Rs 2.00',
        imgSrc: "https://qne.com.pk/cdn/shop/products/orgsize_42457National_20Tomato_20Ketchup_20800_20Gm_200x.jpg?v=1663831905",
        price: 'Rs 428.00',
        info: 'National Tomato Ketchup large Pack (800 gm)',
        btn: 'Add To Cart'

    }
];

const container2 = document.getElementById("container2");
objectsData2.forEach(data => {
    const object2 = document.createElement("div");
    object2.classList.add("object2");

    const para1 = document.createElement("p");
    para1.textContent = data.discount;
    para1.classList.add('red_para');
    object2.appendChild(para1);

    const img = document.createElement("img");
    img.src = data.imgSrc;
    img.alt = "Image";
    img.classList.add('img_size');
    object2.appendChild(img);

    const para2 = document.createElement("h3");
    para2.textContent = data.price;
    para2.classList.add('price');
    object2.appendChild(para2);

    const para3 = document.createElement("p");
    para3.textContent = data.info;
    object2.appendChild(para3);



    const btn = document.createElement("button");
    btn.textContent = "Add to cart";
    btn.classList.add('btn_size');
    btn.style.width = '100%';
    btn.style.backgroundColor = 'rgb(219, 219, 219)';
    btn.style.borderRadius = '3px';
    btn.style.border = 'none';
    btn.style.fontSize = 'larger';

    const svg = `<svg class="cart_btn"
xmlns="http://www.w3.org/2000/svg"
viewBox="0 0 576 512"><!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
<path
    d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" />
</svg>`;

    btn.innerHTML = `${svg}${btn.textContent}`;
    object2.appendChild(btn);

    // Add event listener to the button
    btn.addEventListener('click', add_to_cart);


    container2.appendChild(object2);
});




// object 3





const objectsData3 = [
    {
        discount: 'Save Rs 5.00',
        imgSrc: "https://qne.com.pk/cdn/shop/products/orgsize_936Recipe_20_121_400x.jpg?v=1623841116",
        price: 'Rs 315.00/-',
        info: 'Dove Nourishing Soap With Moroccan Argan Oil 90g',
        btn: 'Add To Cart'

    },
    {
        discount: 'Save Rs 20.00',
        imgSrc: "https://qne.com.pk/cdn/shop/products/orgsize_93143_400x.jpg?v=1623841109",
        price: 'Rs 180.00/-',
        info: 'Slice Mango Juice heavenly flavour of mango pulp 1 Litre',
        btn: 'Add To Cart'

    },
    {
        discount: 'Save Rs 5.00',
        imgSrc: "https://qne.com.pk/cdn/shop/products/orgsize_933Recipe_20_51_400x.jpg?v=1623841112",
        price: 'Rs 195.00/-',
        info: ' Shan Garlic Paste Spicy Flavour (310 gm)',
        btn: 'Add To Cart'

    },
    {
        discount: 'Save Rs 5.00',
        imgSrc: "https://qne.com.pk/cdn/shop/products/orgsize_412951126_thumb_img_400x.jpg?v=1623938910",
        price: 'Rs 120.00/-',
        info: 'Max Lemon Dishwash Paste Green Jar (400gm)',
        btn: 'Add To Cart'

    },
    {
        discount: 'Save Rs 2.00',
        imgSrc: "https://qne.com.pk/cdn/shop/products/orgsize_944Spices-4_600x.jpg?v=1623841128",
        price: 'Rs 428.00',
        info: 'National Tomato Ketchup large Pack (800 gm)',
        btn: 'Add To Cart'

    }
];

const container3 = document.getElementById("container3");
objectsData3.forEach(data => {
    const object3 = document.createElement("div");
    object3.classList.add("object3");

    const para1 = document.createElement("p");
    para1.textContent = data.discount;
    para1.classList.add('red_para');
    object3.appendChild(para1);

    const img = document.createElement("img");
    img.src = data.imgSrc;
    img.alt = "Image";
    img.classList.add('img_size');
    object3.appendChild(img);

    const para2 = document.createElement("h3");
    para2.textContent = data.price;
    para2.classList.add('price');
    object3.appendChild(para2);

    const para3 = document.createElement("p");
    para3.textContent = data.info;
    object3.appendChild(para3);



    const btn = document.createElement("button");
    btn.textContent = "Add to cart";
    btn.classList.add('btn_size');

    // Apply styles to the button
    btn.style.width = '100%';
    btn.style.backgroundColor = 'rgb(219, 219, 219)';
    btn.style.borderRadius = '3px';
    btn.style.border = 'none';
    btn.style.fontSize = 'larger';

    const svg = `<svg class="cart_btn"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 576 512"><!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
    <path
        d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" />
</svg>`;

    btn.innerHTML = `${svg}${btn.textContent}`;
    object3.appendChild(btn);



    container3.appendChild(object3);

    btn.innerHTML = `${svg}${btn.textContent}`;
    object3.appendChild(btn);

    // Add event listener to the button
    btn.addEventListener('click', add_to_cart);


    container3.appendChild(object3);
});








const object4 = [
    {
        discount: 'Save Rs 5.00',
        imgSrc: "https://qne.com.pk/cdn/shop/products/NationalZaiqaydaarSabziGoshtRecipeMix21gm_522cb9b7-b2ac-4585-aa3f-cf2acba83121_300x.jpg?v=1635405034",
        price: 'Rs 115.00/-',
        info: 'National Zaiqaydaar Sabzi Gosht Recipe Mix 21gm        ',
        btn: 'Add To Cart'

    },
    {
        discount: 'Save Rs 5.00',
        imgSrc: "https://qne.com.pk/cdn/shop/products/NationalMazedaarDaalRecipeMix46gm_300x.jpg?v=1631872021",
        price: 'Rs 120.00/-',
        info: 'Slice Mango Juice heavenly flavour of mango pulp 1 Litre',
        btn: 'Add To Cart'

    },
    {
        discount: 'Save Rs 5.00',
        imgSrc: "https://qne.com.pk/cdn/shop/products/orgsize_15373WhatsApp_20Image_202023-05-08_20at_202.01.50_20PM_300x.jpg?v=1683536741",
        price: 'Rs 130.00/-',
        info: ' National Bombay Biryani Masala 110gm',
        btn: 'Add To Cart'

    },
    {
        discount: 'Save Rs 5.00',
        imgSrc: "https://qne.com.pk/cdn/shop/products/orgsize_330national-salt5_400x.jpg?v=1623840388",
        price: 'Rs 120.00/-',
        info: 'National Iodized Double Refined Salt 800 gm        ',
        btn: 'Add To Cart'

    },
    {
        discount: 'Save Rs 2.00',
        imgSrc: "https://qne.com.pk/cdn/shop/products/orgsize_47217broast_20Masala_300x.jpg?v=1657439504",
        price: 'Rs 110.00',
        info: 'National Tomato Ketchup large Pack (800 gm)',
        btn: 'Add To Cart'

    }
];

const container4 = document.getElementById("container4");
object4.forEach(data => {
    const object4 = document.createElement("div");
    object4.classList.add("object4");

    const para1 = document.createElement("p");
    para1.textContent = data.discount;
    para1.classList.add('red_para');
    object4.appendChild(para1);

    const img = document.createElement("img");
    img.src = data.imgSrc;
    img.alt = "Image";
    img.classList.add('img_size');
    object4.appendChild(img);

    const para2 = document.createElement("h3");
    para2.textContent = data.price;
    para2.classList.add('price');
    object4.appendChild(para2);

    const para3 = document.createElement("p");
    para3.textContent = data.info;
    object4.appendChild(para3);



    const btn = document.createElement("button");
    btn.textContent = "Add to cart";
    btn.classList.add('btn_size');

    // Apply styles to the button
    btn.style.width = '100%';
    btn.style.backgroundColor = 'rgb(219, 219, 219)';
    btn.style.borderRadius = '3px';
    btn.style.border = 'none';
    btn.style.fontSize = 'larger';

    const svg = `<svg class="cart_btn"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 576 512"><!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
    <path
        d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" />
</svg>`;

    btn.innerHTML = `${svg}${btn.textContent}`;
    object4.appendChild(btn);



    container4.appendChild(object4);
    btn.innerHTML = `${svg}${btn.textContent}`;
    object4.appendChild(btn);

    // Add event listener to the button
    btn.addEventListener('click', add_to_cart);


    container4.appendChild(object4);
});






var count = 0

function add_to_cart() {
    let a = document.getElementsByClassName('price');
    let b = document.getElementsByClassName('');
    document.getElementById('countValue').innerText = count;

    count = count + 1
    console.log(count)



    console.log(a);
}
add_to_cart();


function log_out() {
    alert('Log out  Successfully Done')
}
