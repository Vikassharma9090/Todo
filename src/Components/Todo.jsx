import { HStack, Text,IconButton} from '@chakra-ui/react'
import React from 'react'
import {FaTrash} from 'react-icons/fa';

const Todo = ({todo,deleteTodo}) => {
    return (
        <HStack p={2}>
            <Text width="100%"
            ml='4'
            
            >{todo.text}</Text>
            <IconButton
                
                icon={<FaTrash/>}
                isRound={true}
                onClick={()=>deleteTodo(todo.id)}
            />
        </HStack>
    )
}

export default Todo

