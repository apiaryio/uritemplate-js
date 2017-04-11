module.exports = (function () {
    "use strict";

    var
        UriTemplate = require('../../' + global.URI_TEMPLATE_FILE);

    return {
        'UriTemplate has a static parse function': function (test) {
            test.equal(typeof UriTemplate.parse, 'function');
            test.done();
        },
        'UriTemplate has a expand function': function (test) {
            test.equal(typeof UriTemplate.prototype.expand, 'function');
            test.done();
        }
    };
}());
