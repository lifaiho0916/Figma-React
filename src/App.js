import './App.css';
import Content from './components/Content/Content';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
  return (
    <div className=' bg-[#131517]'>
      <Header />
      <div className='flex flex-wrap'>
        <div className='w-3/12 border-r border-[#23262F] px-7'>
          <Sidebar />
        </div>
        <div className='w-9/12'>
          <Content />
        </div>
      </div>
    </div>
  );
}

export default App;
