var reasons = [
    "MY MOM",
    "MY DAD",
    "ME",
    "FAMITY BOOK"
    ];
    var images = [ 
    
  "https://cdn1.vectorstock.com/i/1000x1000/18/50/young-flat-cartoon-banker-business-woman-lady-vector-20201850.jpg",
      "https://images.cdn3.stockunlimited.net/preview1300/father-in-a-suit_1246033.jpg",
      "https://w7.pngwing.com/pngs/96/861/png-transparent-boy-cartoon-child-hat-boy-painted-hand-toddler-thumbnail.png",
      "https://images-na.ssl-images-amazon.com/images/I/91zbi9M+mKL.jpg"
      ];
  //document.getElemantById
  var i = 0;
  function nextslide() {
    document.getElementById("reasontext").innerHTML = reasons[i];
    document.getElementById("album").src = images[i];
    if(i==3)
    {
      i=0;
    }
    else
    {i++;}
    
  }