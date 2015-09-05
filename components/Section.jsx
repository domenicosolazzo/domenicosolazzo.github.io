var React = require('react');
var marked = require('react-marked');

var description = "I love coding and feel free to check my [Github action](https://github.com/domenicosolazzo) account. I am always learning but nowadays, I often use Python, Javascript and Swift.";
/*

<br /><br />

*/
var Section = React.createClass({
  render: function () {
    return (
        <div className="clearfix">
          <section id="index-code" className="clearfix border-top">
            <div className="clearfix border-none section-title">
              <div className="col col-12">
                <h3 className="animated bounceInLeft center">{this.props.title}</h3>
              </div>
            </div>
            <div className="container clearfix border-none section-description">
              <div className="col col-12">
                <p>
                  {marked(description)}
                </p>
              </div>
            </div>
          </section>
        </div>
    );
  }
});

module.exports = Section;
