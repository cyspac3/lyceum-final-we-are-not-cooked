import './App.css'
import './index.css'
import StudyCardSet from './components/studyCardSet'

export default function StudyCardSetPage() {
    return (
        <div>
            <h1>Study Flash cards</h1>
            <p> Choose flash card set</p>
            <StudyCardSet title="Card 1" content="Content 1" />
        </div>
    )
}

export default function App() {
    return (
        <div>
        <h1>Study Flash cards</h1>
            <p> Choose flash card set</p>
            <StudyCardSet title="Card 1" content="Content 1" />
            <StudyCardSet title="Card 2" content="Content 2" />
            <StudyCardSet title="Card 3" content="Content 3" /> 
        </div>
    )
}

