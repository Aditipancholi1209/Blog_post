import Search from './Search';
import Pagination from './Pagination';
import Stories from './Stories';
import './App.css'
const App = () => {
  return (
    <div>
      <h1>TECH NEWS</h1>
      <Search />
      <Pagination />
      <Stories />
    </div>
  );
};

export default App;