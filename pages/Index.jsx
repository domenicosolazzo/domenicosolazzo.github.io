var React = require('react');
var FontAwesome = require('react-fontawesome');
var Section = require('../components/Section.jsx');

var Index = React.createClass({
  render: function(){
    return (
      <main>
        <Section title="Code" type="code"/>
        <Section title="Design" type="design" />
        <section id="index-design" className="clearfix border-top">

          <div className="clearfix border-none">

            <div className="col col-3 design-container">
              <div className="design-shot">
                <img className="design-image" src="https://raw.githubusercontent.com/domenicosolazzo/practice-sketch/master/icons/gauge/Exports/Gauge%400%2C5x.png" />
              </div>
              <ul className="tools">
                <li>
                  <a title="View fans of this shot" href="#">
                    <FontAwesome name='eye' /> 1000
                  </a>
                  <a title="Comments fans of this shot" href="#">
                    <FontAwesome name='comment' /> 10
                  </a>
                  <a title="Like fans of this shot" href="#">
                    <FontAwesome name='heart' /> 232
                  </a>
                </li>
              </ul>
            </div>
            <div className="col col-3 design-container">
              <div className="design-shot">
                <img className="design-item" src="https://raw.githubusercontent.com/domenicosolazzo/practice-sketch/master/icons/switch/Exports/WithoutBackground/Colorful%20Switch%400%2C5x.png" />
              </div>
              <ul className="tools">
                <li>
                  <a title="View fans of this shot" href="#">
                    <FontAwesome name='eye' /> 1000
                  </a>
                  <a title="Comments fans of this shot" href="#">
                    <FontAwesome name='comment' /> 10
                  </a>
                  <a title="Like fans of this shot" href="#">
                    <FontAwesome name='heart' /> 232
                  </a>
                </li>
              </ul>
            </div>
            <div className="col col-3 design-container">
              <div className="design-shot">
                <img className="design-item" src="https://raw.githubusercontent.com/domenicosolazzo/practice-sketch/master/icons/calendar/Exports/WithoutBackground/Calendar%400%2C5x.png" />
              </div>
              <ul className="tools">
                <li>
                  <a title="View fans of this shot" href="#">
                    <FontAwesome name='eye' /> 1000
                  </a>
                  <a title="Comments fans of this shot" href="#">
                    <FontAwesome name='comment' /> 10
                  </a>
                  <a title="Like fans of this shot" href="#">
                    <FontAwesome name='heart' /> 232
                  </a>
                </li>
              </ul>
            </div>
            <div className="col col-3 design-container">
              <div className="design-shot">
                <img className="design-item" src="https://raw.githubusercontent.com/domenicosolazzo/practice-sketch/master/icons/todo/Exports/iTunesArtwork-512%400%2C5x.png" />
              </div>
              <ul className="tools">
                <li>
                  <a title="View fans of this shot" href="#">
                    <FontAwesome name='eye' /> 1000
                  </a>
                  <a title="Comments fans of this shot" href="#">
                    <FontAwesome name='comment' /> 10
                  </a>
                  <a title="Like fans of this shot" href="#">
                    <FontAwesome name='heart' /> 232
                  </a>
                </li>
              </ul>
            </div>

          </div>
        </section>
      </main>
    );
  }
});

module.exports = Index;
