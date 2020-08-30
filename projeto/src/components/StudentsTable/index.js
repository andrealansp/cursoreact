import React, { useState } from "react";
import './index.css';


export default function StudentsTable(props){

    const [students, setStudents] = useState([{
        id: 0,
        name: 'Otávio',
        email: 'otavio.lube@faesa.br',
        institution: 'faesa'
    },
    {
        id: 1,
        name: 'André',
        email: 'andre@faesa.br',
        institution: 'faesa'
    },
    {
        id: 2,
        name: 'João',
        email: 'joao@faesa.br',
        institution: 'faesa'
    }
    ])
    
    function insertRandonStudents() {
    const randomNumber = Math.random() * 100
    let newStudent = {
        id: `${randomNumber/100}`,
        name: `student${randomNumber}`,
        email: `student${randomNumber}@gmail.com`,
        institution: `instutition${randomNumber}`
    }
    console.log('Student Created', newStudent);
    setStudents([...students, newStudent]);
    


}


   return(
       <>
   <table>
    <thead>
        <tr>
            <td>Nome</td>
            <td>Email</td>
            <td>Instituição</td>
        </tr>
    </thead>
    <tbody>
        {students.map(s => {
            return(
                <tr key={s.id}>
                    <td>{s.name}</td>
            <td>{s.email}</td>
            <td>{s.institution}</td>
                </tr>
            )
        })}
    </tbody>
</table>

<button type="button" onClick={insertRandonStudents}>Inserir Aluno Aleatório</button>
</>
   )}