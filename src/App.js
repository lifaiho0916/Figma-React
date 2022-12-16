import './App.css';
import Content from './components/Content/Content';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
  return (
    <div className='h-screen bg-[#131517]'>
      <Header />
      <div className='flex'>
        <div className='w-3/12'>
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
