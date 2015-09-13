var React = require('react');
var marked = require('react-marked');
var ProgrammingLanguageItem = require('./ProgrammingLanguageItem.jsx');

var SectionCode = React.createClass({
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
     var content = require("../content/markdown/home/code.md");
     this.setState({'description': content});
  },
  getContent: function(){
    return {__html:this.state.description};
  },
  getSectionContent: function(){

  },
  render: function () {
    var content = this.getContent();
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
                <p dangerouslySetInnerHTML={content}>
                </p>
                {this.props.children}
              </div>
            </div>
            <div className="container clearfix border-none section-code-langages">
                <ProgrammingLanguageItem name="swift" url="http://www.example.com" years="1" />
            </div>
          </section>
        </div>
    );
  }
});

module.exports = SectionCode;
