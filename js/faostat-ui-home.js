define(['jquery',
        'handlebars',
        'text!faostat_ui_home/html/templates.hbs',
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

        /* Load template. */
        var source = $(templates).filter('#faostat_ui_home_structure').html();
        var template = Handlebars.compile(source);
        var dynamic_data = {};
        var html = template(dynamic_data);
        $('#' + this.CONFIG.placeholder_id).html(html);

    };

    return MENU;

});