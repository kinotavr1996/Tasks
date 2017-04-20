export class PagerService {
    range(start, count) {
        return Array.apply(0, Array(count))
            .map(function (element, index) {
                return index + start;
            });
    }
    getPager(totalItems: number, currentPage: number = 1, pageSize: number = 5) {
        let totalPages = Math.ceil(totalItems / pageSize);

        let startPage: number = 1, endPage: number;


        let startIndex = (currentPage - 1) * pageSize;
        let endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);

        let pages = this.range(startPage, totalPages);

        return {
            totalItems: totalItems,
            currentPage: currentPage,
            pageSize: pageSize,
            totalPages: totalPages,
            startPage: startPage,
            endPage: endPage,
            startIndex: startIndex,
            endIndex: endIndex,
            pages: pages
        };
    }
}