var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var Navigation = React.createClass({
  render: function () {
    return (
        <div className="container">
          <nav className="bg">
            <div className="sm-col">
              <Link to="/" className="btn py2">Home Sweet Home</Link>
              <Link to="/about" className="btn py2">About</Link>
            </div>
            <div className="sm-col-right">
              <Link to="/contact" className="btn py2">Contact Me</Link>
            </div>
          </nav>
        </div>
    );
  }
});

module.exports = Navigation;
