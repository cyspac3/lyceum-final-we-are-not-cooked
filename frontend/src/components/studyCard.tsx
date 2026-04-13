function StudyCard( {title, content}: {title: string, content: string} ) {
    return (
        <div>
            <h2>Study Card</h2>
            <h3>{title}</h3>
            <p>{content}</p>
        </div>
    )
}

export default StudyCard;