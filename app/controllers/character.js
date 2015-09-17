import Ember from 'ember';
import Item from '../models/item';

//decorate the models (formatting) and processing actions
export default Ember.Controller.extend({

  character: Ember.computed.alias('model'),
  hasItems: Ember.computed.notEmpty('character.items'),

  _modifyStat: function(stat, amount){
    this.set('model.'+stat, this.get('model.'+stat)+amount);
  },

  actions: {
    increaseStat: function(stat){
      this._modifyStat(stat, 1);
    },

    decreaseStat: function(stat){
      this._modifyStat(stat, -1);
    },

    addItem(){
      this.get('character.items').pushObject(Item.createRandom());
    },
    removeItem(item){
      this.get('character.items').removeObject(item);
    },
  }
});
