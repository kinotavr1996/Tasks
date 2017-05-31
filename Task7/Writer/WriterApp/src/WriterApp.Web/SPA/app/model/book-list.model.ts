import { BookModel } from "./book.model";
export class BookListModel {
    constructor(
        public filter: string,
        public column: string,
        public direction: string,
        public hasNextPage: boolean,
        public hasPrePage: boolean,
        public pageSize: number,
        public totalPage: number,
        public page: number,
        public bookModel: BookModel[]
    ) { }

    static fromJSON(object: any): BookListModel {
        return new BookListModel(
            object["filter"],
            object["order"]["column"],
            object["order"]["direction"],
            object["hasNextPage"],
            object["hasPreviousPage"],
            object["pageSize"],
            object["totalPages"],
            object["page"],
            BookModel.fromJSONArray(object["items"])
        );
    }

    static fromJSONArray(array: Array<Object>): BookListModel[] {
        return array.map(obj => BookListModel.fromJSON(obj));
    }
}
