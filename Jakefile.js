(function () {
    "use strict";

    var
        async = require('async'),
        path = require('path'),
        fs = require('fs'),
        jake = require('jake'),
        nodeunit = require('nodeunit');

    var
        NODEUNIT_OPTIONS = {
            "error_prefix": "",
            "error_suffix": "",
            "ok_prefix": "",
            "ok_suffix": "",
            "bold_prefix": "",
            "bold_suffix": "",
            "assertion_prefix": "",
            "assertion_suffix": ""
        },
        NODEUNIT_REPORTER = 'default';

    var
        INTEGRATION_TESTS = [
            path.join('test', 'integration', 'simpleTest.js'),
            path.join('test', 'integration', 'testExport.js'),
            path.join('test', 'integration', 'testRfcSamples.js')
        ],
        TARGET = path.join('bin', 'uritemplate.js'),
        ASYNC = {async: true};

    var TARGET_DEPENDENCIES = (function () {
        var all = new jake.FileList();
        all.include('./Jakefile.js', 'own-testcases.json');
        all.include('test/**');
        return all.toArray();
    }());

    function closeAsyncJakeTask (err) {
        if (err) {
            fail(JSON.stringify(err, null, 4));
        }
        else {
            complete();
        }
    }

    file(TARGET, TARGET_DEPENDENCIES, function () {
        // there is no other way to pass parameters to a testcase -- sorry
        global.URI_TEMPLATE_FILE = TARGET;
        async.series([
            function (callback) {
                jake.logger.log('integration tests ...');
                nodeunit.reporters[NODEUNIT_REPORTER].run(INTEGRATION_TESTS, NODEUNIT_OPTIONS, callback);
            }
        ], closeAsyncJakeTask);
    }, ASYNC);

    desc('build and test all artifacts');
    task('build', [TARGET], function () {
        jake.logger.log('done.');
    });

    desc('default -- called, if you call jake without parameters');
    task('default', ['build']);

}());
