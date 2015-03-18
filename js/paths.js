define(function() {

    var config = {
        paths: {
            FAOSTAT_UI_HOME: 'faostat-ui-home',
            faostat_ui_home: '../'
        },
        shim: {
            bootstrap: {
                deps: ['jquery']
            }
        }
    };

    return config;

});