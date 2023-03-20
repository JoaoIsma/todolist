import { Container, List } from "@mui/material";
import Form from "../components/Form";
import TodoItem from "../components/TodoItem";
import react from "react";
import { useState } from "react";
import { margin } from "@mui/system";



export default function Home() {
    const [todos, setTodos] = useState([]);
    
    const addTodo = (todo) => {
        setTodos([...todos, todo]);
    };

    const deleteTodo = (id) => {
        var filtered = todos.filter ((todo) => todo.id !== id);
        setTodos(filtered)
    }

    return (
    <Container maxWidth="xs" style={{marginTop: "1em" }}>
      <Form addTodo={addTodo} />
      <List sx={{ marginTop: "1em"}}>
        {todos.map( (todo, key) =>  (
        <div key={todo.id} sx={{ marginTop: "1em" }}>
            <TodoItem  todo={todo} deleteTodo={deleteTodo}/>
        </div>
        ))}
      </List>
    </Container>
    )
}
