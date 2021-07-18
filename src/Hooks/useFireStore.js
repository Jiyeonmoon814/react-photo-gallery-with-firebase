import { useState, useEffect } from 'react'
import { projectFirestore } from '../firebase/config'

export const useFireStore = (collection) => {
    const [docs, setDocs] = useState([])

    useEffect(()=>{
        const unsub = projectFirestore.collection(collection)
        .orderBy('createdAt', 'desc')
        //this method fires a callback function everytime smth inside collection changes
        //it takes in a snapshot obj and this represent a snapshot that moment in time of a db collection
        //so snap contains all the docs in collection 
        //everytime new event occurs like a new doc being added then it gets a snapshot which all docs are added 
        //so It could be a real time db update 
        .onSnapshot((snap)=>{
            let documents = []
            snap.forEach(doc => {
                documents.push({...doc.data(), id:doc.id})
            })
            setDocs(documents)
        })

        return () => unsub()
        
    }, [collection])

    return (
        { docs }
    )
}
