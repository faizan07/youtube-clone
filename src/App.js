import './App.css';
import Header from './components/Header';
import Body from './components/Body';
import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import store from './utils/store';
import MainContainer from './components/MainContainer';
import Video from './components/Video';

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
