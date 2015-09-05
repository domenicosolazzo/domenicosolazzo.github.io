var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var Header = React.createClass({
  render: function () {
    return (
      <header>
        <div className="clearfix">
          <nav className="clearfix bg">
            <div className="sm-col">
              <Link to="/" className="btn py2">Home Sweet Home</Link>
              <Link to="/about" className="btn py2">About</Link>
            </div>
            <div className="sm-col-right">
              <Link to="/contact" className="btn py2">Contact Me</Link>
            </div>
          </nav>
        </div>
      </header>
    );
  }
});

module.exports = Header;
