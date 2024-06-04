import React, { useDeferredValue } from 'react'

export default function StudentList({data}) {
    const deferredValue = useDeferredValue(data);
  
    return (
        <>
            <div>StudentList</div>
            <div>
                {deferredValue.map((student) => (
                    <p>{student}</p>
                ))}
            </div>
        </>
    );
}
