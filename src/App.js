import logo from './logo.svg';
import './App.css';
import FullName from './Components/FullName';
import Adresse from './Components/Adresse';
import ProfilePhoto from './Components/ProfilePhoto';

function App() {
  return (
   <div className='dd'>
    <FullName></FullName>
    <ProfilePhoto></ProfilePhoto>
    <Adresse></Adresse>
   </div>

  );
}

export default App;
