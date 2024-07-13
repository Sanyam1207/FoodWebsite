const sampleListing = [
        {
                title: "Hot Dog",
                description: "Tasty and Spicy Hotdog",
                price: 79,
                restaurantName: "Taco Bell",
                image: { 
                        fileName: "listing Image", 
                        url: "https://i.pinimg.com/564x/e3/dd/73/e3dd731d31359cf9616ea9952ded412d.jpg" 
                }
        },
        {
                title: "Burger",
                description: "Juicy beef burger with cheese",
                price: 120,
                restaurantName: "Burger King",
                image: { 
                        fileName: "listing Image", 
                        url: "https://i.pinimg.com/564x/fc/e4/a8/fce4a80f11a3b6d1e53e3b234d878b53.jpg" 
                }
        },
        {
                title: "Pizza",
                description: "Cheesy pepperoni pizza",
                price: 250,
                restaurantName: "Pizza Hut",
                image: { 
                        fileName: "listing Image", 
                        url: "https://i.pinimg.com/564x/b3/5c/6b/b35c6bfab7c1690f2d0430c59730fc42.jpg" 
                }
        },
        {
                title: "Sushi",
                description: "Fresh sushi platter",
                price: 350,
                restaurantName: "Sushi Express",
                image: { 
                        fileName: "listing Image", 
                        url: "https://i.pinimg.com/736x/fc/b5/96/fcb596a832f5460dc3c8ade4d657d8a2.jpg" 
                }
        },
        {
                title: "Tacos",
                description: "Authentic Mexican tacos",
                price: 100,
                restaurantName: "El Mexicano",
                image: { 
                        fileName: "listing Image", 
                        url: "https://i.pinimg.com/564x/b1/63/56/b1635666e72948cfe9c4509a1e53f16f.jpg" 
                }
        },
        {
                title: "Pasta",
                description: "Creamy Alfredo pasta",
                price: 150,
                restaurantName: "Olive Garden",
                image: { 
                        fileName: "listing Image", 
                        url: "https://i.pinimg.com/564x/c5/2d/45/c52d454bf256841ea8934cd3d760d7b1.jpg" 
                }
        },
        {
                title: "Salad",
                description: "Healthy green salad",
                price: 90,
                restaurantName: "Salad Stop",
                image: { 
                        fileName: "listing Image", 
                        url: "https://i.pinimg.com/564x/18/18/1e/18181e568097ee606b826916a58563ec.jpg" 
                }
        },      
        {
                title: "Steak",
                description: "Grilled ribeye steak",
                price: 400,
                restaurantName: "Steak House",
                image: { 
                        fileName: "listing Image", 
                        url: "https://i.pinimg.com/564x/4d/fb/44/4dfb44ec7952171f9681ad917efd55d9.jpg" 
                }
        },
        {
                title: "Ice Cream",
                description: "Vanilla ice cream with toppings",
                price: 50,
                restaurantName: "Cold Stone Creamery",
                image: { 
                        fileName: "listing Image", 
                        url: "https://i.pinimg.com/564x/41/27/02/4127023ca5b27208054096b2ed83f7bf.jpg" 
                }
        },
        {
                title: "Fried Chicken",
                description: "Crispy fried chicken",
                price: 130,
                restaurantName: "KFC",
                image: { 
                        fileName: "listing Image", 
                        url: "https://i.pinimg.com/736x/03/1a/b8/031ab8093f74c9189beae5a47e35c555.jpg" 
                }
        },
        {
                title: "Nachos",
                description: "Loaded nachos with cheese",
                price: 110,
                restaurantName: "Taco Bell",
                image: { 
                        fileName: "listing Image", 
                        url: "https://i.pinimg.com/736x/a3/2d/fd/a32dfd6170f731e1835a98992352ccbd.jpg" 
                }
        },
        {
                title: "Sandwich",
                description: "Ham and cheese sandwich",
                price: 70,
                restaurantName: "Subway",
                image: { 
                        fileName: "listing Image", 
                        url: "https://i.pinimg.com/736x/47/ff/b2/47ffb28d1e7f39593cfa8ec48f1a9d60.jpg" 
                }
        },
        {
                title: "Dumplings",
                description: "Steamed chicken dumplings",
                price: 100,
                restaurantName: "Dumpling House",
                image: { 
                        fileName: "listing Image", 
                        url: "https://i.pinimg.com/564x/4d/e5/49/4de54962e6947b40fbf1e840b9e05dfe.jpg" 
                }
        },
        {
                title: "Ramen",
                description: "Spicy miso ramen",
                price: 200,
                restaurantName: "Ramen Shop",
                image: { 
                        fileName: "listing Image", 
                        url: "https://i.pinimg.com/564x/a9/72/c8/a972c8afa92d6ca3db180431ffb64d09.jpg" 
                }
        },
        {
                title: "Falafel",
                description: "Crispy falafel with tahini",
                price: 90,
                restaurantName: "Middle Eastern Delights",
                image: { 
                        fileName: "listing Image", 
                        url: "https://i.pinimg.com/736x/99/f2/d1/99f2d1847abdb85289aaf2f4b96ac0c1.jpg" 
                }
        },
        {
                title: "Crepe",
                description: "Sweet crepe with chocolate",
                price: 70,
                restaurantName: "Crepe Cafe",
                image: { 
                        fileName: "listing Image", 
                        url: "https://i.pinimg.com/564x/d0/cb/9f/d0cb9fb3ba892de68e3c9ff8cbd2a170.jpg" 
                }
        },
        {
                title: "Smoothie",
                description: "Mixed berry smoothie",
                price: 60,
                restaurantName: "Smoothie King",
                image: { 
                        fileName: "listing Image", 
                        url: "https://i.pinimg.com/736x/98/36/27/983627486778bea5842691e2bcd7fe51.jpg" 
                }
        },
        {
                title: "Pancakes",
                description: "Fluffy pancakes with syrup",
                price: 80,
                restaurantName: "IHOP",
                image: { 
                        fileName: "listing Image", 
                        url: "https://i.pinimg.com/736x/98/6e/80/986e8020d901fe1c313e9460495ec5c3.jpg" 
                }
        },
        {
                title: "Wings",
                description: "Spicy buffalo wings",
                price: 150,
                restaurantName: "Wing Stop",
                image: { 
                        fileName: "listing Image", 
                        url: "https://i.pinimg.com/564x/8d/18/3b/8d183b03792fdcf4f08d896efbbfb139.jpg" 
                }
        },
        {
                title: "BBQ Ribs",
                description: "Smoky BBQ ribs",
                price: 300,
                restaurantName: "BBQ Joint",
                image: { 
                        fileName: "listing Image", 
                        url: "https://i.pinimg.com/564x/66/9e/c6/669ec6cf8bbd21e6807b7f98140f0ba8.jpg" 
                }
        },
        {
                title: "Cupcake",
                description: "Chocolate cupcake with frosting",
                price: 40,
                restaurantName: "Cupcake Bakery",
                image: { 
                        fileName: "listing Image", 
                        url: "https://i.pinimg.com/736x/ac/20/ef/ac20eff78b3f9b47019bf5cdf941478a.jpg" 
                }
        },
        {
                title: "Curry",
                description: "Spicy chicken curry",
                price: 180,
                restaurantName: "Curry House",
                image: { 
                        fileName: "listing Image", 
                        url: "https://i.pinimg.com/564x/ba/94/c7/ba94c70d724de3ef416c026dcb92af02.jpg" 
                }
        },
        {
                title: "Samosa",
                description: "Crispy potato samosas",
                price: 50,
                restaurantName: "Indian Delights",
                image: { 
                        fileName: "listing Image", 
                        url: "https://i.pinimg.com/736x/ba/54/7e/ba547ea90b4e45c5c13b7950cfc51c6a.jpg" 
                }
        }
];

module.exports = {data : sampleListing};