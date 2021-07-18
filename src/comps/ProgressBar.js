import React, { useEffect } from 'react'
import { useStorage } from '../Hooks/useStorage'
import { motion } from 'framer-motion'

export const ProgressBar = ({ file, setFile }) => {
    //this hook is going to fire useEffect from useStorage
    //then create file ref and try to upload a file
    //and that moment in time we get url, progress
    const { url, progress } = useStorage(file)
    
    useEffect(() => {
        if(url) {
            setFile(null)
        }
    }, [url, setFile])
    return (
        <motion.div className="progress-bar"
                    initial={{ width:0 }} animate={{ width: progress + '%' }}
            ></motion.div>
    )
}
