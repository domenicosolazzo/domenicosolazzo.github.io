var React = require('react');

var DesignItem = React.createClass({
  getDefaultProps: function(){
    return {
      name: "unknown"
    }
  },
  getClassName: function(){
    var class_name = this.props.name && this.props.name !== "unknown" ?
                    this.props.class_name :
                    "unknown";

    return  "".concat("lang-", class_name);
  },

  render: function(){
    var class_name = this.getClassName();
    
    return (
       <div>
         <div className={class_name} name={this.props.name}></div>
       </div>
    );

  }
});
