# URI Template JS

[![CircleCI](https://circleci.com/gh/apiaryio/uritemplate-js/tree/master.svg?style=svg)](https://circleci.com/gh/apiaryio/uritemplate-js/tree/master)

This is a fork of a javascript implementation of the [RFC6570](http://tools.ietf.org/html/rfc6570) - URI Template. See [the original library for all details](https://github.com/fxa/uritemplate-js).

## Changes

See [diff](https://github.com/fxa/uritemplate-js/compare/master...apiaryio:master?expand=1) of changes.

Internally we've vendored and included the `bin/uritemplate.js` file in various our projects. Then we changed contents of that file. However, in the original library, the file is just a result of compilation.

This fork was created in order to have our changes installable as a package. Only the `bin/uritemplate.js` file was kept with all the changes we made to it. It didn't make much sense to keep the source or the unit tests, so they were removed.
