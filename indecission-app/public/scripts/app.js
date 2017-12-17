'use strict';

console.log('app is running');

var appData = {
    appTitle: 'Indecision App',
    appSubTitile: 'Put you life in the hands of a computer',
    appOptions: ['List Item 1', 'List Item 2', 'List Item 3']
};

var onFormSubmit = function onFormSubmit(event) {
    event.preventDefault();
    var option = event.target.elements.option.value;
    console.log('Form Submitted', option);

    if (option) {
        appData.appOptions.push(option);
        event.target.elements.option.value = '';
        renderIndecisionApp();
    }
};
var clearOptions = function clearOptions(event) {
    appData.appOptions = [];
    renderIndecisionApp();
};

var onMakeDecision = function onMakeDecision() {
    var randomNum = Math.floor(Math.random() * appData.appOptions.length);
    var option = appData.appOptions[randomNum];
    alert(option);
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

var renderIndecisionApp = function renderIndecisionApp() {
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
        React.createElement('input', { type: 'button', disabled: appData.appOptions.length === 0, value: 'What should I do?', onClick: onMakeDecision }),
        React.createElement('input', { type: 'button', value: 'Clear Options', onClick: clearOptions }),
        appData.appOptions && React.createElement(
            'ol',
            null,
            getOptions(appData.appOptions)
        ),
        React.createElement(
            'form',
            { onSubmit: onFormSubmit },
            React.createElement('input', { type: 'text', name: 'option', id: '' }),
            React.createElement('input', { type: 'submit', value: 'Add Option' })
        )
    );
    ReactDOM.render(template, appRoot);
};

var appRoot = document.getElementById('app');
renderIndecisionApp();
