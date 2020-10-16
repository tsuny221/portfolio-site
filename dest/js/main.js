var scroll = document.getElementById("cover");
//onscrollは監視対象を指定
scroll.onscroll = function () {
  // var scroll = document.documentElement.scrollTop || document.body.scrollTop;//スクロール位置取得
  var scrollHeight = scroll.scrollTop;
  var itemHeight = document.getElementById("cover-content").clientHeight;
  var img = document.getElementById("main__img");
   if( scrollHeight < itemHeight)
   {
     img.src = "images/bin.jpg";
     img.animate([{opacity: '0'}, {opacity: '1'}], 100)

   } else if( scrollHeight < itemHeight*2){
     img.src = "images/usagi.jpg";
     img.animate([{opacity: '0'}, {opacity: '1'}], 100)

   } else if (scrollHeight < itemHeight * 3) {
     img.src = "images/bin.jpg";
     img.animate([{opacity: '0'}, {opacity: '1'}], 100)
    }
};
