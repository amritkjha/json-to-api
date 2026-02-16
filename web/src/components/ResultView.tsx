const ResultView = ({ generatedLink }:any) => {
    const handleCopyToClipboard = () => {
        navigator.clipboard.writeText(generatedLink);
        alert('Link successfully copied to clipboard!');
    }
    const resultContainerStyles:any = {
        display: 'flex',
    }
    return (
        <div style={resultContainerStyles}>
            <p>{generatedLink}</p>
            <button onClick={handleCopyToClipboard}>❐</button>
        </div>
    );
}
export default ResultView;