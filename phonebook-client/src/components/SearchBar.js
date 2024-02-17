import '../App.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const { faArrowDownZA, faArrowUpAZ, faUserPlus } = require("@fortawesome/free-solid-svg-icons");


function BtnAsc({ sort, setSort }) {
    return (
        <button className='btnSortAsc' onClick={() => { setSort('desc') }}>
            <FontAwesomeIcon icon={faArrowUpAZ} />
        </button>
    )
}
function BtnDesc({ sort, setSort }) {
    return (
        <button className='btnSortDesc' onClick={() => { setSort('asc') }}>
            <FontAwesomeIcon icon={faArrowDownZA} />
        </button>
    )
}
export default function SearchBar({ keyword, setKeyword, sort, setSort }) {
    const handleSearch = (event) => {
        const { value } = event.target
        setKeyword(value)
    }
    return (
        <div className='container-formbar'>
            <div className="container-form">
                {sort === 'asc' || sort.sort === 'asc' ? <BtnAsc sort={sort} setSort={setSort} /> : <BtnDesc sort={sort} setSort={setSort} />}
                <input className="input-form" type="search" value={keyword} onInput={handleSearch} />
                <Link to={"/add"}>
                    <button className='btnAdd'>
                        <FontAwesomeIcon icon={faUserPlus} />
                    </button>
                </Link>
            </div>
        </div>
    )
}