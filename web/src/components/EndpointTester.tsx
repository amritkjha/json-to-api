import { useState } from "react";

const EndpointTester = () => {
    const [inputUrl, setInputUrl] = useState('');
    const [jsonResponse, setJsonResponse] = useState();
    const [error, setError] = useState<any>();
    const callApi = async() => {
        const response:any = await fetch(inputUrl, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }});
        const data = await response.json();
        setJsonResponse(data);
        console.log('resp: ', data);
    }
    const handleUrlInput = (e:any) => {
        try {
            const url = new URL(e.target.value);
            const allowedHost = new URL(import.meta.env.VITE_API_BASE_URL).hostname;
            console.log('url: ', url);
            if(url.hostname !== allowedHost)setError('only URLs from localhost allowed');
            else setError('');
        } catch (error:any) {
            setError(error.message);
        }
        setInputUrl(e.target.value)
    }
    const testerContainerStyles:any = {
        display: 'flex',
        flexDirection: 'column',
        padding: '21px',
        borderRadius: '12px',
        marginLeft: '36px',
        backgroundColor: 'white',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
    }
    const labelStyles = {
        marginRight: 'auto',
        display: 'flex'
    }
    const inputUrlStyles = {
        padding: '6px 12px',
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
        border: '1px solid #D3D3D3',
        padding: '12px'
    }
    const buttonStyles = {
        backgroundColor: error ? '#A9A9A9' : '#9d00ff',
        color: 'white',
        cursor: error ? 'not-allowed' : 'pointer'
    }
    const errorMessageStyles = {
        color: 'red',
        fontSize: '12px'
    }
    return (
        <div style={testerContainerStyles}>
            <h2>Fetch Mock API</h2>
            <label style={labelStyles}>API URL</label>
            <div style={fetchApiInputStyles}>
                <input style={inputUrlStyles} type="text" value={inputUrl} placeholder="Paste generated URL here" onChange={(e)=>handleUrlInput(e)} />
                <button style={buttonStyles} onClick={callApi}>Fetch</button>
            </div>
            {error && <p style={errorMessageStyles}>{error}</p>}
            <label style={labelStyles}>Response</label>
            <textarea rows={15} cols={50} value={JSON.stringify(jsonResponse)} placeholder="Fetched JSON will appear here..." style={jsonPlaceholderStyles} />
        </div>
    );
}
export default EndpointTester;