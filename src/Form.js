import React, { useDeferredValue, useId, useMemo, useState, useTransition } from 'react'
import StudentList from './StudentList';
import studentListData from './mocks/studentList.json'

export default function Form() {
    const id = useId();
    // console.log({ id })

    const [searhInput, setSearchInput] = useState('');
    // const [filterText, setFilterText] = useState('');
    // const [isPending, startTransition] = useTransition();
    // const deferredValue = useDeferredValue(searhInput);

    // const data = studentListData;
    const data = useMemo(() => {
        return studentListData.map((student) => {
            const index = student.indexOf(searhInput);
            return index === -1 ? (
                <p>{student}</p>
            ) : (
                <p>
                    {student.slice(0, index)}
                    <span style={{ backgroundColor: 'yellow' }}>
                        {student.slice(index, index + searhInput.length)}
                    </span>
                    {student.slice(index + searhInput.length)}
                </p>
            );
        });
    }, [searhInput]);

    const handleSearchInputChange = (e) => {
        setSearchInput(e.target.value);

        // startTransition(() => {
        //     setFilterText(e.target.value);
        // });
    };

    // useId()
    return (
        <>
            <h3>Form</h3>
            {/* <label htmlFor={id}>Name:</label> */}
            <label htmlFor={id}>Search Name:</label>
            <input 
                type='text' 
                name='name' 
                id={id} 
                value={searhInput}
                onChange={handleSearchInputChange}
            />
            {/* {
                isPending ? <p>Loading...</p> : <StudentList data={data} />
            } */}
            <StudentList data={data} />
        </>
    );
}
