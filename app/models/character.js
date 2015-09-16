import Ember from 'ember';
const BASE_HP = 40;
const BASE_MANA = 30;

export default Ember.Object.extend({

  level: 1,
  constitution: 6,
  wisdom: 10,
  strength: 5,
  intelligence: 4,
  dexterity: 10,
  charisma: 1,
  mana: Ember.computed('level', 'constitution', function(){
    return BASE_MANA + (this.get('constitution') * this.get('level'));
  }),

  health: Ember.computed('level','constitution', function(){
    return BASE_HP + (this.get('constitution') * this.get('level'));
  }),


  init() {
    var classes = ['elf', 'wizard', 'fairy', 'orc'];
    var randomClass = classes[Math.floor(Math.random()*classes.length)];
    var names = ['Abby', 'Katie', 'Hailey'];
    var randomName = names[Math.floor(Math.random()*names.length)];

    this.set('name', randomName);
    this.set('class', randomClass);
  }
});
