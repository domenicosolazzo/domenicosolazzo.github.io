var React = require('react');
var Router = require('react-router');
var RouteHandler = Router.RouteHandler;
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
        <body className="p2">
          <div className="container">
            <div className="clearfix">
            </div>
            <Header />
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
