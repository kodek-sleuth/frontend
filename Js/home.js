function hideRest()
{
    document.getElementById('secondOne').style.display='none';
    document.getElementById('thirdOne').style.display='none';

}
hideRest()

document.getElementsByClassName('Icright')[0].addEventListener('click', showCafe);
function showCafe()
{
    document.getElementById('firstOne').style.display='none';
    $(function()
    {
        $('#secondOne').show()
    }
)

}

document.getElementsByClassName('Icright')[1].addEventListener('click', showPizza);
function showPizza()
{
    document.getElementById('secondOne').style.display='none';
    $(function()
    {
        $('#thirdOne').show()
    }
)

}

document.getElementsByClassName('Icright')[2].addEventListener('click', showKfc);
function showKfc()
{
    document.getElementById('thirdOne').style.display='none';
    $(function()
    {
        $('#firstOne').show()
    }
)

}

document.getElementsByClassName('restIcons')[0].addEventListener('click', showCafe);
function showCafe()
{
    document.getElementById('firstOne').style.display='none';
    $(function()
    {
        $('#secondOne').show()
    }
)

}

document.getElementsByClassName('restIcons')[1].addEventListener('click', showPizza);
function showPizza()
{
    document.getElementById('secondOne').style.display='none';
    $(function()
    {
        $('#thirdOne').show()
    }
)

}

document.getElementsByClassName('restIcons')[2].addEventListener('click', showKfc);
function showKfc()
{
    document.getElementById('thirdOne').style.display='none';
    $(function()
    {
        $('#firstOne').show()
    }
)

}

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
document.getElementsByClassName('toPage')[0].addEventListener('click', toKfc);
function toKfc()
{
    window.location='/phoneKfc.html';
}

document.getElementsByClassName('toPage')[1].addEventListener('click', toJavas);
function toJavas()
{
    window.location='/phoneJavas.html';
}

document.getElementsByClassName('toPage')[0].addEventListener('click', toPizza);
function toPizza()
{
    window.location='/phonePizza.html';
}




