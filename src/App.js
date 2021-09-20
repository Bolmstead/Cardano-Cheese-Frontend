import './App.css';
import Bar from './Components/Bar'
import MainPage from './Pages/MainPage'

import { Container } from '@mui/material';


function App() {
  console.log("process.env", process.env)
  return (
    <Container maxWidth="lg" className="App">
      <Bar/>
      <MainPage/>
    </Container>
  );
}

export default App;
