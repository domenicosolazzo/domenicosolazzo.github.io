var React = require('react');

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
          <section id="about-education" className="clearfix border-top">
            <div className="clearfix border-none">
              <div className="col col-12">
                <h3 className="animated bounceInLeft center">Education</h3>
              </div>
            </div>
            <div className="clearfix border-none">
              <div className="col col-12">
                <p>
                  August 2009: Master of Science in Software Development <br />
                  Aalborg Universitet - Denmark
                  <br /><br />
                  Thesis: "SubClassifier - Automatic Text Categorization of patents using Subgroup Discovery"
                  <br />
                  The thesis involved a study on the automatic categorization of WIPO patents taking into consideration descriptive data mining techniques, such as Subgroup Discovery.
                  <br /><br />
                  Main Courses: Business Intelligence, Computer Supported Cooperative Work, Structural Computing, Fuzzy Logic, Information Retrieval, Computer Vision, Virtual Reality, Semantic Web
                  <br /><br /><br /><br />
                  March 2007: Bachelor of Science in Computer Networks and Security <br />
                  University of Torino, Italy
                  <br /><br />
                  Thesis: "Centro Unico Prenotazioni (C.U.P.)"
                  The thesis covered the analysis and implementation of an online appointment booking service that could be used in hospitals and clinics in the North of Italy.
                  <br /><br />
                  Main couses: Programming, DataBase, Computer Networks, SNMP, Security
                </p>
              </div>
            </div>
          </section>
          <section id="about-work" className="clearfix border-top">
            <div className="clearfix border-none">
              <div className="col col-12">
                <h3 className="animated bounceInLeft center">Work Experience</h3>
              </div>
            </div>
            <div className="clearfix border-none">
              <div className="col col-12">
                <p>
                  Feb 2015 / Present: Senior Developer - Oslo, Norway<br />
                  I am a full stack developer working for a news agency in Oslo.
                  <br /><br />

                  Nov 2011 / Jan 2015: Senior Developer - Oslo, Norway<br />
                  I am a full stack developer for the digital asset management platform, working on enhancing
                  the API modules and a real time analytic system for product data.<br />
                  I am the main responsible for the software architecture and integration of the business services running across the company departments including financial, e-commerce and licensing data.
                  <br /><br />

                  Feb 2011 / 2011: Senior Developer - Oslo, Norway<br />
                  Analysis and implementation of modules of a semantic content managementsystem. <br />
                  I was also working with customer implementations of the content management system.
                  <br /><br />

                  May 2010 / Janaury 2011: Senior Developer - Oslo, Norway <br />
                  Analysis and implementation of SOA modules for an E-Learning platform
                  <br /><br />

                  Jan 2008 / Apr 2010: Team leader & Developer - Esbjerg, Denmark <br />
                  Team leader of the software team that was developing a platform for creating data warehouse on demand.
                  <br /><br />

                  Jul 2005 / September 2007: Developer - Asti, Italy <br />
                  Working on Hospital Information System. <br />
                  I was developing and maintaining an Electronical Medical Record (EMR)
                  <br /><br />

                  Jan 2004 / Jun 2005: Junior Developer - Asti, Italy  <br />
                  Developing an Electronical Patient Record (EPR) as a module of a
                  large Hospital Information System.
                  <br /><br />
                </p>
              </div>
            </div>
          </section>
          <section id="about-honors" className="clearfix border-top">
            <div className="clearfix border-none">
              <div className="col col-12">
                <h3 className="animated bounceInLeft center">Honors and Awards</h3>
              </div>
            </div>
            <div className="clearfix border-none">
              <div className="col col-12">
                <p>
                  April 2012: Runner-up, Oslo Health Challenge<br />
                  Place: Oslo, Norway<br />
                  Project name: MeYu <br />
                  Description: A helper mobile app for young patients with cancer.
                  <br /><br />
                </p>
              </div>
            </div>
          </section>
          <section id="about-other" className="clearfix border-top">
            <div className="clearfix border-none">
              <div className="col col-12">
                <h3 className="animated bounceInLeft center">Interests</h3>
              </div>
            </div>
            <div className="clearfix border-none">
              <div className="col col-12">
                <p>
                  Startup weekend organizer in 2012 and 2013. Oslo, Norway <br />
                  Training regularly.<br />
                  Jazz lover. <br />
                  Interested in Stoicism. <br />
                  <br /><br />
                </p>
              </div>
            </div>
          </section>
        </main>
      );
  }
});

module.exports = About;
