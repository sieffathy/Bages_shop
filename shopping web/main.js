const items =[{ 
    Image :"picture/pexels-hoàng-ngọc-long-7407597.jpg",
    id : 1 ,
    title:"isoera 1",
    price: 60,
    amount:1,
}
,
{
    Image :"picture/juan-burgos-3_XeNGVbTQA-unsplash.jpg",
    id : 2 ,
    title:"isoera 2",
    price: 65,
    amount:1,
}
,

{
    Image :"picture/pexels-alexey-demidov-10835540.jpg",
    id : "3" ,
    title:"isoera 3",
    price: 70,
    amount:1,
}
,{
    Image :"picture/pexels-alexey-demidov-11121563.jpg",
    id : 4 ,
    title:"isoera 4",
    price: 75,
    amount:1,
}
,{
    Image :"picture/pexels-alexey-demidov-11385495.jpg",
    id : 5 ,
    title:"isoera 5",
    price: 80,
    amount:1,
}
,{
    Image :"picture/pexels-cottonbro-studio-9421389.jpg",
    id : 6 ,
    title:"isoera 6",
    price: 85,
    amount:1,
}
,{
    Image :"picture/pexels-duygu-kamar-12124617.jpg",
    id : 7 ,
    title:"isoera 7",
    price: 90,
    amount:1,
}
,{
    Image :"picture/pexels-melike-benli-7419521.jpg",
    id : 8 ,
    title:"isoera 8",
    price: 95,
    amount:1,
}
,{
    Image :"picture/pexels-the-glorious-studio-13160941.jpg",
    id : 9 ,
    title:"isoera 9",
    price: 100,
    amount:1,
}
,{
    Image :"picture/pexels-nataliya-vaitkevich-8100366.jpg",
    id : 10 ,
    title:"isoera 10",
    price: 105,
    amount:1,
},{
    Image :"picture/pexels-nataliya-vaitkevich-8100366.jpg",
    id : 11 ,
    title:"isoera 10",
    price: 105,
    amount:1,
},{
    Image :"picture/pexels-cottonbro-studio-9421389.jpg",
    id : 12 ,
    title:"isoera 6",
    price: 85,
    amount:1,
}
,{
    Image :"picture/pexels-duygu-kamar-12124617.jpg",
    id : 13 ,
    title:"isoera 7",
    price: 90,
    amount:1,
},{
    Image :"picture/pexels-alexey-demidov-11385495.jpg",
    id : 14 ,
    title:"isoera 5",
    price: 80,
    amount:1,
}
,{
    Image :"picture/pexels-alexey-demidov-11385495.jpg",
    id : 15 ,
    title:"isoera 5",
    price: 80,
    amount:1,
},
{
    Image :"picture/pexels-nataliya-vaitkevich-8100366.jpg",
    id : 11 ,
    title:"isoera 10",
    price: 105,
    amount:1,
}

]

function openNav() {
    document.getElementById("mySidenav").style.width = "100%";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }
  



// rendearItems

let prodection = document.querySelector(".prodection")
let showItem =""

function rendearItems(){
    items.forEach(item => {

        showItem +=`
        <div class="row prodect col-lg-3 col-md-6 col-sm-12">
   
        <lord-icon "
        src="https://cdn.lordicon.com/mfmkufkr.json" 
            trigger="hover"
                style="width:70px;height:70px" 
                data-id="${item.id}"
                class="cart-shopping"  >
    </lord-icon>

        <img src="${item.Image}" alt="">

        <p>
            <h4>${item.title}</h4>
            <h5>${item.price}</h5>
            <h6>${item.amount}</h6>
            
        </p>
         
    </div>
    `

    prodection.innerHTML = showItem

})
}
rendearItems();
 



// rendearItemsTwo

let prodection_2 = document.querySelector(".prodection_2")
let showItem_2 ="";
function rendearItemsTwo(){
    items.forEach(item => {

        showItem_2 +=`
        <div class="row prodect col-lg-3 col-md-6 col-sm-12">
   
        <lord-icon "
        src="https://cdn.lordicon.com/mfmkufkr.json" 
            trigger="hover"
                style="width:70px;height:70px" 
                data-id="${item.id}"
                class="cart-shopping"  >
    </lord-icon>

        <img src="${item.Image}" alt="">

        <p>
            <h4>${item.title}</h4>
            <h5>${item.price}</h5>
            <h6>${item.amount}</h6>
            
        </p>
         
    </div>
    `

    prodection_2.innerHTML = showItem_2

})
}
rendearItemsTwo();

// add to cart





    let icon_cart = document.querySelectorAll("lord-icon");
    let cartItems = [];
  


 icon_cart.forEach(btn =>{
    btn.addEventListener("click" , ()=>{
          let id = btn.dataset.id 
        items.find(item => {
            if (item.id == id) {
               if (cartItems.some(sief => sief.id == id )) {
                alert('product already exist')
               }else{
                cartItems.push(item)
               } 
        }
        })
        
        addToAside()
    })
 })


let cartAside = "";
let titleName ="";
let Aside = document.querySelector(".another_div");

function addToAside(){
    cartAside = ""
    cartItems.forEach(item =>{
        
        titleName =`
        <div class="part_1">
    <section class="adress_cart">
        <h1>ID</h1>
        <h1>IMAGE</h1>
        <h1 style="margin-left: 50px;"> PRICE</h1>
        <h1 style="margin-right: 60px;">AMOUNT</h1>
        <h1 class="title">TITLE</h1>
        <h1 class="title_1">All PRICE </h1>
        <button onclick="deleteItemAll()">Delete All</button>

    </section>
    </div>        
    `

   
        cartAside +=`  

        <div class="part_2">
        <section class="adress_cart2">
            <h4 style="margin-left: 20px;" >${item.id}</h4>
            <h4><img src="${item.Image}" alt=""></h4>
            <h4 style="margin-right: 30px;" >${item.price}$</h4>  
            <h4>
                  <button class="dicrease" onclick=" ubdate('dicrease' , '${item.id}')">-</button>
                  <button class="amount-cart">${item.amount}</button>
                  <button class="increase" onclick=" ubdate('increase' ,'${item.id}')">+</button> 
               </h4> 
              <h4 class="all_price">${item.title}</h4>
              <h4 class="all_price">${item.price * item.amount}$</h4>
              <h6><button onclick="deleteItem(${item.id})">Delete</button></h6>
        </section> 
        </div> 

        `    

    })
        Aside.innerHTML= titleName + cartAside   

        document.querySelector(".zero").innerHTML = cartItems.length;

}

addToAside()
  

 
// update cart


function ubdate(action , id){
cartItems.find(item=>{
    if (item.id == id) {
        if (action == 'increase') {
         item.amount += 1
            
        }else { 
            if (item.amount >1) {
                item.amount -= 1}
                else{alert("at lesst number is One")}            
            }
        
            addToAside()
    } 
})
}
 
// delete button

function deleteItem(id){
    cartItems = cartItems.filter(sief=> sief.id !=id)
    addToAside()

}
// delete all button
  
function deleteItemAll(){
  cartItems =[]
  addToAside()
}




