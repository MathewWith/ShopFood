import React, {FC} from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Buttons from 'src/components/Buttons';
import Header from 'src/components/Header';
import IsRoute from 'src/components/routes/routes'
import setRequestInterceptor from 'src/shared/interceptor/interceptor';


export const App: FC = () => {

  setRequestInterceptor();
  return (
    <div className="App">
        <Router>
          <Header />
          <Buttons />
          <IsRoute />
        </Router>
    </div>
  );
}

