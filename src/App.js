import './App.css';
import Content from './components/Content/Content';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
  return (
    <div className='h-screen bg-[#131517]'>
      <Header />
      <div className='flex'>
        <div className='w-72 px-4'>
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
