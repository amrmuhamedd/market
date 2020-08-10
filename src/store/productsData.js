import shoes1 from '../assets/shoes2.jpg'
import bag1 from '../assets/bag-1.jpg'
import tishert1 from '../assets/tishrt-2.jpg'
import headphone1 from '../assets/headphone-1.jpg'
import watch1 from '../assets/watch-1.jpg'
import laptop1 from '../assets/laptop-1.jpg';
function Product(
    id ,
    category , 
    colors ,
    img ,
    title ,
    price,
    company ,
    info ,
    hasOver ,
    isNew ,
    quantity ,
    discount,
    total ,
    selled
    ){
    this.id = id;
    this.category = category;
    this.colors = colors;
    this.img = img;
    this.title = title;
    this.price = price;
    this.company = company;
    this.info = info;
    this.hasOver = hasOver;
    this.isNew = isNew;
    this.quantity = quantity;
    this.total = total;
    this.discount = discount;
    this.selled = selled;
    this.newPrice = hasOver ? price - (price * discount / 100) : price
  
};
let product1 = new Product(
     '1' ,
     "shoes" ,
      ["black" ,
       "white" ,
        'wb'] ,
         {
    master : shoes1
},  
"super star shoes",
300,
"adidas pro",
"Lorem ipsum dolorsit amet consectetur adipisicing elitIn totam non suscipit, modi laborum",
    true ,
    false ,
    0 ,
    30,
    0 ,
400
);

let product2 = new Product(
     '2',
     "shoes",
    ["black" , "white" , 'wb'],
    {
        master : bag1
    },
    "black bag",
    120,
    "camera pro",
    "Lorem ipsum dolorsit amet consectetur adipisicing elitIn totam non suscipit, modi laborum",
    false ,
    true ,
    0 ,
    20,
    0 ,
200
);

let product3 = new Product(
     '3',
    "shoes",
     ["black" , "white" , 'wb'],
    {
        master :  tishert1
    },
   "t shirt",
    200,
   "t shirt",
   
    "Lorem ipsum dolorsit amet consectetur adipisicing elitIn totam non suscipit, modi laborum",
    true ,
    true ,
    0 ,
    20,
    0 ,
900
);

let product4 = new Product(
    '4',
     "tishert",
    ["black" , "white" , 'wb'],
   {
        
        master : headphone1,  
    },
    "headphone",
    190,
   "camera pro",
    
    "Lorem ipsum dolorsit amet consectetur adipisicing elitIn totam non suscipit, modi laborum",
    
    false ,
    true ,
    0 ,
    20,
    0 ,
800
);

let product5 = new Product(
     '5',
    "watch",
     ["black" , "white" , 'wb'],
   {  
        master : watch1
    },
"watch",
   180,
   "camera pro",
    "Lorem ipsum dolorsit amet consectetur adipisicing elitIn totam non suscipit, modi laborum",
    false ,
    false ,
    0 ,
    20,
    0 ,
800
);

let product6 = new Product(
  '6',
     "laptop",
     ["black" , "white" , 'wb'],
   {
     master :  laptop1
    },
    "laptop",
   520,
   "camera pro",
  
    "Lorem ipsum dolorsit amet consectetur adipisicing elitIn totam non suscipit, modi laborum",
    true ,
    false ,
    0 ,
    25,
    0 ,
700
);
export const products = [
    product1,
   product2,
   product3,
  product4,
  product5,
  product6,
]

