import { faArrowRotateLeft, faFloppyDisk, faPenToSquare, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { confirmAlert } from "react-confirm-alert";
import 'react-confirm-alert/src/react-confirm-alert.css';
import '../App.css';
import { deletePhonebooks, updateAvatar, updatePhonebooks } from "../redux/api";


export default function PhoneItem({ user }) {
    const [edit, setEdit] = useState(false)
    const [newData, setNewData] = useState({ name: user.name, phone: user.phone })
    const [selectImage, setSelectImage] = useState({})
    const dispatch = useDispatch()
    const inputFile = useRef(null)


    const imageSet = (e) => {
        if (e.target.files && e.target.files.length > 0) {
            setSelectImage(e.target.files[0])
        }
    };
    const showFileUpload = () => {
        inputFile.current.click()
    }
    useEffect(() => {
        if (selectImage) {
            const dataNew = new FormData();
            dataNew.append("avatar", selectImage);
            dispatch(updateAvatar({ id: user.id, formData: dataNew }));
        }

    }, [selectImage]);
    const updateData = (id, contact) => {
        dispatch(updatePhonebooks({ id, contact }))
        setEdit(false)
    }
    const submit = (user) => {
        confirmAlert({
            title: `Konfirmasi`,
            message: `Apakah anda yakin ingin menghapus data ${user.name} ?`,
            buttons: [
                {
                    label: 'Ya',
                    onClick: () => dispatch(deletePhonebooks({ id: user.id }))
                },
                {
                    label: 'Tidak'
                }
            ]

        })
    }
    if (edit) {
        return (
            <div className="container-item">
                <div className="container-item-content">
                    <div className="header-item">
                        <div className="btn-item-img">
                            <button className="btn-img-content" onClick={showFileUpload}>
                                <img src={"http://localhost:3001/images/" + (user.avatar == null ? 'user-tie-solid.svg' : `${user.avatar}`)} />
                            </button>
                            <input type="file" accept='image/*' name="avatar" id='file' ref={inputFile} style={{ display: "none" }} onChange={imageSet} />
                        </div>
                    </div>
                    <div className="body-item-edit">
                        <div className="edit-item-identity">
                            <input type="text" value={newData.name} onChange={(event) => setNewData({ ...newData, name: event.target.value })} />
                            <input type="text" value={newData.phone} onChange={(event) => setNewData({ ...newData, phone: event.target.value })} />
                        </div>
                        <div className="btn-item">
                            <button onClick={() => { updateData(user.id, { name: newData.name, phone: newData.phone }); }}>
                                <FontAwesomeIcon icon={faFloppyDisk} />
                            </button>
                            <button>
                                <FontAwesomeIcon icon={faArrowRotateLeft} onClick={() => { setEdit(false) }} />
                            </button>
                        </div>
                    </div>
                </div>
            </div >
        )
    } else {
        return (
            <div className="container-item" key={user.name}>
                <div className="container-item-content">
                    <div className="header-item">
                        <div className="btn-item-img">
                            <button className="btn-img-content" onClick={showFileUpload}>
                                <img src={"http://localhost:3001/images/" + (user.avatar == null ? `user-tie-solid.svg` : `${user.avatar}`)} />
                            </button>
                            <input type="file" accept='image/*' name="avatar" id='file' ref={inputFile} style={{ display: "none" }} onChange={imageSet} />
                        </div>
                    </div>
                    <div className="body-item">
                        <div className="item-identity">
                            <p>{user.name}</p>
                            <p>{user.phone}</p>
                        </div>
                        <div className="btn-item">
                            <button>
                                <FontAwesomeIcon icon={faPenToSquare} onClick={() => { setEdit(true) }} />
                            </button>
                            <button onClick={() => submit(user)} >
                                <FontAwesomeIcon icon={faTrashCan} />
                            </button>
                        </div>
                    </div>
                </div>
            </div >
        )
    }
}