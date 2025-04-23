import $ from 'jquery';
import _ from 'lodash';
import '../css/main.css';

$('body').prepend('<div id="logo"></div>');
$('body').append('<p>ALX Dashboard</p>');
$('body').append('<p>Dashboard data for the students</p>');
$('body').append('<button id="start-btn">Click here to get started</button>');
$('body').append("<p id='count'></p>");
$('body').append('<p>Copyright - ALX</p>');

let count = 0;

function updateCounter() {
  count++;
  $('#count').text(`${count} clicks on the button`);
}

const debouncedUpdate = _.debounce(updateCounter, 300);
$('#start-btn').on('click', debouncedUpdate);
