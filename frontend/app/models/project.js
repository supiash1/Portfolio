import DS from 'ember-data';

export default DS.Model.extend({

  name: DS.attr('string'),
  description: DS.attr('string'),
  demoUrl: DS.attr('string'),
  sourceUrl: DS.attr('string'),
  images: DS.hasMany('image', {embedded:true}),
  skills: DS.hasMany('skill', {embedded:true})

});
