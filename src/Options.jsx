import { Link } from 'react-router-dom'

function Options() {

    return (
        <>
            <h2>Your Choices Are: </h2>
            <ul>
                <li><Link to="/cookies">Cookies</Link></li>
                <li><Link to="/chips">Chips</Link></li>
                <li><Link to="/crackers">Crackers</Link></li>
            </ul>
        </>
    )
}

export default Options