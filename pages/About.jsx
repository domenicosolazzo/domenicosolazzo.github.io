var React = require('react');
var Section = require('../components/Section.jsx');

var About = React.createClass({
  render: function(){
      return (
        <main>
          <section id="about-title" className="clearfix border-none">
            <div className="col col-12">
              <h1 className="animated rubberBand center">
                Eduction, Work experience and what I love!
              </h1>
            </div>
          </section>
          <Section title="Education" type="education" />
          <Section title="Work" type="work" />
          <Section title="Awards" type="awards" />
          <Section title="Other" type="interests"/>
        </main>
      );
  }
});

module.exports = About;
