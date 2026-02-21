import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import JsonInput from './components/JsonInput'
import ResultView from './components/ResultView'
import EndpointTester from './components/EndpointTester';

function App() {
  const [jsonInput, setJsonInput] = useState('');
  const [generatedLink, setGeneratedLink] = useState('');
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
  const generateLink = async() => {
    // api call
    const response:any = await fetch(`${API_BASE_URL}/generate`, {
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

  const handleFormatting = () => {
    let newJson = JSON.stringify(JSON.parse(jsonInput), null, 2);
    setJsonInput(newJson);
  }

  const AppContainer = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    columnGap: '36px'
  }

  const ApiGeneratorContainerStyles = {
    padding: '21px',
    borderRadius: '12px',
    backgroundColor: 'white',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
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

  const AppTitleStyles = {
    fontSize: '45px',
    fontWeight: 'bold',
    margin: '0'
  }

  return (
    <>
      <p style={AppTitleStyles}>JsonToAPI</p>
      <p style={{ marginTop: '0' }}>Create instant mock APIs from your custom JSON data</p>
      <div style={AppContainer}>
        <div style={ApiGeneratorContainerStyles}>
          <div style={ApiGeneratorTitleStyles}>
            <h2>Create Mock API</h2>
            <p style={jsonFormatterStyles} onClick={handleFormatting}>Format JSON</p>
          </div>
          <label style={labelStyles}>JSON Data</label>
          <JsonInput jsonInput={jsonInput} setJsonInput={setJsonInput} generateLink={generateLink} />
          {generatedLink&&<ResultView generatedLink={generatedLink} setGeneratedLink={setGeneratedLink} />}
        </div>
        <EndpointTester />
      </div>
    </>
  )
}

export default App
