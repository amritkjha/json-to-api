const ResultView = ({ generatedLink }:any) => {
    const handleCopyToClipboard = () => {
        navigator.clipboard.writeText(generatedLink);
        alert('Link successfully copied to clipboard!');
    }
    return (
        <div>
            <p>{generatedLink}</p>
            <button onClick={handleCopyToClipboard}>Copy</button>
        </div>
    );
}
export default ResultView;