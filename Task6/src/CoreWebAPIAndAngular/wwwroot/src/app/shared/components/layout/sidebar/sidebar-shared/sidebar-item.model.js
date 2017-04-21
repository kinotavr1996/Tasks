"use strict";
var SidebarItemModel = (function () {
    function SidebarItemModel(text, link, iconUrl) {
        if (text === void 0) { text = ''; }
        if (link === void 0) { link = ''; }
        if (iconUrl === void 0) { iconUrl = ''; }
        this.text = text;
        this.link = link;
        this.iconUrl = iconUrl;
    }
    SidebarItemModel.fromJSONArray = function (arr) {
        return arr.map(function (obj) {
            return new SidebarItemModel(obj['text'], obj['link'], obj['iconUrl']);
        });
    };
    return SidebarItemModel;
}());
exports.SidebarItemModel = SidebarItemModel;
//# sourceMappingURL=sidebar-item.model.js.map