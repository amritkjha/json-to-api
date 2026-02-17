import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import JsonInput from './components/JsonInput'
import ResultView from './components/ResultView'
import EndpointTester from './components/EndpointTester';

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

  const AppContainer = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    columnGap: '36px'
  }

  const ApiGeneratorContainerStyles = {
    border: '1px solid #D3D3D3',
    padding: '21px',
    borderRadius: '12px'
  }

  const ApiGeneratorTitleStyles = {
    display: 'flex',
    justifyContent: 'space-between'
  }

  const jsonFormatterStyles = {
    color: 'blue',
    cursor: 'pointer'
  }

  const labelStyles = {
    marginRight: 'auto',
    display: 'flex'
  }

  return (
    <>
      <h1>JsonToAPI</h1>
      <p>Create instant mock APIs from your custom JSON data</p>
      <div style={AppContainer}>
        <div style={ApiGeneratorContainerStyles}>
          <div style={ApiGeneratorTitleStyles}>
            <h2>Create Mock API</h2>
            <p style={jsonFormatterStyles}>Format JSON</p>
          </div>
          <label style={labelStyles}>JSON Data</label>
          <JsonInput jsonInput={jsonInput} setJsonInput={setJsonInput} generateLink={generateLink} />
          <ResultView generatedLink={generatedLink} setGeneratedLink={setGeneratedLink} />
        </div>
        <EndpointTester />
      </div>
    </>
  )
}

export default App
