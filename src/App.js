import './App.css';
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import PageContent from './components/PageContent'
import Footer  from './components/Footer';
import { BrowserRouter} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Header/>
      <div className="Sidebarandpagecontent">
      <BrowserRouter>
        <Sidebar/>
        
        <PageContent/>
        </BrowserRouter>
      </div>
          
      <Footer/>
    </div>
    
  )
}

export default App;
