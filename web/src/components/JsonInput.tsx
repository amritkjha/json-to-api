const JsonInput = ({ jsonInput, setJsonInput, generateLink }:any) => {
    return (
        <div>
            <textarea rows={25} cols={50} value={jsonInput} onChange={(e:any)=>setJsonInput(e.target.value)} />
            <button onClick={generateLink}>Generate</button>
        </div>
    );
}
export default JsonInput;