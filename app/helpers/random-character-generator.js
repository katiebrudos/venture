import Ember from 'ember';

export default Ember.Object.extend({

	randomize: function(){
		var char = this.store.createRecord('character');
		return char;
	}
});