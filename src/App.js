import './App.css';
import Counter from './components/Counter';
import Message from './components/Message';
import Welcome from './components/Welcome';
import Greet from './components/Greet';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <Greet name="Jane" heroName="Doe" /> */}
        {/* <Welcome name="Matt" heroName="Smith" /> */}
        {/* <FunctionClick></FunctionClick> */}
        {/* <ClassClick></ClassClick> */}

        {/* <EventBind></EventBind> */}
        <ParentComponent></ParentComponent>
      </header>
    </div>
  );
}

export default App;
