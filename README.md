# nodejs-rest-openshift
Node.js rest api hosted in Openshift

[![Build Status](https://travis-ci.org/jdamor/nodejs-rest-openshift.svg?branch=master)](https://travis-ci.org/jdamor/nodejs-rest-openshift)
[![Coverage Status](https://coveralls.io/repos/github/jdamor/nodejs-rest-openshift/badge.svg?branch=master)](https://coveralls.io/github/jdamor/nodejs-rest-openshift?branch=master)

[![Stories in Ready](https://badge.waffle.io/jdamor/nodejs-rest-openshift.svg?label=ready&title=Ready)](http://waffle.io/jdamor/nodejs-rest-openshift)
[![Stories in In Progress](https://badge.waffle.io/jdamor/nodejs-rest-openshift.svg?label=ready&title=In Progress)](http://waffle.io/jdamor/nodejs-rest-openshift)

The OpenShift `nodejs` cartridge documentation can be found at:

http://openshift.github.io/documentation/oo_cartridge_guide.html#nodejs

* Travis-CI:
  - Added .travis.yml and badge for branch master.
  - travis setup openshift
  - travis command line client: https://github.com/travis-ci/travis.rb#installation 
* Openshift (Using Web console):
  - Create a nodejs 0.10 application
  - Update .travis.yml to push succesful builds to Openshift (travis setup openshift)
* Waffle.io:
  - Project management board based on Github issues
  - Just login with your github user and accept pull request to start (and add badges)
* Coveralls:
  - npm install coveralls --save-dev
    also if using mocha: (npm install mocha-lcov-reporter --save-dev)
  - Added badge status for branch master.






