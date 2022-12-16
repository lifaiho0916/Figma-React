import './App.css';
import Content from './components/Content/Content';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
  return (
    <div className=' bg-[#131517]'>
      <Header />
      <div className='flex'>
        <div className='w-80 border-r border-[#23262F] px-7'>
          <Sidebar />
        </div>
        <div className='flex-1'>
          <Content />
        </div>
      </div>
    </div>
  );
}

export default App;
