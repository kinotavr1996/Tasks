import { SelectListItem } from './select-list-item.model';


export class BookEditModel {
    constructor(
        public id: number,
        public caption: string,
        public publishedDate: Date,
        public writerIds: number[],
        public writerModel: SelectListItem[]
    ) { }

    static fromJSON(object: any): BookEditModel {
        return new BookEditModel(
            object['id'],
            object['caption'],
            object['publishedDate'],
            object['writerIds'],
            SelectListItem.fromJSONArray(object['writers'])
        );
    }
    static fromJSONArray(array: Array<Object>): BookEditModel[] {
        return array.map(obj => BookEditModel.fromJSON(obj));
    }
}
