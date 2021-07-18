import React, { useState } from 'react'

export const UploadForm = () => {
    const [file, setFile] = useState('')
    const [error, setError] = useState('')

    const types = ['image/png', 'image/jpeg', 'image/jpg']

    const changeHandler = (e) => {
        let selected = e.target.files[0]

        if(selected&&types.includes(selected.type)){
            setFile(selected)
            setError('')
        }else{
            setFile('')
            setError('Please select an image file (png or jpeg or jpg)')
        }

        console.log(selected)
    }
    return (
        <form>
            <label htmlFor="">
                <input type="file" onChange={changeHandler} />
                <span>+</span>
            </label>
            <div className="output">
                {error&&<div className="error">{error}</div>}
                {file&&<div>{file.name}</div>}
            </div>
        </form>
    )
}
