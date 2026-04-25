import {
  collection, doc, setDoc, updateDoc, deleteDoc,
  runTransaction, serverTimestamp, onSnapshot, query, orderBy,
} from 'firebase/firestore'
import { db } from '@/firebase'
//this entire doc covers the modification
//of database in firebase
async function getNextStarId() {
    const starCount = doc(db, 'counters', 'starCount')
    return await runTransaction(db, async (transaction) => {
        const counterDoc = await transaction.get(starCount)

        //essentially if the document for counting stars doesn't exist we create one and set the total to 1
        if (!counterDoc.exists()) {
            transaction.set(starCount, {total: 1})
            return 1
        }
        // if it's greater, the Doc would update it's total +1
        const next = counterDoc.data().total+1
        transaction.update(counterRef, {total: next})
        return next
    })
}

export async function addUserStar(uid, { title, desc, achievement, location }) {
  const starId = await getNextStarId()
  const star = { star_id: starId, x: Math.random(), y: Math.random(), title, desc, achievement, location, createdAt: serverTimestamp() }
  await setDoc(doc(db, 'users', uid, 'stars', String(starId)), star)
  return star
}

export async function addAnonymousStar({ title, desc, achievement, location }) {
    const starId = await getNextStarId()
    const star = { star_id: starId, x: Math.random(), y: Math.random(), title, desc, achievement, location, createdAt: serverTimestamp() }
  await setDoc(doc(db, 'anonymous_stars', String(starId)), star)
  return star
}