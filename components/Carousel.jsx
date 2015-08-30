var React = require('react');
var ReactSwipe = require('react-swipe');

var Carousel = React.createClass({
    render: function () {
        return (
            <ReactSwipe
                continuous={true}
            >
                <div>'PANE 1'</div>
                <div>'PANE 2'</div>
                <div>'PANE 3'</div>
            </ReactSwipe>
        );
    }
});

module.exports = Carousel;
