// external js: masonry.pkgd.js

// jquery
$('.grid').masonry({
  itemSelector: '.grid-item',
  columnWidth: 330,
  gutter: 20,
  fitWidth: true,
  horizontalOrder: true
});

// vanilla JS
// var msnry = new Masonry( '.grid', {
//   columnWidth: 200,
//   itemSelector: '.grid-item',
//   gutter: 10,
//   fitWidth: true,
//   horizontalOrder: true;
// });
