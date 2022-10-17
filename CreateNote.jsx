import React, { useState } from "react";

import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';
const CreateNote = (props) => 
{
    const[expand,setexpand] = useState(false);
    const [note, setnote] = useState({
        tittle: '',
        content: '',
    });
    const InputEvent = (event) => {


        const { name, value } = event.target;

        setnote((prevData) => {
            return {
                ...prevData,
                [name] :value,
            };
        });
    };
    const addEvent=()=>{
        props.passnote(note);
         setnote({
            tittle: '',
        content: '',
         })
    };
     const expandIt=()=>{
        setexpand(true);
     };
     const backtonormal=()=>{
        setexpand(false);
     }
    return (
        <>
            <div className="main_note" onDoubleClick={backtonormal}>
                <form>
               {expand?
                    <input type='text'
                        name="tittle"
                        value={note.tittle}
                        onChange={InputEvent}
                        placeholder="tittle"
                        autoComplete="off" /> :null}
                    <textarea rows=""
                        column=""
                        name="content"
                        value={note.content}
                        onChange={InputEvent}
                        placeholder="write a note..."
                        onClick={expandIt}
                        
                        ></textarea>
                 
                 {expand?
                    <Button onClick={addEvent}>
                        <AddIcon className="plus_sign" />
                    </Button>:null}
                </form>
            </div>

        </>
    );
}
export default CreateNote