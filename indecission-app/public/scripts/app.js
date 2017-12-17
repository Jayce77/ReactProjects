'use strict';

console.log('app is running');

var appData = {
    appTitle: 'Indecision App',
    appSubTitile: 'Put you life in the hands of a computer',
    appOptions: ['List Item 1', 'List Item 2', 'List Item 3']
};

var getLocation = function getLocation(location) {
    return location === undefined ? 'Unknown' : location;
};
var getOptions = function getOptions(options) {
    return options.map(function (item, index) {
        return React.createElement(
            'li',
            { key: index },
            item
        );
    });
};

var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        appData.appTitle
    ),
    appData.appSubTitle && React.createElement(
        'p',
        null,
        appData.appSubTitle
    ),
    React.createElement(
        'p',
        null,
        appData.appInfo
    ),
    React.createElement(
        'p',
        null,
        appData.appOptions.length > 0 ? 'Here are your options' : 'No options'
    ),
    appData.appOptions && React.createElement(
        'ol',
        null,
        getOptions(appData.appOptions)
    )
);

var appRoot = document.getElementById('app');
ReactDOM.render(template, appRoot);
