import React, { useContext } from 'react'
import Header from '../Components/Header/Header'
import View from '../Components/View/View'
import { PostContext } from '../store/PostContext'
import { useParams } from 'react-router-dom'
import Footer from '../Components/Footer/Footer'


function ViewPost(props) {


    const {id} = useParams()
    console.log(id);
    return (
        <div>
            <Header />
            <View id={id}/>
            <Footer/>
        </div>
    )
}

export default ViewPost
