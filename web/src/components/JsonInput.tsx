const JsonInput = ({ jsonInput, setJsonInput, generateLink }:any) => {
    const jsonInputStyles:any = {
        display: 'flex',
        flexDirection: 'column'
    }
    const jsonPlaceholderStyles = {
        borderRadius: '9px',
        border: '1px solid #D3D3D3'
    }
    return (
        <div style={jsonInputStyles}>
            <textarea rows={25} cols={50} value={jsonInput} style={jsonPlaceholderStyles} onChange={(e:any)=>setJsonInput(e.target.value)} />
            <button onClick={generateLink}>Generate</button>
        </div>
    );
}
export default JsonInput;