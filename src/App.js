import './App.css';
import TodoAdd from './Component/TodoAdd';
import TodoList from './Component/TodoList';
import TodoSearch from './Component/TodoSearch';

function App() {
  return (
    <div className="App">
        <section className="container">
  <div className="heading">
    <img className="heading__img" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/756881/laptop.svg"/>
    <h1 className="heading__title">To-Do List</h1>
  </div>
        <TodoAdd />
       <TodoSearch />
        <TodoList /> 
</section>
    </div>
  );
}

export default App;
