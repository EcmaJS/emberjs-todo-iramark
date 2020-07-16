import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class UsersIndexController extends Controller {
  user = {
    "id": '',
    "name": '',
    "password": '',
    "email": '',
    "gender": '',
    "age": null
  }
  isShowModal = false;

  @action
  submit() {
    console.log(this.user);
    const payload = this.store.createRecord('user', this.user);
    console.log(payload);

    payload.save();
  }

  @action
  showModal() {
    this.toggleProperty('isShowModal')
  }
}
