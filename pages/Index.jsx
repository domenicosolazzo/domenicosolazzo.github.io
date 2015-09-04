var React = require('react');
var FontAwesome = require('react-fontawesome');

var Index = React.createClass({
  render: function(){
    return (
      <main>
        <section id="index-title" className="clearfix border-none">
          <div className="col col-12">
            <h1 className="animated rubberBand center">
              Hi, I am Domenico Solazzo!
            </h1>
          </div>
        </section>
        <section id="index-code" className="clearfix border-top">
          <div className="clearfix border-none section-title">
            <div className="col col-12">
              <h3 className="animated bounceInLeft center">Code</h3>
            </div>
          </div>
          <div className="clearfix border-none section-description">
            <div className="col col-12">
              <p>
                I love coding and feel free to check my <a href="https://github.com/domenicosolazzo" target="_blank">Github</a> account.
                <br /><br />
                I am always learning but nowadays, I often use Python, Javascript and Swift.
              </p>
            </div>
          </div>
        </section>
        <section id="index-design" className="clearfix border-top">
          <div className="clearfix border-none section-title">
            <div className="col col-12">
              <h3 className="animated bounceInRight center">Design</h3>
            </div>
          </div>
          <div className="clearfix border-none section-description">
            <div className="col col-12">
              <p>
                In my spare time, I like to learn about design.
                I am really far for being proficient at it but below you can find some
                of my current works. If you like what you see and you have a Dribbble invite, please invite me!
              </p>
            </div>
          </div>
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
