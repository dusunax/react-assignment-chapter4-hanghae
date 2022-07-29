import React from "react";
import Layout from "./pages/layout/Layout";
import {db} from './firebase'
import {addDoc, collection, deleteDoc, doc, getDoc, getDocs, query, updateDoc} from 'firebase/firestore'

export default function App() {
  
  React.useEffect(()=>{
    async function fetchData(){
      // console.log(db)
  
      //CREATE
      // addDoc(collection(db, 'todos'), {title: '제목2', context:"내용2", done: false})
  
      //UPDATE
      // const docRef = doc(db, 'todo', 'wWVyFh6Gejq09GexFNzJ');
      // updateDoc(docRef, {done: false})

      //DELETE
      const docRef = doc(db, 'todo', 'wWVyFh6Gejq09GexFNzJ');
      // deleteDoc(docRef)

      //READ
      const query = await getDocs(collection(db, 'todo'))
      console.log("--firestore--")
      query.forEach((doc)=>{
        console.log(doc.id, doc.data())
      })
      console.log("-------------")
      
    }
    fetchData();
  },[])

  return (
    <div className="App">
      <Layout />
    </div>
  );
}
