import { api, LightningElement } from 'lwc';

export default class CustomList extends LightningElement {
    @api items = [];
    @api tmpl;
}