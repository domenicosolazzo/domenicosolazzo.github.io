var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var Header = React.createClass({
  render: function () {
    return (
      <header>
        <div className="sm-flex center nowrap">
          <div className="flex-auto">
            <Link to="/" className="btn block animated bounceInLeft">Home Sweet Home</Link>
          </div>
          <div className="flex-auto">
            <Link to="/about" className="btn block animated bounceInLeft">About</Link>
          </div>
          <div className="flex-auto">
            <Link to="/contact" className="btn block animated bounceInDown">Contact Me</Link>
          </div>
        </div>
      </header>
    );
  }
});

module.exports = Header;
