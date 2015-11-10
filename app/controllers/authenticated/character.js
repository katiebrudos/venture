import Ember from 'ember';
import EmberValidations from 'ember-validations';

//decorate the models (formatting) and processing actions
export default Ember.Controller.extend(EmberValidations,{
	validations: {
		'character.name': {presence:true, length:{minimum: 3}}
	},

  characters:Ember.computed.alias('model'),
  character: Ember.computed.alias('characters.firstObject'),
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
    increaseStat: function(stat){
      this._modifyStat(stat, 1);
    },

    decreaseStat: function(stat){
      this._modifyStat(stat, -1);
    },

    addCharacter(){
      var char = this.store.createRecord('character');
    	var sword = this.store.createRecord('item', {
      	name: 'Sword of Life',
      	weight: 4,
      	constitutionBonus: 3
    });
    char.get('items').pushObject(sword);
      //char.save();
    },
    removeCharacter(){
      this.get('character').destroyRecord();
      this.set('character');
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