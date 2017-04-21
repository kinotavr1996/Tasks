"use strict";
var PagerService = (function () {
    function PagerService() {
    }
    PagerService.prototype.range = function (start, count) {
        return Array.apply(0, Array(count))
            .map(function (element, index) {
            return index + start;
        });
    };
    PagerService.prototype.getPager = function (totalItems, currentPage, pageSize) {
        if (currentPage === void 0) { currentPage = 1; }
        if (pageSize === void 0) { pageSize = 5; }
        var totalPages = Math.ceil(totalItems / pageSize);
        var startPage = 1, endPage;
        var startIndex = (currentPage - 1) * pageSize;
        var endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);
        var pages = this.range(startPage, totalPages);
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
    };
    return PagerService;
}());
exports.PagerService = PagerService;
//# sourceMappingURL=paginator.component.js.map