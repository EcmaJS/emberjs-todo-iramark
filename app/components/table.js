import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class TableComponent extends Component {

  @action
  link(id) {
    this.args.linkUser(id)
  }
}