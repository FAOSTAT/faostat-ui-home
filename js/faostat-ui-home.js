define(['jquery',
        'handlebars',
        'text!faostat_ui_home/html/templates.html',
        'i18n!faostat_ui_home/nls/translate',
        'bootstrap',
        'sweetAlert',
        'amplify'], function ($, Handlebars, templates, translate) {

    'use strict';

    function MENU() {

        this.CONFIG = {

            lang: 'E',
            placeholder_id: 'faostat_ui_home',
            prefix: 'faostat_ui_home_'

        };

    }

    MENU.prototype.init = function(config) {

        /* Extend default configuration. */
        this.CONFIG = $.extend(true, {}, this.CONFIG, config);

        /* Fix the language, if needed. */
        this.CONFIG.lang = this.CONFIG.lang != null ? this.CONFIG.lang : 'E';

    };

    return MENU;

});