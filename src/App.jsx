
import { Suspense } from 'react';
import './App.css'
import Bottles from './component/bottles/bottles';

function App() {

  const bottlesPromise = fetch("bottles.json").then(res => res.json());
  return (
    <>
      <h1>Buy Awsome Water Bottles</h1>
      <Suspense>
        <Bottles bottlesPromise={bottlesPromise}></Bottles>
      </Suspense>


    </>
  )
}

export default App
