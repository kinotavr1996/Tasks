export class SidebarItemModel {
    constructor(
        public text: string = '',
        public link: string = '',
        public iconUrl: string = ''
    ) { }
    static fromJSONArray(arr: Array<Object>): SidebarItemModel[] {
        return arr.map(obj =>
            new SidebarItemModel(
                obj['text'],
                obj['link'],
                obj['iconUrl']
            )
        );
    }
}
