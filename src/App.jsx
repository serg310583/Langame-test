import { RouterProvider } from 'react-router-dom';
import style from './App.module.scss';
import { router } from './route/router';
import './style/index.scss';
function App() {
  return (
    <div className={style.appWindow}>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
