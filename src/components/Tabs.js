import { Link } from 'react-router-dom'
import '../styles/dashboard.scss'

const Tabs = ({ uniqueTags }) => {
    return (
        <ul className="tabs">
            {uniqueTags.map((tag) => <li key={tag} className="tabs__item">
                <Link className="tabs__link" to={`/search/${tag}`}>{tag}</Link>
            </li>)}
        </ul>
    )
}

export default Tabs;