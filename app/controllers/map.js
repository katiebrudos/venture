import Ember from 'ember';

var MapRow = Ember.Object.extend({
  columns: []
});
var MapCell = Ember.Object.extend({
  text: "."
});

export default Ember.Controller.extend({

  init: function(){
    this.set('name', 'The Hopeful Hobbit');

    var rows = [
      MapRow.create({ columns: [
        MapCell.create(),
        MapCell.create(),
        MapCell.create()
      ]}),
      MapRow.create({columns: [
        MapCell.create(),
        MapCell.create(),
        MapCell.create()
      ]}),
      MapRow.create({columns: [
        MapCell.create( {text: "H"}),
        MapCell.create(),
        MapCell.create()
      ]})
    ];
    this.set('rows', rows);
  }
});
