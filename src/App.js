import {useState,useEffect} from 'react';
import './App.css';
import Header from './Components/Header'
import {VStack,Box} from '@chakra-ui/react';
import AddTodo from './Components/AddTodo';
import Todos from './Components/Todos';

// const intanialtodos=[
//         {
//             id:12,
//             text:'Write Someting '
//         },
//         {
//             id:13,
//             text:'as daily Routine'
//         }
//     ]

function App() {
  const[todos,SetTodos]=useState(()=> JSON.parse(localStorage.getItem('todos')) || []);

    useEffect(()=>{
      localStorage.setItem('todos',JSON.stringify(todos))
    },[todos])

   const deleteTodo =(id)=>{
     const updatedTodo= todos.filter(todo=>todo.id !==id);
      //  console.log(updatedTodo);
       SetTodos(updatedTodo)
       
   }
  return (
    <VStack >
     <Header/>
     <Box 
     w='100%'
     maxW={{base:'80vw',sm:'80vw',lg:'50vw',xl:'40vw'}}
     >
     <AddTodo todos={todos} setTodos={SetTodos}/>
     <Todos todos={todos} deleteTodo={deleteTodo} />
     </Box>
    </VStack>
  );
}

export default App;


