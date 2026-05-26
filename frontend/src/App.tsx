import { Outlet } from 'react-router-dom';
import Header from './components/Header';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Header />
      <main className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <Outlet />
      </main>
    </div>
  );
}

export default App;
