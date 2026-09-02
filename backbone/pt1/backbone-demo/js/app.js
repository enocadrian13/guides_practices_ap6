import modelscrud from 'models-crud.js'


const message = Backbone.Model.extend({
  defaults: { text: "Hello, Backbone.js!" }
});

const msg = new message();

console.log(msg.get('text'));