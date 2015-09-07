var React = require('react');
var marked = require('react-marked');


var Section = React.createClass({
  getInitialState: function(){
      return {
        "title":"",
        "description": "",
      };
  },

  readContent: function(callback){
     var html = require("html!markdown!./content/home/code.md");
     console.log("Html", html);
  },
  render: function () {
    var a = this.readContent();


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
