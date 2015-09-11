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
     var description = "";
     switch(this.props.type){
       case "code":
         description = require("../content/markdown/home/code.md");
       break;
       case "design":
        description = require("../content/markdown/home/design.md");
       break;
       case "social":
        description = require("../content/markdown/contact/social.md");
       break;
       case "awards":
        description = require("../content/markdown/about/awards.md");
       break;
       case "education":
        description = require("../content/markdown/about/education.md");
       break;
       case "interests":
        description = require("../content/markdown/about/interests.md");
       break;
       case "work":
        description = require("../content/markdown/about/work.md");
       break;
     }
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
