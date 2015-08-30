var React = require('react');
var Carousel = require('./Carousel.jsx');

var Index = React.createClass({
  render: function(){
    return (
      <main>
        Index component
        <br />
        <Carousel />
      </main>
    );
  }
});

module.exports = Index;
