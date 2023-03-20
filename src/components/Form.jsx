import { TextField } from '@mui/material';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import React from 'react';
import { useState } from "react";

export default function Form({addTodo}) {
    const [text, setText] = useState(null);
    
    const [id, setId] = useState(0);
    
    const todoCreate = (text) => {
        const todoObj = {text: text, id:id};  
        setId(id + 1);
        addTodo(todoObj);
    };

    return (
        <Paper sx={{ paddin: "1em" }}>
            <div style={{display: "flex", justifyContent: "center"}}>
            <TextField id="outlined-basic" label="Tarefa" variant="outlined" onChange={(e) => setText(e.target.value) } fullWidth/>
            <Button variant="text"  onClick={() => todoCreate(text)}>add</Button>
            </div>
        </Paper>
    )
}
