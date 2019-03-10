//MAKING ORDERS AND ADDING TO CART
document.getElementsByClassName('cartBtns')[0].addEventListener('click', addToCart);
function addToCart()
{
    var getToken=sessionStorage.getItem('Access_Token');
    var getUsername=sessionStorage.getItem('Username');
    var getName=document.getElementsByClassName('spH')[0].innerHTML;
    document.getElementsByClassName('cartBtns')[0].innerHTML="Added";
    fetch('https://foodhub-delivery.herokuapp.com/user/orders'+'/'+getUsername+'?token='+getToken, {
        method:'POST',
        headers:{
            'Accept':'application/json, text/plain, */*',
            'Content-type':'application/json'
        },
            
        body:JSON.stringify({Name:getName})
        })
}

document.getElementsByClassName('cartBtns')[1].addEventListener('click', addToCart1);
function addToCart1()
{
    document.getElementsByClassName('cartBtns')[1].innerHTML="Added"
    var getToken=sessionStorage.getItem('Access_Token');
    var getUsername=sessionStorage.getItem('Username');
    var getName=document.getElementsByClassName('spH')[2].innerHTML;
    fetch('https://foodhub-delivery.herokuapp.com/user/orders'+'/'+getUsername+'?token='+getToken, {
        method:'POST',
        headers:{
            'Accept':'application/json, text/plain, */*',
            'Content-type':'application/json'
        },
            
        body:JSON.stringify({Name:getName})
        })
}

document.getElementsByClassName('cartBtns')[2].addEventListener('click', addToCart2);
function addToCart2()
{
    document.getElementsByClassName('cartBtns')[2].innerHTML="Added"
    var getToken=sessionStorage.getItem('Access_Token');
    var getUsername=sessionStorage.getItem('Username');
    var getName=document.getElementsByClassName('fF')[0].innerHTML;
    fetch('https://foodhub-delivery.herokuapp.com/user/orders'+'/'+getUsername+'?token='+getToken, {
        method:'POST',
        headers:{
            'Accept':'application/json, text/plain, */*',
            'Content-type':'application/json'
        },
            
        body:JSON.stringify({Name:getName})
        })
}

document.getElementsByClassName('cartBtns')[3].addEventListener('click', addToCart3);
function addToCart3()
{
    document.getElementsByClassName('cartBtns')[3].innerHTML="Added"
    var getToken=sessionStorage.getItem('Access_Token');
    var getUsername=sessionStorage.getItem('Username');
    var getName=document.getElementsByClassName('fF')[1].innerHTML;
    fetch('https://foodhub-delivery.herokuapp.com/user/orders'+'/'+getUsername+'?token='+getToken, {
        method:'POST',
        headers:{
            'Accept':'application/json, text/plain, */*',
            'Content-type':'application/json'
        },
            
        body:JSON.stringify({Name:getName})
        })
}

//To other Pages
document.getElementsByClassName('footerIcons')[0].addEventListener('click', toInns)
document.getElementsByClassName('footerIcons')[1].addEventListener('click', toMenu)
document.getElementsByClassName('footerIcons')[3].addEventListener('click', toCart)

function toInns()
{
    window.location='/phoneRest.html';
}

function toMenu()
{
    window.location='/phoneMenu.html';
}

function toCart()
{
    window.location='/phoneCart.html';
}

//After Clicking SlideShow
document.getElementsByClassName('sdImg')[0].addEventListener('click', toKfc);
function toKfc()
{
    window.location='/phoneKfc.html';
}

document.getElementsByClassName('sdImg')[1].addEventListener('click', toJavas);
function toJavas()
{
    window.location='/phoneJavas.html';
}

document.getElementsByClassName('sdImg')[2].addEventListener('click', toPizza);
function toPizza()
{
    window.location='/phonePizza.html';
}

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n)
{
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if(n > slides.length)
   {
       slideIndex = 1
   } 

  if(n < 1)
   {
       slideIndex = slides.length
   }
  
   for(i = 0; i < slides.length; i++)
    {
      slides[i].style.display = "none"; 
    }

   for(i = 0; i < dots.length; i++)
    {
      dots[i].className = dots[i].className.replace("active", " ");
    }
  
    slides[slideIndex-1].style.display = "block"; 
    dots[slideIndex-1].className += " active";
}



