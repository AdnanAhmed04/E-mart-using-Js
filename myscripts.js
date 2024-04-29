let our_collection_images_info = [
    {
        img: 'https://qne.com.pk/cdn/shop/files/Pepsico_image_300x.png?v=1711968189',
        para: 'Pepsico'
    },
    {
        img: 'https://qne.com.pk/cdn/shop/files/WhatsApp_Image_2024-04-02_at_2.52.16_PM_300x.jpg?v=1712052413',
        para: 'Hilal'
    },
    {
        img: 'https://qne.com.pk/cdn/shop/files/Bundles_Discount_Offer_Image_300x.png?v=1711968143',
        para: 'Bundles & Discount'
    },
    {
        img: 'https://qne.com.pk/cdn/shop/files/WhatsApp_Image_2024-04-01_at_2.02.26_PM_300x.jpg?v=1711962170',
        para: 'Baby'

    }
    ,
    {
        img: 'https://qne.com.pk/cdn/shop/files/Groery_imge_300x.png?v=1711968219',
        para: 'Bundles & Discount'
    }
];


for (let i = 0; i < 5; i++) {
    // Create image element
    let imgElement = document.createElement('img');
    imgElement.src = our_collection_images_info[i].img;
    imgElement.alt = our_collection_images_info[i].para;

    let paraElement = document.createElement('p');
    paraElement.textContent = our_collection_images_info[i].para;
    document.getElementById('collection_img').appendChild(imgElement);
    document.getElementById('collection_info').appendChild(paraElement);
}