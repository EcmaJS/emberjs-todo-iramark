import Model, { attr } from '@ember-data/model';
import ComputedProperty from '@ember/object/computed';
import EmberObject, { computed } from '@ember/object';

export default class UserModel extends Model {
  // @attr('string') id;
  @attr('string') name;
  @attr('date') DOB;
  @attr('string') email;
  @attr('string') password;
  @attr('string') gender;

  schema = [{ key:'id', label: 'Id'},
  { key, label },
  { key, label },
  { key, label },
  { key, label },
  { key, label }];
  // @computed('DOB').readOnly()
  // get getDate() {
  //   return `${this.firstName} ${this.lastName}`;
  // }
  get date() {

    let date = this.DOB.toDateString();
    return date;
  }

  get age() {
    let age = Math.trunc((new Date() - this.DOB) / 1000 / 60 / 60 / 24 / 365.2425)
    return age;
    // return new Date().getFullYear() - this.DOB.getFullYear();
  }

}
