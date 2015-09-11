var React = require('react');
var Gravatar = require('./Gravatar.jsx');

var Header = React.createClass({
  getDefaultProps: function(){
    return {
      title: "",
      description: "",
      email:"abc@example.com"
    };
  },
  render: function () {
    return (
        <div className="clearfix">
          <div className="clearfix">
            <header className="md-col-12 sm-col py2 px1 bg-gray bg-cover bg-center backgroundImage center white">
              <h1 className="h1 h0-responsive caps mt4 mb0 regular">{this.props.title}</h1>
              <p className="h3">{this.props.description}</p>
              <div className="h3 mb4">
                <Gravatar email={this.props.email} />
              </div>
            </header>
          </div>

        </div>
    );
  }
});

module.exports = Header;
