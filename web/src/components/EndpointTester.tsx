import { useState } from "react";

const EndpointTester = () => {
    const [inputUrl, setInputUrl] = useState('');
    const [jsonResponse, setJsonResponse] = useState();
    const callApi = async() => {
        // logic here
        const response:any = await fetch(inputUrl, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }});
        const data = await response.json();
        setJsonResponse(data);
        console.log('resp: ', data);
        // const generateLink = async() => {
        // api call
        // const response:any = await fetch('http://localhost:3000/generate', {
        // method: 'POST',
        // headers: {
        //     'Content-Type': 'application/json'
        // },
        // body: JSON.stringify(JSON.parse(jsonInput))
        // })
    }
    const testerContainerStyles:any = {
        display: 'flex',
        flexDirection: 'column',
        width: '40%',
        border: '1px solid #D3D3D3',
        padding: '21px',
        borderRadius: '12px',
        marginLeft: '36px'
    }
    const labelStyles = {
        marginRight: 'auto',
        display: 'flex'
    }
    const inputUrlStyles = {
        padding: '6px',
        border: '1px solid #D3D3D3',
        width: '90%',
        borderRadius: '9px',
        marginRight: '3px'
    }
    const fetchApiInputStyles = {
        display: 'flex'
    }
    const jsonPlaceholderStyles = {
        borderRadius: '9px',
        border: '1px solid #D3D3D3'
    }
    return (
        <div style={testerContainerStyles}>
            <h2>Fetch Mock API</h2>
            <label style={labelStyles}>API URL</label>
            <div style={fetchApiInputStyles}>
                <input style={inputUrlStyles} type="text" value={inputUrl} onChange={(e:any)=>setInputUrl(e.target.value)} />
                <button onClick={callApi}>Fetch</button>
            </div>
            <label style={labelStyles}>Response</label>
            <textarea rows={18} cols={36} value={JSON.stringify(jsonResponse)} style={jsonPlaceholderStyles} />
        </div>
    );
}
export default EndpointTester;