export class AddressModel {
    constructor(
        public id: number,
        public city: string,
        public state: string,
        public zip: string,
    ) { }

    static fromJSON(object: any): AddressModel {
        return new AddressModel(
            object['id'],
            object['city'],
            object['state'],
            object['zip']
        );
    }

    static fromJSONArray(array: Array<Object>): AddressModel[] {
        return array.map(obj => AddressModel.fromJSON(obj));
    }
}
