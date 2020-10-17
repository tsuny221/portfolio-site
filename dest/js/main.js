var scroll = document.getElementById("cover");
//onscrollは監視対象を指定
scroll.onscroll = function () {
  // var scroll = document.documentElement.scrollTop || document.body.scrollTop;//スクロール位置取得
  var scrollHeight = scroll.scrollTop;
  var itemHeight = document.getElementById("cover-content").clientHeight;
  var img = document.getElementById("main__img");
   if( scrollHeight < itemHeight){
     img.animate([{ opacity: '0' }, { opacity: '1' }], 300);
     img.src = "images/bin.jpg";
   } else if (scrollHeight < itemHeight * 2) {
     img.animate([{ opacity: '0' }, { opacity: '1' }], 300);
     img.src = "images/kiritori.jpg";
   } else if (scrollHeight < itemHeight * 3) {
     img.animate([{ opacity: '0' }, { opacity: '1' }], 300);
     img.src = "images/kiritori.jpg";
   } else if (scrollHeight < itemHeight * 4) {
     img.animate([{ opacity: '0' }, { opacity: '1' }], 300);
     img.src = "images/childrenraku.jpg";
   } else if (scrollHeight < itemHeight * 5) {
     img.animate([{ opacity: '0' }, { opacity: '1' }], 300);
     img.src = "images/usagi.jpg";
  }
};
