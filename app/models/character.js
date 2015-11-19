import Ember from 'ember';
import DS from 'ember-data';


const BASE_HP = 40;
const BASE_MANA = 30;

export default DS.Model.extend({

	statPointsToSpend: DS.attr('number', {defaultValue: 20}),
	name: DS.attr('string', {
		defaultValue: function() {
      var names = ['Zultar', 'Zorky', 'Merlin'];
      return names[Math.floor(Math.random()*names.length)];
    }
	}),
	characterClass: DS.attr('string', {
		defaultValue: function() {
			var classes = ["Wizard", "Elf", "Blacksmith"];
			return classes[Math.floor(Math.random()*classes.length)];
		}
	}),
	level: DS.attr('number', {defaultValue: 1}),
   constitution: DS.attr('number', {defaultValue: 5}),
   wisdom: DS.attr('number', {defaultValue: 10}),
   strength: DS.attr('number', {defaultValue: 1}),
   intelligence: DS.attr('number', {defaultValue: 1}),
   dexterity: DS.attr('number', {defaultValue: 1}),
   charisma: DS.attr('number', {defaultValue: 1}),
   maxMana: Ember.computed('level', 'intelligence', function(){
     return BASE_MANA + (this.get('intelligence') * this.get('level'));
   }),

   maxHealth: Ember.computed('level','constitution', function(){
    return BASE_HP + (this.get('constitution') * this.get('level'));
  }),

  itemWeights: Ember.computed.mapBy('items', 'weight'),
  itemWeight: Ember.computed.sum('itemWeights'),
  hampered: Ember.computed('itemWeight', 'weight', function(){
    return this.get('itemWeight') > this.get('weight');
  }),

  items: DS.hasMany('items', {async: true}),
  maxWeight: Ember.computed('strength', function() {
     return this.get('strength') * 5;
  }),
  itemConstitutionBonuses: Ember.computed.mapBy('items','constitutionBonus'),
  constitutionBonus: Ember.computed.sum('itemConstitutionBonuses'),
  effectiveConstitution: Ember.computed('constitutionBonus','constitution', function() {
    return this.get('constitution') + this.get('constitutionBonus');
  })

});