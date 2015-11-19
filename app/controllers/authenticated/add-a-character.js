import Ember from 'ember';
import EmberValidations from 'ember-validations';

//decorate the models (formatting) and processing actions
export default Ember.Controller.extend(EmberValidations,{

	character: Ember.computed.alias('model'),

	validations: {
		'character.name': {presence:true, length:{minimum: 3}}
	},


  hasItems: Ember.computed.notEmpty('character.items'),
  hampered: Ember.computed('character.itemWeight', 'character.maxWeight', function() {
    return this.get('character.itemWeight') > this.get('character.maxWeight');
  }),
  burdenPercent: Ember.computed('character.itemWeight', 'character.maxWeight', function() {
    return Math.min(this.get('character.itemWeight') / this.get('character.maxWeight') * 100, 100);
  }),
  _modifyStat: function(stat, amount){
    this.set('character.'+stat, this.get('character.'+stat)+amount);
  },


  actions: {
	  randomizeCharacter: function(){
			var randomCharacter = this.get('randomCharacterGenerator').randomize();
		  	this.set('character', randomCharacter);
	  },
	  levelUp: function(){
		 this.incrementProperty('character.level');
		 this.send('showModal', {
			 template: 'level-character',
			 character: this.get('character'),
			 pointsLeft: 3
		 });
	  },
    changeCharacter: function(char){
      this.set('character',char);
    },
    saveCharacter: function(){
      this.get('character').save();
    },
    removeCharacter(){
      this.get('character').destroyRecord();
      this.set('character').then(() => {
			this.transitionToRoute('authenticated.characters');
		});
    },
    addItem(){
      var item = this.store.createRecord('item',
        {
        name: 'Sword of Life',
        weight: 4,
        constitutionBonus: 3
      });
      this.get('character.items').pushObject(item);
      item.save();
    },
    removeItem(item){
      this.get('character.items').removeObject(item);
    },
  }
});