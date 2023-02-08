import { createBrowserRouter } from 'react-router-dom';
import Main from '../layout/Main';
import Home from '../pages/Home';
import Authentication from '../pages/Authentication';


export const routes = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
          {
            path: "/",
            element: <Home />,
            },
            {
                path: "/authentication",
                element: <Authentication />,
              },
        ],
      },
])