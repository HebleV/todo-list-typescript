import React, { ChangeEvent } from 'react'
import { Input, Button } from "@chakra-ui/core";

interface NewTaskProps {
    addNote(notes: string): void;
}
const NewTask: React.FC<NewTaskProps> = ({ addNote }) => {
    const [note, setNote] = React.useState('');

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setNote(e.target.value);
    }

    const handleClick = () => {
        addNote(note);
        setNote("");
    }
    return (
        <>
            <Input value={note} onChange={handleChange} name="note" placeholder="Enter Task" size="lg" />
            <Button onClick={handleClick}>Add Task</Button>
        </>
    )
}

export default NewTask
