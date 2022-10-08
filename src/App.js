import React from 'react';
import {
  BrowserRouter as Router, Route, Routes
} from 'react-router-dom';
import './App.css';
import { StyledPage } from './musicSearch/components/StyledPage';
import { routes } from './musicSearch/routes/routes';

const App = () => {
  return (
    <div style={{ height: '100vh', width: '100vw', maxHeight: '100vh' }}>
      <Router>
        <Routes>
          {
            routes.map(route => (
              <Route key={route.to} exact end path={route.to} element={
                <StyledPage
                  Content={route.content}
                  contentHeading={route.heading}
                />
              } />))
          }
        </Routes>
      </Router>
    </div >
  );
};

export default App;
