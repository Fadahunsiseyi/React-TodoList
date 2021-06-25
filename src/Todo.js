import {  Button, List, ListItem, ListItemAvatar, ListItemText,makeStyles,Modal } from '@material-ui/core';
import React, { useState } from 'react';
import './Todo.css'
import db from './firebase'
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';


const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));
function Todo(props) {
  const classes = useStyles()
  const [open, setOpen] = useState(false)
  const [input, setInput] = useState()

  const handleOpen = () => {
    setOpen(true);
  }
  const updateTodo = () => {
    db.collection('todos').doc(props.todo.id).set({
      todo: input
    }, {merge: true})
    setOpen(false)
  }
 
  return (
    // <div>
    //    <li>{props.todo}</li>
    // </div>
    <>
       <Modal
     open={open}
     onClose={e => setOpen(false)}
     aria-labelledby="simple-modal-title"
     aria-describedby="simple-modal-description">
     <div className={classes.paper}>
       <h1>I am a modal</h1>
       <input placeholder={props.todo.todo} value={input} onChange={e => setInput(e.target.value)}/>
       <Button onClick={updateTodo} variant="contained" color="primary">Update Todo</Button>
     </div>
      </Modal>
    <List>
        <ListItem>
        <ListItemAvatar>
        </ListItemAvatar>
            <ListItemText primary={props.todo.todo} secondary="Dummy text..."/>
        </ListItem>
        <button onClick={e => setOpen(true)}>Edit me</button>

        <DeleteForeverIcon onClick={e => db.collection('todos').doc(props.todo.id).delete()}>DELETE ME</DeleteForeverIcon>
    </List>
    </>
  );
}

export default Todo;
