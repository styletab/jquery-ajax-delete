'use strict';

const getFormFields = require('../../../lib/get-form-fields');

const api = require('./api');
const ui = require('./ui');

const onGetBooks = function (event) {
  event.preventDefault();
  let bookId = $('#get-book-id').val();

  if (bookId.length === 0) {
    api.index()
      .done(ui.onSuccess)
      .fail(ui.onError);
  } else {
    api.show(bookId)
      .done(ui.onSuccess)
      .fail(ui.onError);
  }
};

const onDeleteBook = function (event) {
  event.preventDefault(); // <-- this prevents the button from defaulting to refreshing the page
      //we no longer need bookId because the event.target includes the book id value
  //let bookId = $('#delete-book-id').val();    // < method is primarily used to get the values of form elements such as input, select and textarea.
  console.log("event.target is", event.target);
  let data = getFormFields(event.target);
  console.log("book is", data.book);
//  console.log("inside onDelete book and bookId is", bookId); << debugging
  api.destroy(data.book.id) // <-- delete is a reserved word in JS, you have to use destroy
    .done(ui.onDeleteSuccess) // <-- here, ui is the object ui that was declared up top. and the ui file was assigned to that object. so the ui object is a reflection of what's exported in the ui file. 
    .fail(ui.onError);

};

const onCreateBook = function (event) {
  event.preventDefault();
  let data = getFormFields(event.target);
  console.log('data is', data);
  //let book = data.book;
  api.create(data)
  .done(ui.onDeleteSuccess)
  .fail(ui.onError);
};

module.exports = {
  onGetBooks,
  onDeleteBook,
  onCreateBook

};

//  api.destroy(data.book.id) //
//    .done(ui.onDeleteSuccess)
//    .fail(ui.onError);
// the .done and .fail functions are running just like .on, they're being loaded when .destroy runs,
  // but the callback won't fire until the call returns ajax object
