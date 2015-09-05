var React = require('react');

var Gravatar = React.createClass({
  render: function () {
    return (
        <div className="clearfix">
          <img className="gravatar center" src="http://www.gravatar.com/avatar/b080cc3a37f5cc4c9c8128b92cfa90da" />
        </div>
    );
  }
});

module.exports = Gravatar;
