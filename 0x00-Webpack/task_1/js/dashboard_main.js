import $ from 'jquery';
import debounce from 'lodash/debounce';

let count = 0;

function updateCounter() {
  count++;
  $('#count').text(`${count} clicks on the button`);
}

$(function () {
  $('body').append('<p>ALX Dashboard</p>');
  $('body').append('<p>Dashboard data for the students</p>');
  const btn = $('<button>Click here to get started</button>');
  $('body').append(btn);
  $('body').append("<p id='count'></p>");
  $('body').append('<p>Copyright - ALX</p>');

  btn.on('click', debounce(updateCounter, 300));
});
