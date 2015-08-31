var React = require('react');

var DesignItem = React.createClass({

  render: function(){
    var class_name =this.props.class_name ? this.props.class_name : "circle";
    var uri = this.props.uri ? this.props.uri : "";
    return (
       <div>
         <img className={class_name} src={uri} />
       </div>
    );

  }
});
