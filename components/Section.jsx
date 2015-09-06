var React = require('react');
var marked = require('react-marked');
var fs = require('fs');

var Section = React.createClass({
  getInitialState: function(){
      return {
        "title":"",
        "description": "",
      };
  },

  readContent: function(callback){
    console.log(fs);
    return true;
  },
  render: function () {
    var a = this.readContent;
    console.log("aaaa", a());


    return (
        <div className="clearfix">
          <section className="clearfix border-top">
            <div className="clearfix border-none section-title">
              <div className="col col-12">
                <h3 className="animated bounceInLeft center">
                  {this.state.title}
                </h3>
              </div>
            </div>
            <div className="container clearfix border-none section-description">
              <div className="col col-12">
                <p>
                  {this.state.description}
                </p>
              </div>
            </div>
          </section>
        </div>
    );
  }
});

module.exports = Section;
