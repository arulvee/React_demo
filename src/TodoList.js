import React, {useState} from 'react';


 export default function TodoList() {

    const [todos, setTodos] = useState([]);
    const [todoText, setTodoText] = useState("");
    const todoTextChange = (event) => {
        setTodoText(event.target.value)
    }

    const mySubmit = (e) => {
        e.preventDefault();
        setTodos([...todos,{id:todos.length + 1,name:todoText}]);
        setTodoText("");
        document.getElementById("textTodo").focus();    
      }
        const todoListCheck = (e) => {
        const list = [...todos];
        const newList = list.filter(item => item.id !== parseInt(e.target.id))
        if(newList.length < list.length) {
            document.getElementById('message').style.display='block';
            
        }
        setTimeout(function () {
            document.getElementById('message').style.display='none';
        }, 3000);
        setTodos(newList);
        
    }
    
    return (
        <div>
            <h1>Todo List</h1>
            <ul style={{listStyle:"none",width:"200px"}}>
            {todos.map(todo => 
                <li key={todo.id} ><input name="todoName"  type="radio"  id={todo.id}                              
                todo={todo}
                onChange={todoListCheck}
                />{todo.name}</li>
            )}
      </ul>
      <div>
      <form onSubmit={mySubmit}>      
      <input name="text" id="textTodo" type="text" value={todoText} placeholder="Enter Todo"  onChange={todoTextChange}/>
      <button type="submit" >Add Todo</button>
      
    </form>
    
            <div style={{display:"none"}} id="message"><b>Todo Completed</b></div>  
      </div>

        </div>
        
    )
}



