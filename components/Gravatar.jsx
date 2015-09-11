var React = require('react');
var md5 = require('md5');

var Gravatar = React.createClass({
  getDefaultProps: function(){
    return {
      email: "abc@example.com"
    };
  },
  getGravatarURI: function(){
    var scheme = "http://";
    var domain = "www.gravatar.com";
    var uriPath = "/avatar/";
    var gravatarHash = md5(this.props.email);
    return "".concat(scheme,domain,uriPath,gravatarHash);
  },
  render: function () {
    var gravatarUri = this.getGravatarURI();
    return (
        <div className="clearfix">
          <img className="gravatar center" src={gravatarUri} />
        </div>
    );
  }
});

module.exports = Gravatar;
