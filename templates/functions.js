





  var count = document.querySelector('.numItem')
  var btn1 = document.querySelectorAll('a.add');
  buttonLength = btn1.length;
  for(let i=0; i<buttonLength; i++){
    btn1[i].addEventListener('click', function(){
      alert('ITEM WAS SUCCESSFULLY ADDED TO CART')
    })
  }


  function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topNav") {
    x.className += " responsive";
  } else {
    x.className = "topNav";
  }
  }

  let toTopDiv = document.querySelector('.toTop');
  window.addEventListener('scroll', function(){
    let pxWin = window.scrollY;
    if (pxWin>=1800) {
      toTopDiv.style.display = 'block';
    }
    else{
      toTopDiv.style.display = 'none';
    }
  })

  function item1(){
    let productName = 'Le Labo SANTAL 33'
    let productPrice = 289.00
    localStorage.setItem('product_Name',productName);
    localStorage.setItem('product_Price',productPrice);
    return false;
  }

  function item2(){
    let productName = 'Chanel BLEU DE CHANEL'
    let productPrice = 132.00
    localStorage.setItem('product_Name',productName);
    localStorage.setItem('product_Price',productPrice);
    return false;
  }

  function item3(){
    let productName = 'Byredo BLACK SAFFRON'
    let productPrice = 270.00
    localStorage.setItem('product_Name',productName);
    localStorage.setItem('product_Price',productPrice);
    return false;
  }

  function item4(){
    let productName = 'Hugo Boss BOSS BOTTLED'
    let productPrice = 75.00
    localStorage.setItem('product_Name',productName);
    localStorage.setItem('product_Price',productPrice);
    return false;
  }

  function item5(){
    let productName = 'Gucci GUILTY EDT'
    let productPrice = 119.00
    localStorage.setItem('product_Name',productName);
    localStorage.setItem('product_Price',productPrice);
    return false;
  }

  function item6(){
    let productName = 'English Laundry NOIR CASTLE'
    let productPrice = 95.00
    localStorage.setItem('product_Name',productName);
    localStorage.setItem('product_Price',productPrice);
    return false;
  }
