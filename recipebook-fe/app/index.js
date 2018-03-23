var React = require('react');
var ReactDom = require('react-dom');
require('./index.css');
	
//state
//lifecycle event
// UI 
class App extends React.Component {
	render() {
		return(
			<div>Hello React Training vid!</div>
			)
	}
}

ReactDom.render(
	<App />,
	document.getElementById('app')
);