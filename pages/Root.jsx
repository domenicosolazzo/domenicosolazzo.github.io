var React = require('react');
var Router = require('react-router');
var RouteHandler = Router.RouteHandler;

var Navigation = require('../components/Navigation.jsx');
var Header = require('../components/Header.jsx');
var css = require('../css/base.css');

var Root = React.createClass({
  render: function(){
    var initialProps = {
      __html: safeStringify(this.props)
    };

    return (
      <html>
        <head>
          <title>{this.props.title}</title>
          <style dangerouslySetInnerHTML={{ __html: css }} />
          <link rel="stylesheet" href="../vendors/animatecss/animate.min.css" />
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css" />
        </head>
        <body>
          <div className="clearfix">
            <Navigation />
            <Header title="Hi! I am Domenico!" description="Programmer, data scientist and entrepreneur" email="abc@example.com"/>
          </div>
          <div className="clearfix page-body">
            <RouteHandler {...this.props} />
          </div>

          <script
            id='initial-props'
            type='application/json'
            dangerouslySetInnerHTML={initialProps} />
          <script src='bundle.js' />
        </body>
      </html>
    );
  }

});

function safeStringify(obj) {
  return JSON.stringify(obj).replace(/<\/script/g, '<\\/script').replace(/<!--/g, '<\\!--')
}


module.exports = Root;
