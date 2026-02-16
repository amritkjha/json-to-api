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
        flexDirection: 'column'
    }
    const inputUrlStyles = {
        padding: '6px'
    }
    return (
        <div style={testerContainerStyles}>
            <input style={inputUrlStyles} type="text" value={inputUrl} onChange={(e:any)=>setInputUrl(e.target.value)} />
            <button onClick={callApi}>Get</button>
            <textarea rows={18} cols={36} value={JSON.stringify(jsonResponse)} />
        </div>
    );
}
export default EndpointTester;