import Ember from 'ember';
import Item from './item';

const BASE_HP = 40;
const BASE_MANA = 30;

export default Ember.Object.extend({

  level: 1,
  class: "Elf",
  constitution: 6,
  wisdom: 10,
  strength: 5,
  intelligence: 4,
  dexterity: 10,
  charisma: 1,

  mana: Ember.computed('level', 'intelligence', function(){
    return BASE_MANA + (this.get('intelligence') * this.get('level'));
  }),

  health: Ember.computed('level','constitution', function(){
    return BASE_HP + (this.get('constitution') * this.get('level'));
  }),

  name: Ember.computed(function(){

    var names = ['Abby', 'Katie', 'Hailey'];
    return names[Math.floor(Math.random()*names.length)];
  }),

  itemWeights: Ember.computed.mapBy('items', 'weights'),
  itemWeight: Ember.computed.sum('itemWeights'),
  hampered: Ember.computed('itemWeight', 'weight', function(){
    return this.get('itemWeight') > this.get('weight');
  }),
  
  items: Ember.computed(function(){
    return [Item.createRandom()];
  })

});
