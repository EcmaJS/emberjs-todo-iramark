import Model, { attr, belongsTo } from '@ember-data/model';

export default class TaskModel extends Model {
  @attr('string') title;
  @attr('string') status;
  @attr('number') result;
  @attr('number') time;
  @attr('string') missionId;
  @belongsTo('mission') mission;
}
