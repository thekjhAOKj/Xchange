'use server'

import {db} from './config/firebase'
import { addDoc , collection , doc } from 'firebase/firestore'

const addPost = async (data) => {
    const collectionref = collection(db , 'items')
    const docRef = await addDoc(collectionref , {
        name : data.get('name'),
        desc : data.get('desc'),
    })

    console.log(docRef)
}
export {addPost}