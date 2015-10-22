//import React = require("react");

var isNode = typeof module !== "undefined" && module.exports
    , React = isNode ? require("react") : React
    , ReactDOM = isNode ? require("react-dom") : ReactDOM;

var Home = React.createClass({
    getInitialState: function ()
    {
        return { time: new Date().getTime() };
    },
    onClick: function ()
    {
        this.setState({ time: new Date().getTime() });
    },
    render: function()
    {
        return (
            <div onClick={this.onClick}>
                Hello world @{this.state.time}
            </div>
        );
    }
});

if (isNode)
{
    module.exports = Home
}
else
{
    ReactDOM.render(<Home />, document.getElementById("react"))
}