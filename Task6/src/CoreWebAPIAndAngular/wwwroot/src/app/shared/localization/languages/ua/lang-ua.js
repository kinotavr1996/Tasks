"use strict";
var customer_translate_1 = require('./pages/customer/customer.translate');
var sidebar_translate_1 = require('./pages/sidebar/sidebar.translate');
var header_translate_1 = require('./pages/header/header.translate');
exports.LANG_UA_NAME = 'ua';
exports.LANG_UA_TRANS = {
    'search': 'Пошук',
    'email': 'Е-пошта'
};
Object.assign(exports.LANG_UA_TRANS, header_translate_1.LANG_UA_HEADER_COMPONENT_TRANS, sidebar_translate_1.LANG_UA_SIDEBAR_COMPONENT_TRANS, customer_translate_1.LANG_UA_CUSTOMER_COMPONENT_TRANS);
//# sourceMappingURL=lang-ua.js.map