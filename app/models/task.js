import Model, { attr } from '@ember-data/model';

export default class TaskModel extends Model {
  @attr('string') title;
  @attr('string') status;
  @attr('number') result;
  @attr('number') time;
  @attr('string') missionId;
}
