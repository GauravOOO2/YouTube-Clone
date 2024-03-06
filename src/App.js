import './App.css';
import { Outlet,
   createBrowserRouter, 
   RouterProvider
} from 'react-router-dom';
import Header from './components/Header';
import Body from './components/Body';
import Watchpage from './components/Watchpage';
import Sidebar from './components/Sidebar'
import { Provider } from 'react-redux';
import appStore from './util/appStore';
import Maincontainer from './components/Maincontainer';




const appRouter = createBrowserRouter([
  {
    path:'/',
    element: <Body/>,
    children:[{
      path:'/',
      element:<Maincontainer />
    },
    {
      path:'/Watchpage/:id',
      element:<Watchpage />
    }  
  ]
  }
])

function App() {
  return (
    <Provider store={appStore} >
      <Header />
      <RouterProvider router={appRouter} />
    </Provider>
  );
}

export default App;
