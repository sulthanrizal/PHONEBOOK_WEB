import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { addPhonebooks } from "../redux/api";


export default function PhoneAdd() {
    const [user, setUser] = useState({ name: '', phone: '' })
    let navigate = useNavigate()
    const dispatch = useDispatch()

    const AddData = (e) => {
        e.preventDefault()
        dispatch(addPhonebooks(user))
        navigate('/')
    }
    return (
        <form onSubmit={AddData}>
            <div className="container-form-add">
                <div className="header-add">
                    <input type="text" placeholder="add your name" onChange={(e) => setUser({ ...user, name: e.target.value })} />
                    <input type="text" placeholder="add your phone" onChange={(e) => setUser({ ...user, phone: e.target.value })} />
                </div>
                <div className="btn-form-add">
                    <button type="submit" >save</button>
                    <Link to={'/'}>cancel</Link>
                </div>
            </div>
        </form >
    )
}