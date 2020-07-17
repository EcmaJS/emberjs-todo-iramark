import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class CounterComponent extends Component {

  @action
  link(id) {
    this.args.linkUser(id)
  }
}