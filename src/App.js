import {BrowserRouter as Router} from 'react-router-dom'
import Layout from "./route/Layout";
function App() {
  return (
      <Router>
    <div className="container">
        <Layout/>
    </div>
      </Router>
  );
}

export default App;
