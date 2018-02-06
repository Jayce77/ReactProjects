'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IndecisionApp = function (_React$Component) {
  _inherits(IndecisionApp, _React$Component);

  function IndecisionApp(props) {
    _classCallCheck(this, IndecisionApp);

    var _this = _possibleConstructorReturn(this, (IndecisionApp.__proto__ || Object.getPrototypeOf(IndecisionApp)).call(this, props));

    _this.handleAddOption = _this.handleAddOption.bind(_this);
    _this.handleRemoveAll = _this.handleRemoveAll.bind(_this);
    _this.handleRemoveSingleOption = _this.handleRemoveSingleOption.bind(_this);
    _this.handlePick = _this.handlePick.bind(_this);

    _this.state = {
      options: props.options,
      newOption: ""
    };
    return _this;
  }

  _createClass(IndecisionApp, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      try {
        var json = localStorage.getItem('options');
        var options = JSON.parse(json);

        if (options) this.setState(function () {
          return { options: options };
        });
      } catch (e) {
        console.log(e);
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps, prevState) {
      if (prevState.options.length !== this.state.options.length) {
        var json = JSON.stringify(this.state.options);
        localStorage.setItem('options', json);
      }
    }
  }, {
    key: 'comonentWillUnmount',
    value: function comonentWillUnmount() {
      console.log('Unmounted');
    }
  }, {
    key: 'handleAddOption',
    value: function handleAddOption(option) {
      if (!option) {
        return 'Enter valid value to add item';
      } else if (this.state.options.indexOf(option) > 1) {
        return 'This options already exists';
      }

      this.setState(function (prevState) {
        var prevOptions = prevState.options;
        return { options: prevOptions.concat(option), newOption: "" };
      });
    }
  }, {
    key: 'handleRemoveAll',
    value: function handleRemoveAll() {
      this.setState(function () {
        return { options: [] };
      });
    }
  }, {
    key: 'handleRemoveSingleOption',
    value: function handleRemoveSingleOption(e) {
      var optionToRemove = e.target.name;
      this.setState(function (prevState) {
        return {
          options: prevState.options.filter(function (option) {
            return option !== optionToRemove;
          })
        };
      });
    }
  }, {
    key: 'handlePick',
    value: function handlePick() {
      var decision = Math.floor(Math.random() * this.state.options.length);
      alert(this.state.options[decision]);
    }
  }, {
    key: 'render',
    value: function render() {
      var subtitle = 'Put your life in the hands of a computer';
      return React.createElement(
        'div',
        null,
        React.createElement(Header, { subtitle: subtitle }),
        React.createElement(Action, {
          hasOptions: this.state.options.lenth > 0 ? false : true,
          handlePick: this.handlePick
        }),
        React.createElement(Options, {
          options: this.state.options,
          handleRemoveAll: this.handleRemoveAll,
          handleRemoveSingleOption: this.handleRemoveSingleOption }),
        React.createElement(AddOption, {
          handleAddOption: this.handleAddOption,
          newOption: this.state.newOption
        })
      );
    }
  }]);

  return IndecisionApp;
}(React.Component);

IndecisionApp.defaultProps = {
  options: []

  // class Header extends React.Component {
  //   render() {
  //     return (
  //       <div>
  //         <h1>{this.props.title}</h1>
  //         <h2>{this.props.subtitle}</h2>
  //       </div>
  //     )
  //   }
  // }

  // class Action extends React.Component {
  //   render() {
  //     return (
  //       <div>
  //         <input 
  //           type="button" 
  //           onClick={this.props.handlePick} 
  //           value="What should I do?" 
  //           disabled={!this.props.hasOptions}
  //         />
  //       </div>
  //     )
  //   }
  // }

  // class Options extends React.Component {
  //   constructor(props) {
  //     super(props)
  //   }

  //   render() {
  //     return (
  //       <div>
  //         <input type="button" onClick={this.props.handleRemoveAll} value="Remove All" />
  //         {this.props.options.map((item, index) => <Option key={index} text={item}/>)}
  //       </div>
  //     )
  //   }
  // }

  // class Option extends React.Component {
  //   render() {
  //     return (
  //       <div>{this.props.text}</div>
  //     )
  //   }
  // }

};var Header = function Header(props) {
  return React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      null,
      props.title
    ),
    props.subtitle && React.createElement(
      'h2',
      null,
      props.subtitle
    )
  );
};

Header.defaultProps = {
  title: 'Indecision'
};

var Action = function Action(props) {
  return React.createElement(
    'div',
    null,
    React.createElement('input', {
      type: 'button',
      onClick: props.handlePick,
      value: 'What should I do?',
      disabled: !props.hasOptions
    })
  );
};

var Options = function Options(props) {
  return React.createElement(
    'div',
    null,
    React.createElement('input', { type: 'button', onClick: props.handleRemoveAll, value: 'Remove All' }),
    props.options.length === 0 && React.createElement(
      'p',
      null,
      'Please add an option to get started'
    ),
    props.options.map(function (item, index) {
      return React.createElement(Option, { key: index, text: item, handleRemoveSingleOption: props.handleRemoveSingleOption });
    })
  );
};

var Option = function Option(props) {
  return React.createElement(
    'div',
    null,
    props.text,
    React.createElement('input', { name: props.text, type: 'button', value: 'Remove', onClick: props.handleRemoveSingleOption })
  );
};

var AddOption = function (_React$Component2) {
  _inherits(AddOption, _React$Component2);

  function AddOption(props) {
    _classCallCheck(this, AddOption);

    var _this2 = _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).call(this, props));

    _this2.handleAddOption = _this2.handleAddOption.bind(_this2);
    _this2.state = {
      error: ""
    };
    return _this2;
  }

  _createClass(AddOption, [{
    key: 'handleAddOption',
    value: function handleAddOption(e) {
      e.preventDefault();

      var option = e.target.elements.option.value.trim();
      var error = this.props.handleAddOption(option);

      this.setState(function () {
        return { error: error };
      });
      if (!error) e.target.elements.option.value = '';
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        this.state.error && React.createElement(
          'p',
          null,
          this.state.error
        ),
        React.createElement(
          'form',
          { onSubmit: this.handleAddOption },
          React.createElement('input', {
            type: 'text',
            name: 'option'
          }),
          React.createElement('input', { type: 'submit', value: 'Add Option' })
        )
      );
    }
  }]);

  return AddOption;
}(React.Component);

// const User = () => {
//   return(
//     <div>
//       <p>Name: </p>
//       <p>Age: </p>
//     </div>
//   )
// }

ReactDOM.render(React.createElement(IndecisionApp, null), document.getElementById('app'));
