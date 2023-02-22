import React, { useState } from 'react'
import Footer from '../Components/Footer';
import TaskList from '../Components/TaskList';
import Input from './../Components/Input';

function AllPage() {


    return (
        <div  >
            <Input />
            <TaskList />
            <Footer />
        </div>
    )
}

export default AllPage
