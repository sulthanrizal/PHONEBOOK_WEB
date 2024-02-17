// import { faArrowDownZA, faArrowUpAZ, faArrowUpZA, faMagnifyingGlass, faUserPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDownZA, faArrowUpZA, faUserPlus, } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom"



<<<<<<< HEAD
const ButtonSortAsc = ({ sort, setPage, setSort }) => {
=======
const ButtonSortAsc = ({ sort, setSort, setPage }) => {
>>>>>>> 6e925ee271ad091a0b98423f8b11abdec18af87f
    return (
        <button className='btnSortAsc' onClick={() => {
            setSort('desc')
            setPage(1)
        }}>
            <FontAwesomeIcon icon={faArrowDownZA} id='center' />
        </button>
    )
}

<<<<<<< HEAD
const ButtonSortDesc = ({ sort, setPage, setSort }) => {
=======
const ButtonSortDesc = ({ sort, setSort, setPage }) => {
>>>>>>> 6e925ee271ad091a0b98423f8b11abdec18af87f
    return (
        <button className='btnSortDesc' onClick={() => {
            setSort('asc')
            setPage(1)
        }}>
            <FontAwesomeIcon icon={faArrowUpZA} id='center' />
        </button>
    )
}

const ButtonAdd = () => {
    return (
        <button className='btnAdd'>
            <FontAwesomeIcon icon={faUserPlus} />
        </button>
    )
}

export default function FormBar({ setPage, keyword, setKeyword, sort, setSort }) {
    const handleSearch = (event) => {
        const { value } = event.target
        console.log(value, 'wkkw')
        setKeyword(value)
        setPage(1)
    }
    return (
        <div className='container-formbar'>
            <div className="container-form">
<<<<<<< HEAD
                {sort === 'asc' || sort.sort == 'asc' ? <ButtonSortAsc setPage={setPage} sort={sort} setSort={setSort} /> : <ButtonSortDesc setPage={setPage} sort={sort
=======
                {sort === 'asc' || sort.sort == 'asc' ? <ButtonSortAsc sort={sort} setSort={setSort} setPage={setPage} /> : <ButtonSortDesc setPage={setPage} sort={sort
>>>>>>> 6e925ee271ad091a0b98423f8b11abdec18af87f
                } setSort={setSort} />}
                <input className="input-form" value={keyword} placeholder='search your name' onInput={handleSearch} />
                <Link to='/add'> <ButtonAdd /> </Link>

            </div>
        </div>

    )
}