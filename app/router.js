import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  	this.route('login');
	this.route('authenticated', function(){
	  	this.route('secrets');
	  	this.route('map');
		this.route('character');
  });
});

export default Router;
