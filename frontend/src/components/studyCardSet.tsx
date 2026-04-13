function StudyCardSet( {title, content}: {title: string, content: string} ) {
    function handleStudy() {
        
    }
    
    return (
        <div style={{ border: '1px solid black', padding: '10px', margin: '10px', width: '300px'}}>
            <h3>{title}</h3>
            <p>{content}</p>
            <button onClick={handleStudy}>Study</button>
        </div>
    )
}

export default StudyCardSet;