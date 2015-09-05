var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var Header = React.createClass({
  render: function () {
    return (
        <div className="clearfix">
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
          <div className="clearfix">
            <header className="md-col-12 sm-col py2 px1 bg-gray bg-cover bg-center backgroundImage center white">
              <h1 className="h1 h0-responsive caps mt4 mb0 regular">Hi! I am Domenico!</h1>
              <p className="h3">Programmer, data scientist and entrepreneur</p>
              <div className="h3 mb4">
                <img className="gravatar center" src="http://www.gravatar.com/avatar/b080cc3a37f5cc4c9c8128b92cfa90da" />
              </div>
            </header>
          </div>

        </div>
    );
  }
});

module.exports = Header;
