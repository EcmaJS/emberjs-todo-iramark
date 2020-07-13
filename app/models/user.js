import Model, { attr } from '@ember-data/model';

export default class UserModel extends Model {
  // @attr('string') id;
  @attr('string') name;
  @attr('number') age;
  @attr('string') email;
  @attr('string') password;
  @attr('string') gender;
}
