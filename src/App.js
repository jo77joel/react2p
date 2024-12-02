import logo from './logo.svg';
import './App.css';
import Comp1 from './componentes/Comp1';
import Comp2 from './componentes/Comp2';


function App() {
  return (
    <div>
      <div className="container-fluid one py-4 px-0">
        <Comp1/>
      </div>
      <h2 className='title py-2 px-2'>
        Inicio
      </h2>
      <div className='container-fluid d-flex justify-content-center py-5'>
        <Comp2/>
      </div>
    </div>
  );
}

export default App;
