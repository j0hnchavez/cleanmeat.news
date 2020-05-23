// external js: masonry.pkgd.js

// jquery
// not sure if it's working
// $('.grid').masonry({
//   itemSelector: '.grid-item',
//   columnWidth: 10%,
//   gutter: 10,
//   fitWidth: true,
//   horizontalOrder: true
// });

// vanilla JS
var msnry = new Masonry( '.grid', {
  columnWidth: 200,
  itemSelector: '.grid-item',
  gutter: 10,
  fitWidth: true,
  horizontalOrder: true;
});
