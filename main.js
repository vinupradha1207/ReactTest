import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route,Link } from 'react-router';
import { browserHistory } from 'react-router'
import App from './src/js/App.jsx';
import PopupMsg from './src/js/popuptest.jsx'
import AttributeAddComp from './src/js/AttributeAddComp.jsx';
import AttribKeyWordImport from './src/js/AttributeKeyWordImporter.jsx';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';



class Home extends React.Component {
    render(){
        return ( <div>
	        		<div className="container">
	        		 <PopupMsg/> 
	                      
	        			<div className="mode-container container" >
	        				<span className="label"><b>Mode</b></span>
	        				<label className="checkbox">
	        					
	        					<Link to="/SpringRestClientApp/add"><span className="checkbox-label">Add</span></Link>
	        				</label>
	        				<label className="checkbox">
	        					<Link to="/SpringRestClientApp/analyze"><span className="checkbox-label">Analyze</span></Link>
	        				</label>
	        				<span className="stretch"></span>
	        			</div>
	        		</div>
	        		<div>
	                    {this.props.children}
	        		</div>
	        	</div>);
    }
}

ReactDOM.render(
		<div>
		<div className="page-subheader">
		<div className="mode-container" >
		
		
	</div>
			<div className="container">
				<p>A flexible tool to manage attributes across business.</p>
				</div>
				</div>
		<div className="page-body">
			<Router history={browserHistory}>
				<Route path="/SpringRestClientApp/admin/Attributes.html" component={Home}>
					<Route path="/SpringRestClientApp/add" component={AttributeAddComp}/> 
					<Route path="/SpringRestClientApp/analyze" component={App}/>	
				</Route>
				<Route path="/SpringRestClientApp/" component={Home}>
					<Route path="/SpringRestClientApp/add" component={AttributeAddComp}/> 
					<Route path="/SpringRestClientApp/analyze" component={App}/>	
				</Route>
	            <Route path="/" component={AttribKeyWordImport}>
	            <Route path="/SpringRestClientApp/admin/AttribKeyWordImport.html" component={AttribKeyWordImport}>
				
			</Route>	
	            </Route>
	        </Router>
        </div>
        </div>,
	    document.getElementById('app')
	);

// ReactDOM.render(<App/>, document.getElementById('app'));

// setTimeout(() => {
// ReactDOM.unmountComponentAtNode(document.getElementById('app'));}, 10000);
