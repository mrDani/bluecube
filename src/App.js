import HomeScreen from './screen/HomeScreen'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'

function App() {
  return (
    <Router>
      <main>
        <Container>
          <Route path='/' component={HomeScreen} exact/>

        </Container>      
      </main>
    </Router>
  );
}

export default App;
