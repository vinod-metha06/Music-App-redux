import { Provider } from 'react-redux';
import Main from './navigation/main';
import { myStore } from './redux/store/store';


const App = () => {

  return (
    <Provider store={myStore}>
      <Main/>
    </Provider>
  
  )
};

export default App;
