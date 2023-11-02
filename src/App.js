import Home from './components/Home'; // Use 'Google-Keep' with the correct capitalization.
import DataProvider from './context/DataProvider'; // Use 'Google-Keep' with the correct capitalization.

function App() {
  return (
    <DataProvider>
      <Home />
    </DataProvider>
  );
}

export default App;