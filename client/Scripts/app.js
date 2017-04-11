/* custom JS goes here */

// IIFE
(function(){
  $(".btn-danger").click(function(event){
    if(!confirm("Are you sure?")) {
      event.preventDefault();
      window.location.assign("/games");
    }
  });
})();


$(function () {
  $('#datetimepicker1').datetimepicker({locale:'en-ca'});
})();

//get local time zone offset to timezone input value
function timeChange(){
      let time = moment().utcOffset();
      document.getElementById('timezone').value = time;
  }               


//showing local timezone
function showTimeOffset() {
  let time = moment().utcOffset();
    alert(time);
}