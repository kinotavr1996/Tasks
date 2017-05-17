export class WriterModel {
    constructor(
        public id: number,
        public fullName: string,
        public dateOfBirth: Date,
        public biography: string
    ) { }

    static fromJSON(object: any): WriterModel {
        return new WriterModel(
            object['id'],
            object['fullname'],
            object['biography'],
            object['dateOfBirth']
        );
    }
    static fromJSONArray(array: Array<Object>): WriterModel[] {
        return array.map(obj => WriterModel.fromJSON(obj));
    }
}
