import Ember from 'ember';

export default Ember.Component.extend({

	_modifyStat: function(stat, amount){
    this.set('character.'+stat, this.get('character.'+stat)+amount);
  },

	actions: {
		increaseStat: function(stat){
      	this._modifyStat(stat, 1);
    	},

		decreaseStat: function(stat){
      	this._modifyStat(stat, -1);
    	}
	}
});
