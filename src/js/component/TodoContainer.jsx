import React, { useState } from 'react';
import Todo from './Todo.jsx'

export default function todocontainer() {

    const [useInput, setUserInput] = useState("");
    const [todoList, setTodoList] = useState([]);
    // const [todoList, setTodoList] = useState([])
    const onChangeHandler = (event) => setUserInput(event.target.value);

    const removeTodo = (index) => {

        // const filteredTodos = [];
        
        // for (let i = 0; i < todoList.length; i++ {

        //  if (i !== index) {
        //    filteredTodo.push(todoList[i]);
        //  }

        // }

        // setTodoList(filteredTodos);
        
        setTodoList((previousTodos) => previousTodos.filter(( ,idx)) => index !== idx));
    }

    const addTodoHandler = (event) => {

        if (event.key === 'Enter') {
            setTodoList([...todoList, userInput]);
            setUserInput("");
        }
    }
}
