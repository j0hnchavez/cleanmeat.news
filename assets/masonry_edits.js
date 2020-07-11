// external js: masonry.pkgd.js

$('.grid').masonry({
  itemSelector: '.grid-item',
  columnWidth: '.grid-sizer',
  percentPosition: true
});

// jquery
// $('.grid').masonry({
//   itemSelector: '.grid-item',
//   columnWidth: '.grid-sizer',
//   percentPosition: true,
//   gutter: 20,
//   fitWidth: true,
//   horizontalOrder: true
// });

// vanilla JS
// var msnry = new Masonry( '.grid', {
//   columnWidth: 200,
//   itemSelector: '.grid-item',
//   gutter: 10,
//   fitWidth: true,
//   horizontalOrder: true;
// });

//  columnWidth: 330,
