import { api, LightningElement } from "lwc";

export default class CustomListRenderer extends LightningElement {
  @api item;
  @api tmpl;

  render() {
    return this.tmpl;
  }
}
