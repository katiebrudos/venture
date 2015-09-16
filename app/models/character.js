import Ember from 'ember';


export default Ember.Object.extend({

  int: 17,
  constituition: 6,
  wisdom: 10,
  health: Ember.computed('constitution', function(){
    return this.get('constitution')*4;
  }),
  strength: 5,

  init() {
    var names = ['Abby', 'Katie', 'Hailey'];
    var randomName = names[Math.floor(Math.random()*names.length)];

    this.set('name', randomName);

  }
});
