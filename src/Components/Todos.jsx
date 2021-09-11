import { StackDivider, VStack } from '@chakra-ui/react'
import React from 'react'
import EmptyTodo from './EmptyTodo'


//componets 
import Todo from './Todo' 

const Todos = ({todos,deleteTodo}) => {

  

    return (
        <VStack
           borderWidth={todos.length>0?'1px':'none'}
           alignItems='stretch'
           mt={8}
           divider={<StackDivider/>}>
           {
            todos.length > 0 ? todos.map(todo=>(
                <Todo todo={todo} deleteTodo={deleteTodo} />
            )):<EmptyTodo/>
           }
        </VStack>
    )
}

export default Todos;
