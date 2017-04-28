import { AddressModel } from "app/shared/models/address.model";

export class CustomerAddPopupModel {
    public address: AddressModel;
    public email: string;
    public firstName: string;
    public lastName: string;
    constructor() {
        this.address = new AddressModel(9999, 'Khotin', 'Ukraine', '60000');
        this.email = '';
        this.firstName = '';
        this.lastName = '';
    }
}
