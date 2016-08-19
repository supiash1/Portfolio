import DS from 'ember-data';

export default DS.Model.extend({

	project_skill: DS.attr('string'),
  project_id: DS.attr('number'),

  project: DS.belongsTo('project')

});
