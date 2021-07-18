import React from 'react'
import { useFireStore } from '../Hooks/useFireStore'

export const ImageGrid = ({ setSelectedImg }) => {
    const { docs } = useFireStore('images')
    return (
        <div class="img-grid">
            { docs && docs.map(doc => (
                <div className="img-wrap" key={doc.id} 
                    onClick={()=> setSelectedImg(doc.url)}>
                    <img src={doc.url} alt="uploaded pic" />
                </div>
            ))}
        </div>
    )
}
