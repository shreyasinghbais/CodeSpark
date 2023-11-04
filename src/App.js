import Main from './components/Main';
import DataProvider from './context/DataProvider';

function App() {
  return (
    <div className="App">
      <DataProvider>
        <Main/>
      </DataProvider> 
    </div>
  );
}

export default App;
