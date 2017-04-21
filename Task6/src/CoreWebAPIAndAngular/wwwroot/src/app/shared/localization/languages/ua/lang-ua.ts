import { LANG_UA_CUSTOMER_COMPONENT_TRANS } from './pages/customer/customer.translate';
import { LANG_UA_SIDEBAR_COMPONENT_TRANS } from './pages/sidebar/sidebar.translate';
import { LANG_UA_HEADER_COMPONENT_TRANS } from './pages/header/header.translate';

export const LANG_UA_NAME = 'ua';

export const LANG_UA_TRANS = {
    'search': 'Пошук',
    'email': 'Е-пошта'
};
Object.assign(
    LANG_UA_TRANS,
    LANG_UA_HEADER_COMPONENT_TRANS,
    LANG_UA_SIDEBAR_COMPONENT_TRANS,
    LANG_UA_CUSTOMER_COMPONENT_TRANS);

