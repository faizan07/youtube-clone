import './App.css';
import Header from './components/Header';
import Body from './components/Body';
import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import store from './utils/store';
import MainContainer from './components/MainContainer';
import Video from './components/Video';
import Demo from './components/Demo';
import Registration from './components/Registration';

const appRouter = createBrowserRouter([{
  path:'/',
  element: <Body/>,
  children:[
    {
      path: '/',
      element: <MainContainer/>,
    },
    {
      path:'watch',
      element:<Video/>
    },
    {
      path: 'demo',
      element: <Demo/>
    },
    {
      path: 'register',
      element: <Registration/>
    }]
}])

function App() {
  return (
    <Provider store={store}>
      <Header/>
      <RouterProvider router={appRouter} />
    </Provider>
  );
}

export default App;
