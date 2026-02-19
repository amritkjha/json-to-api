import { useState } from "react"

const JsonInput = ({ jsonInput, setJsonInput, generateLink }:any) => {
    const [error, setError] = useState('');
    const jsonInputStyles:any = {
        display: 'flex',
        flexDirection: 'column'
    }
    const jsonPlaceholderStyles = {
        borderRadius: '9px',
        border: '1px solid #D3D3D3',
        marginBottom: '6px',
        padding: '12px'
    }
    const validateJson = (val:string) => {
        try {
            JSON.parse(val);
            setError('')
        } catch (err:any) {
            console.log('err: ', err, Object.keys(err));
            setError(err.message);
        }
        console.log('validated', error);
    }
    const buttonStyles = {
        backgroundColor: error?'#A9A9A9':'#007BFF',
        color: 'white',
        cursor: error?'not-allowed':'pointer',
        marginTop: '6px',
    }
    const handleJsonChange = (e:any) => {
        setJsonInput(e.target.value);
        validateJson(e.target.value);
    }
    const errorMessageStyles = {
        color: 'red',
        fontSize: '12px'
    }
    return (
        <div style={jsonInputStyles}>
            <textarea rows={15} cols={50} value={jsonInput} style={jsonPlaceholderStyles} placeholder={`{"key": "value"}`} onChange={(e)=>handleJsonChange(e)} />
            {error && <span style={errorMessageStyles}>{error}</span>}
            <button style={buttonStyles} onClick={generateLink} disabled={error?true:false}>Generate API</button>
        </div>
    );
}
export default JsonInput;