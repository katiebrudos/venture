import Ember from 'ember';

export default Ember.Route.extend({
	model: function(params){
		return this.store.find('character', params.character);
		
		//return this.store.query('world-view', {character_id: char.get('id')})
			//.then(worldViews => {
			//this.get('map').addToWorldView(worldViews.get('firstObject'));
		//});
		
	},
	serialize: function(model) {
		return {character: model.get('id')};
	}
});
