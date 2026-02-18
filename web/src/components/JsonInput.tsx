const JsonInput = ({ jsonInput, setJsonInput, generateLink }:any) => {
    const jsonInputStyles:any = {
        display: 'flex',
        flexDirection: 'column'
    }
    const jsonPlaceholderStyles = {
        borderRadius: '9px',
        border: '1px solid #D3D3D3',
        marginBottom: '12px',
        padding: '12px'
    }
    const buttonStyles = {
        backgroundColor: '#007BFF',
        color: 'white'
    }
    return (
        <div style={jsonInputStyles}>
            <textarea rows={15} cols={50} value={jsonInput} style={jsonPlaceholderStyles} placeholder={`{"key": "value"}`} onChange={(e:any)=>setJsonInput(e.target.value)} />
            <button style={buttonStyles} onClick={generateLink}>Generate API</button>
        </div>
    );
}
export default JsonInput;