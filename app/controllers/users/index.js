import Controller from '@ember/controller';
import { action } from '@ember/object';
import DS from 'ember-data';

export default class UsersIndexController extends Controller {
  user = {
    "id": '',
    "name": '',
    "password": '',
    "email": '',
    "gender": '',
    "DOB": null
  }
  isShowModal = false;
  createUserPromise;

  @action
  submit() {
    console.log(new Date(this.user.DOB).toISOString());
    this.set('user.DOB', new Date(this.user.DOB))
    // this.user.DOB = new Date(this.user.DOB).toISOString();
    const payload = this.store.createRecord('user', this.user);
    console.log(payload);

    let promise = payload.save().then(() => {
      this.send('showModal');
    }).catch((err) => {
      alert(`User not create       ${err}`);
    });

    const promiseObject = DS.PromiseObject.create({
      promise: promise
    });
    this.set('createUserPromise', promiseObject);
  }

  @action
  showModal() {
    this.toggleProperty('isShowModal')
  }

  @action
  linkToUser(id) {
    console.log('id controller', id);

    this.transitionToRoute('users.user', id);
  }
}
