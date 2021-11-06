import React, {FC} from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from 'src/components/Header';
import IsRoute from 'src/router'
import setRequestInterceptor from 'src/shared/interceptor/interceptor';


export const App: FC = () => {

  setRequestInterceptor();
  return (
    <div className="App">
        <Router>
          <Header />
          <IsRoute />
        </Router>
    </div>
  );
}

