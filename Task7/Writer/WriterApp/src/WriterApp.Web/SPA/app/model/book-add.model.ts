import { SelectListItem } from './select-list-item.model';

export class BookAddModel {
    constructor(
        public caption: string,
        public publishedDate: Date,
        public writerIds: number[] = [],
        public writers: SelectListItem[]
    ) { }

    static fromJSON(object: any): BookAddModel {
        return new BookAddModel(
            object['caption'],
            object['publishDate'],
            object['writerIds'],
            SelectListItem.fromJSONArray(object['writers'])

        );
    }
    static fromJSONArray(array: Array<Object>): BookAddModel[] {
        return array.map(obj => BookAddModel.fromJSON(obj));
    }
}
