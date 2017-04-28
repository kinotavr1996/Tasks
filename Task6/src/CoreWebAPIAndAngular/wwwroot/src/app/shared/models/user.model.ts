
import { AddressModel } from "app/shared/models/address.model";

export class UserModel {
    constructor(
        public id: number,
        public firstName: string,
        public lastName: string,
        public email: string,
        public address: AddressModel

    ) { }

    static fromJSON(object: any): UserModel {
        return new UserModel(
            object['id'],
            object['firstName'],
            object['lastName'],
            object['email'],
            AddressModel.fromJSON(object['address'])
        );
    }

    static fromJSONArray(array: Array<Object>): UserModel[] {
        return array.map(obj => UserModel.fromJSON(obj));
    }
}
