var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;
var Root = require('./pages/Root.jsx');
var Index = require('./pages/Index.jsx');
var About = require('./pages/About.jsx');
var Contact = require('./pages/Contact.jsx');

var Routes = (
  <Route handler={Root} path='/'>
    <DefaultRoute handler={Index} />
    <Route path='/about' handler={About} />
    <Route path='/contact' handler={Contact} />
  </Route>
);

module.exports = Routes;
