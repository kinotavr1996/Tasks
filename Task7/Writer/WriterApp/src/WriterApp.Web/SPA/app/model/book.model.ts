import { WriterModel } from "./writer.model";
export class BookModel {
    constructor(
        public id: number,
        public caption: string,
        public publishDate: Date,
        public writerModel: WriterModel[]
    ) { }

    static fromJSON(object: any): BookModel {
        return new BookModel(
            object["id"],
            object["caption"],
            object["publishedDate"],
            WriterModel.fromJSONArray(object["writers"])
        );
    }
    static fromJSONArray(array: Array<Object>): BookModel[] {
        return array.map(obj => BookModel.fromJSON(obj));
    }
}
