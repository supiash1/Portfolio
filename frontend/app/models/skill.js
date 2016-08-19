import DS from 'ember-data';

export default DS.Model.extend({

	name: DS.attr('string'),
  projectId: DS.attr('number'),

  project: DS.belongsTo('project')

});
