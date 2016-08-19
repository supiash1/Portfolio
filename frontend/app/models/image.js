import DS from 'ember-data';

export default DS.Model.extend({
	project_image: DS.attr('string'),
  project_id: DS.attr('number'),

  project: DS.belongsTo('project')

});
