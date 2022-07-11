import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import OtherPage from './OtherPage';
import Fib from './Fib';

function App() {
  return (
    <Router>
      <div className="bg-slate-800 text-xl flex flex-col h-full">
        <header className="bg-sky-700 text-3xl font-['Permanent_Marker'] text-sky-100 p-4 flex justify-between">
          <h1 className="text-pink-400">Fib</h1>
          <div className="flex justify-between w-fit">
            <Link className="px-3" to="/">Home</Link>
            <Link className="px-3" to="/otherpage">Other Page</Link>
          </div>
        </header>
        <main className="w-4/5 mx-auto mt-10 text-slate-300 basis-full">
          <Routes>
            <Route path="/" element={<Fib />} />
            <Route path="/otherpage" element={<OtherPage />} />
          </Routes>
        </main>
      </div>
    </Router>

  );
}

export default App;
