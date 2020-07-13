import Route from '@ember/routing/route';
import axios from 'axios';

export default class UsersRoute extends Route {

  model() {
    return this.store.findAll('user');
  };
}
