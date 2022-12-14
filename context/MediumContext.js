import {createContext, useEffect} from 'react'
import {collection , getDocs , setDoc , doc} from 'firebase/firestore'
import {db} from '../firebase'
import { useState } from 'react'

const MediumContext = createContext()

const MediumProvider = ({children}) => {
    const [users,setUsers] = useState([])
    const [posts,setPosts] = useState([])

    useEffect(()=>{
        const getUsers = async () => {
            const querySnapshot = await getDocs(collection(db,'users'))
    
            querySnapshot.docs.map(doc=>console.log(doc.data()))
        }

        getUsers();
    },[])

    return (
        <MediumContext.Provider value={{posts,users}}>
            {children}
        </MediumContext.Provider>
    )
}



export {MediumContext , MediumProvider}