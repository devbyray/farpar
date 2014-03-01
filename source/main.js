require.config({
    paths: {
        // Vendor paths
        jquery: 'vendor/jquery.min',
        underscore: 'vendor/underscore.min',
        backbone: 'vendor/backbone.min',
        postal: 'vendor/postal.min',
        modernizr: 'vendor/modernizr.min',
        farpar: 'vendor/farpar.min'
    },

    shim: {
        // Vendor shim
        jquery: {
            exports: '$'
        },

        underscore: {
            exports: '_'
        },

        backbone: {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        },

        postal: {
            exports: 'postal'
        },

        modernizr: {
            exports: 'Modernizr'
        },

        farpar: {
            deps: ['jquery'],
            exports: 'Farpar'
        }
    }
});

require(['farpar'], function (Farpar) {
    Farpar.supportHtml5();
});