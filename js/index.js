const iphone = {
    "id": 2,
    "title": "iPhone X",
    "description": "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
    "price": 899,
    "discountPercentage": 17.94,
    "rating": 4.44,
    "stock": 34,
    "brand": "Apple",
    "category": "smartphones",
    "thumbnail": "https://i.dummyjson.com/data/products/2/thumbnail.jpg",
    "images": [
    "https://i.dummyjson.com/data/products/2/1.jpg",
    "https://i.dummyjson.com/data/products/2/2.jpg",
    "https://i.dummyjson.com/data/products/2/3.jpg",
    "https://i.dummyjson.com/data/products/2/thumbnail.jpg"
    ]
    } 

function fLoad(){
    var price= document.getElementById("price");
    var category= document.getElementById("category");
    var stock= document.getElementById("stock");
    var title= document.getElementById("title");
    var img= document.getElementById("img");
    var description= document.getElementById("description");
    
    price.innerHTML=iphone.price
    category.innerHTML=iphone.category
    stock.innerHTML=iphone.stock
    title.innerHTML=iphone.title
    description.innerHTML=iphone.description
    img.src=iphone.images[3]
    
    }

function fLoadOverHTTP(){
    alert("test")
    fetch("https://dummyjson.com/products").then(fOKREsponse).catch(fNoResponse)
}

function fOKREsponse(response){
    response.json().then(fOKData).catch(fNoData)
}

function fNoResponse(error){
    alert("auncune reponse recue")
}

function fOKData(data){
    //var x=`texte ${expression} texte`
    console.log(data.products)
    
    //alert(data.products.length)
    alert("test")
    
    var numero= document.getElementById("numero");
    i=parseint(numero)
    if (i<30){
        i=i+1
        numero.innerhtml=i

    }
    alert(i)
    const nouveauproduct = data.products[2];

    var price= document.getElementById("price");
    var category= document.getElementById("category");
    var stock= document.getElementById("stock");
    var title= document.getElementById("title");
    var img= document.getElementById("img");
    var description= document.getElementById("description");
    
    price.innerHTML=nouveauproduct.price
    category.innerHTML=nouveauproduct.category
    stock.innerHTML=nouveauproduct.stock
    title.innerHTML=nouveauproduct.title
    description.innerHTML=nouveauproduct.description
    img.src=nouveauproduct.images[3]
    }

function fNoData(error){
    alert("pas de donnes")
}