import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  	this.route('login', {path: '/'});
	this.route('authenticated', function(){
	  	this.route('secrets');
	  	this.route('map');
		this.route('character');
		this.route('add-a-character');
		this.route('play', {path: 'play/:character'});
  });
});

export default Router;
