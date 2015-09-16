import Ember from 'ember';
const BASE_HP = 40;

export default Ember.Object.extend({

  level: 1,
  int: 17,
  constituition: 6,
  wisdom: 10,
  health: Ember.computed('level','constitution', function(){
    return BASE_HP + (this.get('constitution') * this.get('level'));
  }),
  strength: 5,

  init() {
    var names = ['Abby', 'Katie', 'Hailey'];
    var randomName = names[Math.floor(Math.random()*names.length)];

    this.set('name', randomName);

  }
});
