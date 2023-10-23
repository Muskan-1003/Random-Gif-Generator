import './App.css';
import Random from "./components/Random"
import Tag from "./components/Tag"

function App() {
  return (
    < div className='  w-full h-screen flex flex-col background relative overflow-x-hidden items-center'>
     <h1 className="text-black w-11/12  text-4xl text-center
      mt-[40px] mx-auto items-center font-bold bg-white rounded-lg py-2 px-10">Random Gif
     </h1>
     <div className='flex flex-col w-full item-center gap-y-10 mt-[30px]'>
      <Random/>
      <Tag/>
     </div>
    </div>
  );
}

export default App;
