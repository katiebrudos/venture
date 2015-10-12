import Ember from 'ember';
import LoginControllerMixin from 'simple-auth/mixins/login-controller-mixin';

export default Ember.Controller.extend(LoginControllerMixin, {
  authenticator: 'simple-auth-authenticator:devise',

	actions: {
		signIn(name){
			alert(name + " signing in");
		},
		signInError(){

		}
	}
});