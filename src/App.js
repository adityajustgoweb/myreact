import './App.css';
import Header from './components/header';
import Footer from './components/footer';
import About from './pages/about';
import Contact from './pages/contact';
import Home from './pages/home';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


function App() {
  return ( 
    <Router>
    <div>
     <Header/>
     <Switch>
     <Route path="/" exact component={Home}/>
     <Route path="/about" component={About}/>
     <Route path="/contact" component={Contact}/>
     </Switch>
     <Footer/>
     </div>
    </Router>
  );
}

export default App;
