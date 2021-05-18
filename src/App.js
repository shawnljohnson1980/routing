import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import One from './components/route1.jsx';
import Two from './components/route2.jsx';
import Three from './components/route3.jsx';
import Four from './components/route4.jsx';
import { Router } from '@reach/router';
function App() {
  return (
    <div className="App">
      <Router>
        <One path="/" />
        <Two path="/route2" />
        <Three path="/route3" />
        <Four path="/route4" />
      </Router>
    </div>
  );
}

export default App;
