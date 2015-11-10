import Ember from 'ember';

export default Ember.Component.extend({

	tagName: 'tr',

	hasPointsLeft: Ember.computed.gt('pointsLeft', 0),

	actions: {
		increaseStat: function(){
			if(this.get('hasPointsLeft')){
				this.incrementProperty('stat');
				this.decrementProperty('pointsLeft');
			}
    	},

		decreaseStat: function(){
			if(this.get('stat') > 1){
	      	this.decrementProperty('stat');
				this.incrementProperty('pointsLeft');
			}
    	}
	}
});
