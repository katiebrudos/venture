import Ember from 'ember';
import Item from './item';
import DS from 'ember-data';

const BASE_HP = 40;
const BASE_MANA = 30;

export default DS.Model.extend({

  level: DS.attr('number', {defaultValue: 1}),
  class: "Elf",
  constitution: 6,
  wisdom: 10,
  strength: 5,
  intelligence: 4,
  dexterity: 10,
  charisma: 1,

  maxMana: Ember.computed('level', 'intelligence', function(){
    return BASE_MANA + (this.get('intelligence') * this.get('level'));
  }),

  maxHealth: Ember.computed('level','constitution', function(){
    return BASE_HP + (this.get('constitution') * this.get('level'));
  }),

  name: Ember.computed(function(){

    var names = ['Abby', 'Katie', 'Hailey'];
    return names[Math.floor(Math.random()*names.length)];
  }),

  itemWeights: Ember.computed.mapBy('items', 'weight'),
  itemWeight: Ember.computed.sum('itemWeights'),
  hampered: Ember.computed('itemWeight', 'weight', function(){
    return this.get('itemWeight') > this.get('weight');
  }),

  items: Ember.computed(function(){
    return [Item.createRandom()];
  }),
  maxWeight: Ember.computed('strength', function() {
     return this.get('strength') * 5;
  }),
  itemConstitutionBonuses: Ember.computed.mapBy('items','bonuses.constitution'),
  constitutionBonus: Ember.computed.sum('itemConstitutionBonuses'),
  effectiveConstitution: Ember.computed('constitutionBonus','constitution', function() {
    return this.get('constitution') + this.get('constitutionBonus');
  })

});
