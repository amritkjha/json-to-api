import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import JsonInput from './components/JsonInput'
import ResultView from './components/ResultView'

function App() {
  const [jsonInput, setJsonInput] = useState('');
  const [generatedLink, setGeneratedLink] = useState('www.amritkjha.com');
  const generateLink = async() => {
    // api call
    const response:any = await fetch('http://localhost:3000/generate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(JSON.parse(jsonInput))
    })
    const data = await response.json();
    setGeneratedLink(data.urll)
    // alert(`Link generated ${response.url}`);
  }

  return (
    <>
      <h1>JsonToAPI</h1>
      <JsonInput jsonInput={jsonInput} setJsonInput={setJsonInput} generateLink={generateLink} />
      <ResultView generatedLink={generatedLink} setGeneratedLink={setGeneratedLink} />
    </>
  )
}

export default App
