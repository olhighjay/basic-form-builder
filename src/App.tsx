
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { routes } from './routes';
import { GlobalStyles } from './styles/GlobalStyles';
import { AppThemeProvider } from './AppThemeProvider';
import Navbar from './components/layout/Navbar';

function App() {
  return (
    <AppThemeProvider>
      <GlobalStyles />
      <Router>
        <div className="App">
          <Navbar />
          <Routes>
            {routes.map((route, index) => (
              <Route
                key={route.path || index}
                path={route.path}
                element={route.element}
              />
            ))}
          </Routes>
        </div>
      </Router>
    </AppThemeProvider>
  );
}

export default App;
