var React = require('react');
var marked = require('react-marked');


var Section = React.createClass({
  getInitialState: function(){
      return {
        "title":"",
        "description": "",
      };
  },
  componentDidMount: function(){
      this.readContent();
  },

  readContent: function(callback){
     var description = require("../content/markdown/home/code.md");
     this.setState({'description': description});
  },
  getContent: function(){
    return {__html:this.state.description};
  },
  render: function () {

    return (
        <div className="clearfix">
          <section className="clearfix border-top">
            <div className="clearfix border-none section-title">
              <div className="col col-12">
                <h3 className="animated bounceInLeft center">
                  {this.props.title}
                </h3>
              </div>
            </div>
            <div className="container clearfix border-none section-description">
              <div className="col col-12">
                <p dangerouslySetInnerHTML={this.getContent()}>
                </p>
              </div>
            </div>
          </section>
        </div>
    );
  }
});

module.exports = Section;
