window.addEventListener( "scroll" ,function(){
  let itemHeight = document.getElementById("target").clientHeight;
  let img = document.getElementById("main__img");
  //スクロールの高さを取得
  let scroll = document.body.scrollTop;

  if( scroll != 0 ){
    img.src = "images/bin.jpg";
  }else if( scroll > 1000){
   img.src = "images/bin.jpg";
  }else if( scroll > 2000 ){

  }else if( scroll > 1000 ){

  }else{

  }

});
