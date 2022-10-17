
// Google Keep APP in react
import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import CreateNote from "./CreateNote";
import Note from "./Note";
const App = () => {
    const [additem, setitem] = useState([]);
    const addnote = (note) => {
        setitem((prevData) => {
            return [...prevData, note]
        });

    };

    const onDelete = (id) => {
        setitem((olddata) =>
            olddata.filter((currdata, indx) => {
                return indx !== id;
            })
        )

    };

    return (
        <>
            <Header />

            <CreateNote
                passnote={addnote}
            />

            {additem.map((val, index) => {
                return (
                    <Note
                        key={index}
                        id={index}
                        tittle={val.tittle}
                        content={val.content}
                        deleteItem={onDelete}
                    />)
            })}
            <Footer />

        </>
    )
}
export default App

