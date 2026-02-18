const ResultView = ({ generatedLink }:any) => {
    const handleCopyToClipboard = () => {
        navigator.clipboard.writeText(generatedLink);
        alert('Link successfully copied to clipboard!');
    }
    const resultContainerStyles:any = {
        backgroundColor: '#F0FDF4',
        border: '1px solid #c6f6d5',
        borderRadius: '9px',
        marginTop: '12px',
        padding: '15px'
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
    const linkContainerStyles = {
        display: 'flex'
    }
    const buttonStyles = {
        backgroundColor: '#16A34A',
        color: 'white'
    }
    return (
        <div style={resultContainerStyles}>
            <label style={labelStyles}>Generated URL</label>
            <div style={linkContainerStyles}>
                <input style={inputUrlStyles} type="text" value={generatedLink} placeholder="Paste generated URL here" />
                <button style={buttonStyles} onClick={handleCopyToClipboard}>Copy</button>
            </div>
        </div>
    );
}
export default ResultView;