var React = require('react');

var Contact = React.createClass({
  render: function(){
    return (
      <main>
        <section id="index-title" className="clearfix border-none">
          <div className="col col-12">
            <h1 className="animated rubberBand center">
              Call me maybe!
            </h1>
          </div>
        </section>
        <section id="index-code" className="clearfix border-none">
          <div className="clearfix border-none">
            <div className="col col-4 center">
              <a href="https://twitter.com/domenicosolazzo" target="_blank">
                <img src="../assets/social/twitter.png" alt="Twitter" />
              </a>
            </div>
            <div className="col col-4 center">
              <a href="https://no.linkedin.com/in/solazzo" target="_blank">
                <img src="../assets/social/linkedin.png" alt="Linkedin" />
              </a>
            </div>
            <div className="col col-4 center">
              <a target="_blank" href="http://www.google.com/recaptcha/mailhide/d?k=01RcpOnIvUVdH41U6Prab5lg==&amp;c=_0kkedOZRdbLr__Ki5tT8BJIRr_wHDXnyd4rNO8Hhcs=" onclick="window.open('http://www.google.com/recaptcha/mailhide/d?k\07501RcpOnIvUVdH41U6Prab5lg\75\75\46c\75_0kkedOZRdbLr__Ki5tT8BJIRr_wHDXnyd4rNO8Hhcs\075', '', 'toolbar=0,scrollbars=0,location=0,statusbar=0,menubar=0,resizable=0,width=500,height=300'); return false;" title="Reveal this e-mail address"
                ><img src="../assets/social/email.png" alt="Email" />
              </a>
            </div>
          </div>
        </section>
      </main>
    );
  }
});

module.exports = Contact;
