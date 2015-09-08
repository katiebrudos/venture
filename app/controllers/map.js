import Ember from 'ember';

var MapRow = Ember.Object.extend();
var MapRow = Ember.Object.extend();

export default Ember.Controller.extend({

  init: function(){
    this.set('name', 'The Hopeful Hobbit');
    
    
    var row = [
      MapRow.create({ columns: [
        MapCell.create(),
        MapCell.create()                   
      ]}),
      MapRow.create
    ]
  }

});
