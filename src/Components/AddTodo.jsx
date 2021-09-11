import { HStack, Input,Button,useToast} from '@chakra-ui/react'
import  { useState } from 'react'
import {nanoid} from 'nanoid';

const AddTodo = ({todos,setTodos}) => {
    const[todo,setTodo]=useState('');
    const toast =useToast();


    const handleChange=(e)=>{
        setTodo(e.target.value);
        console.log(todo);
    }

    const addTodo=()=>{
     //off blank todo.
    //   if(!todo) return;
    // off blank todo and show toast
     
    if(!todo)
    {
        toast({
             title:'Filled the Todo Item',
             status:'error',
             duration:'3000',
             isClosable:true
        })
    }
  

    const newTodo={
            id:nanoid(),
            text:todo
        }
        setTodos([...todos,newTodo])
        setTodo('');
    }
    return (
        <HStack>
            <Input
            placeholder='add todo item'
            varient='filled'
            value={todo}
            onChange={(e)=>{handleChange(e)}}

            />
          <Button
           colorScheme='blue'
           px={8}
           onClick={()=>addTodo()}
           >Add Item
          </Button>
        </HStack>
    )
}

export default AddTodo
