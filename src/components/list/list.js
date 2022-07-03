import { React, useEffect, useState } from 'react';
import { ListItem, ListHeader } from '../listItem/list-item.js';
import { db } from '../../database/firebase-config';
import { collection, getDocs } from 'firebase/firestore';

const listStyle = {
    backgroundColor: "blue",
    margin: "5rem 5rem",
    padding: "2rem",
}

function List() {
    const [assignments, setAssignments] = useState([]);
    const assignmentsCollRef = collection(db, "assignment");

    useEffect(() => {
        const getAssignments = async () => {
            const data = await getDocs(assignmentsCollRef);
            setAssignments(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
        };

        getAssignments();
    }, []);

    return (
        <div style={listStyle}>
        <ListHeader/>
        {assignments.map((assignment) => {
            return <ListItem 
            key={assignment.id} 
            name={assignment.family} 
            date={assignment.dueDate}
            cleaningAssignment={assignment.id} 
            tasks={assignment.tasks}/>
        })}</div>
    );

}

export default List;