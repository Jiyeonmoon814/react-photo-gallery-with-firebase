import { useState, useEffect } from 'react'
import { projectStorage, projectFirestore, timestamp } from '../firebase/config'

export const useStorage = (file) => {
    const [progress, setProgress] = useState(0)
    const [error, setError] = useState('')
    //Image url that we get back from storage after a file is fully uploaded
    const [url, setUrl] = useState('')

    //useEffect(()=> {parameter}, [dependency])
    //a function inside useEffect is gonna fire 
    //everytime [dependency] which is file changes 
    useEffect(()=>{
        // references
        const storageRef = projectStorage.ref(file.name)
        const collectionRef = projectFirestore.collection('images')

        //this will take a file and put it in the reference
        storageRef.put(file).on('state_changed',(snap)=>{
            //snapshot wile uploading
            let percentage = (snap.byteTransferred / snap.totalBytes) * 100
            setProgress(percentage)
        }, (err) => {
            setError(err)
        }, async () => {
            const url = await storageRef.getDownloadURL()
            const createdAt = timestamp()
            collectionRef.add({url, createdAt})
            setUrl(url)
        })
    },[file])

    return { progress, url, error }

}

