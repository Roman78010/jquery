"use strict";

// import 'jquery';
import $ from 'jquery';


// const btn = $('#btn');
// // $ - это функция, функция по получению элемента.
// console.log(btn);
// Если возникает ошибка, к примеру такая, где не обнаружена функция из импортируемой библиотеки Uncaught ReferenceError: $ is not defined стоит попробывать импортировать эту функцию напрямую: import $ from 'jquery';

$(document).ready(function() {
  $('.list-item:first').hover(function() {
    $(this).toggleClass('active');
  });

  $('.list-item:eq(2)').on('click', function() {
    $('.image:even').fadeToggle('slow');
  });

  $('.list-item:eq(4)').on('click', function() {
    $('.image:odd').animate({
      opacity: 'toggle',
      height: 'toggle'
    }, 2000);
  });
});