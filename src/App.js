import React, { useEffect } from 'react';
import BackwardCounter from './components/BackwardCounter';
import ForwardCounter from './components/ForwardCounter';
import useHttp from './hooks/use-http';

function App() {


  const { data, isLoading, error, loadData } = useHttp()


  const fetchData = () => {
    loadData("https://swapi.dev/api/film");
  }

  useEffect(() => {
    console.log(data);
  }, [data]);

  useEffect(() => {
    console.log(isLoading);
  }, [isLoading])



  return (
    <React.Fragment>
      <ForwardCounter />
      <BackwardCounter />
      <div style={{ textAlign: 'center' }}><button style={{ backgroundColor: 'gray', padding: '5px 12px', color: '#fff', border: '1px solid gray', fontSize: '20px' }} onClick={fetchData}>Load Data</button></div>
      {!isLoading && error && <p style={{ textAlign: 'center', color: 'red' }}>{error}</p>}
    </React.Fragment>
  );
}

export default App;
