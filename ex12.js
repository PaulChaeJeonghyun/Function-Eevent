$(document).ready(function () {
   init();
   initEvent();
});

//global variation
let $images = null;

function init() {
   // take images as an array
   $images = $("#container1 img");
}

function initEvent() {
   $("#btnStart").click(function () {
      showImage();
   });
}

function showImage() {
   //images 
   let length = $images.length;

   for (let i = 0; i < length; i++) {
      //Using eq()function
      let $img = $images.eq(i);
      let x = 100 + ((i % 3) * 200);
      let y = 100 + (parseInt(i / 3) * 200);

      $img.css({
         left: x,
         top: y
      });
   }
}
