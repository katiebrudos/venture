import Ember from 'ember';

export default Ember.Component.extend({

	tagName: 'tr',

	actions: {
		increaseStat: function(stat){
      	this.incrementProperty(stat);
    	},

		decreaseStat: function(stat){
      	this.decrementProperty(stat);
    	}
	}
});
