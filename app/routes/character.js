import Ember from 'ember';
import Character from '../models/character';

//to load data here
export default Ember.Route.extend({
  model: function() {

    //to load data here
    return this.store.createRecord('character');
  }
});
