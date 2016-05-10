# ng-QA Testing Toolkit

    Disclaimer: assuming we're installing all packages locally, not globally.
    If some packages are installed using the `-g` flag, then the commands
    could be shorter

## Setup

Let's install all required packages and setup webdriver binaries;

    npm install

    npm run wd-update


## Running

This will require using 2 console windows, since we need to run webdriver daemon and then run the tests themselves

So, on first console let's run our webdriver:

    npm run wd-start

Then we can run our tests in separate console window:

    npm run test

and watch the magic happens.


## Locating HTML elements

There's a quite good tool to check protractor's locators
(like `by.css('.test-element')`) - [elementor](https://www.npmjs.com/package/elementor) -
you should try it when have difficulties when searching for HTML elements
