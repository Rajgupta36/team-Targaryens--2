var cart = document.querySelector("#cartbut")
var cartpage = document.querySelector("#cart")
var cancel = document.querySelector("#cancel")

cart.addEventListener("click", function(){
    cartpage.style.transform="translateY(0)"
})

cancel.addEventListener("click", function(){
    cartpage.style.transform="translateY(-100%)"
})


var adults=[

    {
        img1:"https://dryrobe.com/cdn/shop/files/female-adult-advance-blackblue-1.jpg?v=1704895618&width=2400",
        img2:"https://dryrobe.com/cdn/shop/files/female-adult-advance-blackcamopink-1.jpg?v=1704896116&width=2400",
        name:"dryrobeadvance Long Sleeve",
        price:"300",
    },
    
    {
        img1:"https://dryrobe.com/cdn/shop/files/male-adult-advance-forestgreen-1.jpg?v=1704895984&width=2400",
        img2:"https://dryrobe.com/cdn/shop/files/female-adult-advance-blackblue-1.jpg?v=1704895618&width=2400",
        name:"dryrobeadvance Long Sleeve",
        section:"Adults",
        price:"320",
    },
    
    {
        img1:"https://dryrobe.com/cdn/shop/files/female-adult-advance-blackcamopink-1.jpg?v=1704896116&width=2400",
        img2:"https://dryrobe.com/cdn/shop/files/female-adult-advance-blackcamopink-1.jpg?v=1704896116&width=2400",
        name:"dryrobeadvance Long Sleeve",
        section:"Adults",
    
        price:"400",
    },
    
    {
        img1:"https://dryrobe.com/cdn/shop/files/Male-Black-Camo-Black-1_e20ff331-0e64-4dd4-bc09-2bf20050159e.jpg?v=1704896057&width=2400",
        img2:"https://dryrobe.com/cdn/shop/files/Male-Black-Camo-Black-1_e20ff331-0e64-4dd4-bc09-2bf20050159e.jpg?v=1704896057&width=2400",
        name:"dryrobeadvance Long Sleeve",
        section:"Adults",
    
        price:"340",
    },
    
    {
        img1:"https://dryrobe.com/cdn/shop/files/female-adult-advance-blackblue-1.jpg?v=1704895618&width=2400",
        img2:"https://dryrobe.com/cdn/shop/files/female-adult-advance-blackblue-1.jpg?v=1704895618&width=2400",
        name:"dryrobeadvance Long Sleeve",
        section:"Adults",
    
        price:"390",
    }
    
    
    
    ]
    
    
    var kids=[
    
        {
            img1:"https://dryrobe.com/cdn/shop/files/kids-advance-LS-CamoGrey-1_cdd1c6db-4cef-483a-b1cf-dbab01fb2023.jpg?v=1705921994&width=2400",
            img2:"https://dryrobe.com/cdn/shop/files/kids-advance-LS-CamoGrey-1_cdd1c6db-4cef-483a-b1cf-dbab01fb2023.jpg?v=1705921994&width=2400",
            name:"dryrobeadvance Long Sleeve",
            price:"300",
        },
        
        {
            img1:"https://dryrobe.com/cdn/shop/files/kids-advance-SS-blackgrey-1.jpg?v=1708420166&width=2400",
            img2:"https://dryrobe.com/cdn/shop/files/kids-advance-SS-blackgrey-1.jpg?v=1708420166&width=2400",
            name:"dryrobeadvance Long Sleeve",
            section:"Adults",
            price:"320",
        },
        
        {
            img1:"https://dryrobe.com/cdn/shop/files/kids-advance-LS-blackblue-1_cb911255-43f2-4cbf-84f8-e7ad50d5ff8c.jpg?v=1705921915&width=2400",
            img2:"https://dryrobe.com/cdn/shop/files/kids-advance-LS-blackblue-1_cb911255-43f2-4cbf-84f8-e7ad50d5ff8c.jpg?v=1705921915&width=2400",
            name:"dryrobeadvance Long Sleeve",
            section:"Adults",
        
            price:"400",
        },
        
        {
            img1:"https://dryrobe.com/cdn/shop/files/kids-advance-SS-blackpink-1_e9d2b239-6be8-423e-b25a-3117a7144845.jpg?v=1706002419&width=2400",
            img2:"https://dryrobe.com/cdn/shop/files/kids-advance-SS-blackpink-1_e9d2b239-6be8-423e-b25a-3117a7144845.jpg?v=1706002419&width=2400",
            name:"dryrobeadvance Long Sleeve",
            section:"Adults",
        
            price:"340",
        },
        
        {
            img1:"https://dryrobe.com/cdn/shop/files/kids-advance-SS-blackblue-1_6fe5649c-993a-4383-b17a-45bf0584a083.jpg?v=1705921567&width=2400",
            img2:"https://dryrobe.com/cdn/shop/files/kids-advance-SS-blackblue-1_6fe5649c-993a-4383-b17a-45bf0584a083.jpg?v=1705921567&width=2400",
            name:"dryrobeadvance Long Sleeve",
            section:"Adults",
        
            price:"390",
        }
        
        
        
        ]
        
    var accessories=[
    
        {
            img1:"https://dryrobe.com/cdn/shop/files/compression-backpack-accessory-1.jpg?v=1704362852&width=2400",
            img2:"https://dryrobe.com/cdn/shop/files/compression-backpack-accessory-1.jpg?v=1704362852&width=2400",
            name:"dryrobecompression bagPack",
            price:"300",
        },
        
        {
            img1:"https://dryrobe.com/cdn/shop/files/single-seat-cover-pink-accessory-1.jpg?v=1704362443&width=2400",
            img2:"https://dryrobe.com/cdn/shop/files/single-seat-cover-pink-accessory-1.jpg?v=1704362443&width=2400",
            name:"dryrobeadvance car SeatCover",
            section:"Adults",
            price:"320",
        },
        
        {
            img1:"https://dryrobe.com/cdn/shop/files/beanie-Black-1.jpg?v=1701184075&width=2400",
            img2:"https://dryrobe.com/cdn/shop/files/beanie-Black-1.jpg?v=1701184075&width=2400",
            name:"dryrobe Beanie",
            section:"Adults",
        
            price:"400",
        },
        
        {
            img1:"https://dryrobe.com/cdn/shop/files/compression-bag-accessory-1.jpg?v=1704362765&width=2400",
            img2:"https://dryrobe.com/cdn/shop/files/compression-bag-accessory-1.jpg?v=1704362765&width=2400",
            name:"dryrobeadvance Long Sleeve",
            section:"Adults",
        
            price:"340",
        },
        
        {
            img1:"https://dryrobe.com/cdn/shop/files/change-mat-red-accessory-1.jpg?v=1704363077&width=2400",
            img2:"https://dryrobe.com/cdn/shop/files/change-mat-red-accessory-1.jpg?v=1704363077&width=2400",
            name:"dryrobeadvance Travel bag",
            section:"Adults",
        
            price:"390",
        }
        
        
    ]
    
    var clutter="";
        
        adults.forEach(function(elm){
        
            
        
            clutter += `   <div class="pro">
            <div class="img">
                <img src="${elm.img1}" alt="">
                <img src="${elm.img2}" alt="">
            </div>
               <h3>${elm.name}</h3> 
        
                <div class="size">
                    <h2>Select Size</h2>
                    <h4><span>S</span> <span>M</span> <span>L</span> <span>Xl</span></h4>
                </div>
        
               <h5>$ ${elm.price}</h5>   
               
               <button>Add to Cart</button>
        </div>`
        
        
        
        
        
        })
        document.querySelector(".products").innerHTML=clutter;
        
        
        
    
    
    var cat=document.querySelectorAll(".nav h2")
    var idx=0;
    cat.forEach(function(elm){
        elm.addEventListener("click",function(){
            idx=elm.id;
            
    
    if(idx==0){
        
        var clutter="";
        
        adults.forEach(function(elm){
        
            
        
            clutter += `   <div class="pro">
            <div class="img">
                <img src="${elm.img1}" alt="">
                <img src="${elm.img2}" alt="">
            </div>
               <h3>${elm.name}</h3> 
        
                <div class="size">
                    <h2>Select Size</h2>
                    <h4><span>S</span> <span>M</span> <span>L</span> <span>Xl</span></h4>
                </div>
        
               <h5>$ ${elm.price}</h5>   
               
               <button>Add to Cart</button>
        </div>`
        
        
        
        
        
        })
        document.querySelector(".products").innerHTML=clutter;
        
        
        
        
        
        
        
        }
        else if(idx==1){
            
        var clutter="";
        
        kids.forEach(function(elm){
        
            
        
            clutter += `   <div class="pro">
            <div class="img">
                <img src="${elm.img1}" alt="">
                <img src="${elm.img2}" alt="">
            </div>
               <h3>${elm.name}</h3> 
        
                <div class="size">
                    <h2>Select Size</h2>
                    <h4><span>S</span> <span>M</span> <span>L</span> <span>Xl</span></h4>
                </div>
        
               <h5>$ ${elm.price}</h5>   
               
               <button>Add to Cart</button>
        </div>`
        
        
        
        
        
        })
        document.querySelector(".products").innerHTML=clutter;
        
        
        
        
        
        
        
        }
        else if(idx==2){
            var clutter="";
        
            accessories.forEach(function(elm){
        
            
        
            clutter += `   <div class="pro">
            <div class="img">
                <img src="${elm.img1}" alt="">
                <img src="${elm.img2}" alt="">
            </div>
               <h3>${elm.name}</h3> 
        
                <div class="size">
                    <h2>Select Size</h2>
                    <h4><span>S</span> <span>M</span> <span>L</span> <span>Xl</span></h4>
                </div>
        
               <h5>$ ${elm.price}</h5>   
               
               <button>Add to Cart</button>
        </div>`
        
        
        
        
        
        })
        document.querySelector(".products").innerHTML=clutter;
        
        
        
        
        
        
    
        }
        
            
        })
    })
    
    function cursor(){
        var cur=document.querySelector("#cursor");
    var page=document.querySelector(".centre")
    
    page.addEventListener("mousemove",function(dets){
         gsap.to("#cursor",{
            x:(dets.x-70)+"px",
            y:(dets.y-20)+"px"
         })
    })
    
    page.addEventListener("mouseenter",function(){
        gsap.to("#cursor",{
            scale:1,
            opacity:1
        })
    })
    page.addEventListener("mouseleave",function(){
        gsap.to("#cursor",{
            scale:0,
            opacity:0
        })
    })
    }
    cursor()
    
    
    
    
    
    gsap.from("#page3 .box h1",{
        y:100,
       
    
    
    
    })
    
    gsap.from(".text .box1 h1",{
        y:220,
        opacity:0,
        stagger:0.1,
       
    })