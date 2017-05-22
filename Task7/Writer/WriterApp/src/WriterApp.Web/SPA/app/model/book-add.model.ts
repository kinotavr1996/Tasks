import { SelectListItem } from './select-list-item.model';

export class BookAddModel {
    constructor(
        public caption: string,
        public publishDate: Date,
        public writers: SelectListItem[]
    ) { }

    static fromJSON(object: any): BookAddModel {
        return new BookAddModel(
            object['caption'],
            object['publishDate'],
            SelectListItem.fromJSONArray(object['writers'])

        );
    }
    static fromJSONArray(array: Array<Object>): BookAddModel[] {
        return array.map(obj => BookAddModel.fromJSON(obj));
    }
}
