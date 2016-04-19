import $ from "jquery";


$('.sections').click(function (event) {

console.log('clicked');
  var clicked = $(this);
  var hideThis = clicked.next('p');
  clicked.toggleClass('show')

});
