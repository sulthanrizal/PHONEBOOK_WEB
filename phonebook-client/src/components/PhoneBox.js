
import { useState } from "react";
import SearchBar from "./SearchBar";
import PhoneList from "./PhoneList";

export default function PhoneBox() {
    const [keyword, setKeyword] = useState('');
    const [sort, setSort] = useState('asc')
    return (
        <div className="container">
            <div className="header">
                <SearchBar keyword={keyword} setKeyword={setKeyword} sort={sort} setSort={setSort} />
            </div>
            <div className="body">
                <PhoneList keyword={keyword} sort={sort} />
            </div>
        </div>
    )
}