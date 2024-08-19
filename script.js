// Gallary For Cake
const imagesOne = ["https://toujours.co.in/cdn/shop/products/mint-chocolate-cake-toujours-online.jpg?v=1681717480"
    , "https://cakexhub.oadigitalhub.com/wp-content/uploads/2023/11/black-forest-cake-half-kg-eggless_1.webp"
    , "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfDYo5A9ZUWqXHSU8b3eLEEK3U7tC7lFNxPQ&s"
    ,"https://livforcake.com/wp-content/uploads/2017/07/black-forest-cake-thumb-500x375.jpg"
    ,"https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/0A475B34-4E78-40D8-9F30-46223B7D77E7/Derivates/E55C7EA4-0E60-403F-B5DC-75EA358197BD.jpg"];
let currentImageIndex = 0;

function changeImage() {
    currentImageIndex = (currentImageIndex + 1) % imagesOne.length;
    const recipeImage = document.getElementById('recipe-image-one');
    recipeImage.style.opacity = 0;
    setTimeout(() => {
        recipeImage.src = imagesOne[currentImageIndex];
        recipeImage.style.opacity = 1;
    }, 500);
}

setInterval(changeImage, 5000);

// Gallary For Chicken
const imagesTwo = ["https://www.allrecipes.com/thmb/APtZNY1GgOf3Ph0JUc-j4dImjrU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/2467480-southern-bbq-chicken-Allrecipes-Magazine-4x3-1-3e180dccbaae446c8c2d05f708611fc6.jpg"
    ,"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStdU4-CJrONBL25pYdZbjZ3iwR1MsKHx8A1g&s",
    , "https://www.cookinwithmima.com/wp-content/uploads/2021/06/Grilled-BBQ-Chicken.jpg"
    ,"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRqk3rtk1UETjJW55fwZAvXjQZ_YaQw7H6xQ&s"
];
let currentImageIndex_two = 0;

function changeImage_two() {
    currentImageIndex_two = (currentImageIndex_two + 1) % imagesTwo.length;
    const recipeImage_two = document.getElementById('recipe-image');
    recipeImage_two.style.opacity = 0;
    setTimeout(() => {
        recipeImage_two.src = imagesTwo[currentImageIndex_two];
        recipeImage_two.style.opacity = 1;
    }, 500);
}
setInterval(changeImage_two, 5000);