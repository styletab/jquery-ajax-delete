'use strict';

const events = require('./books/events');

// get in the habit of naming your handlers, it eases debugging.
//
// also, follow a convention for handlers. here, I name my handler
// beginning with 'on' to denote that it is done when the GET /books
// button is clicked

// On document ready - that's what '$(()' is short hand for
$(() => {
  $('#book-request').on('submit', events.onGetBooks);
  $('#book-delete').on('submit', events.onDeleteBook);
  $('#book-create').on('submit', events.onCreateBook);
  // $('#book-delete-submit').on('submit', function() { //< debugging
  //     console.log("You clicked submit on delete");
  //   });
});

// the .on functions are going to run everytime the page loads, but the callback
//functions (events.onGetBooks) won't run unless the event (submit) happens
