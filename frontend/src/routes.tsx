import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Projects from './pages/Projects';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'projects',
        element: <Projects />,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
      {
        path: '*',
        element: (
          <div>
            <h1 className="text-2xl font-semibold text-heading">Not found</h1>
            <p className="mt-2 text-muted">This page does not exist.</p>
          </div>
        ),
      },
    ],
  },
]);
