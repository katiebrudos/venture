import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
		let charPromise = this.store.findAll('character');

			return new Ember.RSVP.Promise((resolve, reject) => {
				return Ember.run.later(() => {
					charPromise.then(chars => {
						if(chars.get('length') === 0) {
							reject({error: "Oh noes!!! No Characters found!!!"});
						}else{
							resolve(chars);
						}
					});
				}, 2000);
			}).then(null, err => {alert(err.error)});
	}
});