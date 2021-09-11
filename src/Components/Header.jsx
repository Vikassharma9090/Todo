import React from 'react'
import {Box,Heading,IconButton,useColorMode} from '@chakra-ui/react'
import {FaMoon,FaSun} from 'react-icons/fa';

const Header = () => {
    const { colorMode, toggleColorMode } = useColorMode()
    return (
        <Box display='flex' p={8}>
            <Heading
            bgGradient="linear(to-l, #7928CA,#FF0080)"
            bgClip='text'
            >Todo App
            </Heading>
            <IconButton position='absolute'
            right='40'
          icon={colorMode === 'light' ? <FaSun/>:<FaMoon/>}
          isRound={true}
          mr={9}
          onClick={toggleColorMode}
        />
        </Box>
    )
}

export default Header
