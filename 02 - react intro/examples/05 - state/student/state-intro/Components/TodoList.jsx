// state lets us store persistent data across component re-renders,
// and automate re-rendering whenever that data changes.

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

import { useState } from "react";


export default function TodoList() {

    // first term:  the variable that will hold the value
    // second term: the setter function; the only thing allowed to change that value
    // initial param for useState: initial value

    const [todoItem, setTodoItem] = useState("")
    const [allTodos, setAllTodos] = useState([])

    const onTodoTextChange = (event) => {
        setTodoItem(event.tartget.value)
    }

    const onAddTodoClick = () => {
        console.log("clicked!")
        // we can't just e.g. push a new element to the array, because the setter is the only thing that can change the stateful variable, so i need to construct a new array
        // Here, that just means... everything I had before plus the new items
        const newTodos = [...allTodos, todoItem]
        // We'll use the speread opperator (...) for that. Basically, it means taking all the elements if the array without actually *being* in that container
        setAllTodos(newTodos)
    }

    return (
        <Grid container spacing={2}>

            <Grid size={10}>
                <TextField id="standard-basic"
                label="New todo item"
                variant="standard"
                sx={{ width:'100%'}}
                value={todoItem}
                onChange={onTodoTextChange}
                />
            </Grid>

            <Grid size={2}>
                <Button 
                variant="contained"
                onClick={onAddTodoClick}
                >
                    Add Todo Item
                </Button>
            </Grid>

        </Grid>
    )
}