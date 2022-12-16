import './App.css';
import Content from './components/Content/Content';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
  return (
    <div className=' bg-[#131517]'>
      <Header />
      <div className='flex flex-wrap'>
        <div className='hidden border-r border-[#23262F] px-7 xl:block xl:w-3/12 2xl:w-2/12'>
          <Sidebar />
        </div>
        <div className='w-full xl:w-9/12 2xl:w-10/12'>
          <Content />
        </div>
      </div>
    </div>
  );
}

export default App;
