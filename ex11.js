//declaration for global variation
let $world = null;
$(document).ready(function () {
   initialize();
   event_world();

});
//reset for global variation
function initialize() {
   //select the globe
   $world = $("#world");
}
//function for the event
function event_world() {
   $("#btnStart").click(function () {
      //Moving the globe
      //check the location of the globe
      var x = parseInt($("#txtX").val());
      var y = parseInt($("#txtY").val());
      moveGlobe(x, y);
   });
}

function moveGlobe(x, y) {
   if ((x >= 0 && x <= 500) && (y >= 0 && y <= 300)) {
      $world.css({
         left: x,
         top: y
      });
   }
   else {
      alert("The number is over the limit.");
   }
};         