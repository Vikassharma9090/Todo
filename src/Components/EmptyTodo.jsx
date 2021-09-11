import { Text } from '@chakra-ui/layout'
import React from 'react'

const EmptyTodo = () => {
    return (
        <>
           <Text
              p={5}
              bg='blue.400'
              color='white'
              borderRadius={10}
              >
                Write Something...
            </Text> 
        </>
    )
}

export default EmptyTodo
