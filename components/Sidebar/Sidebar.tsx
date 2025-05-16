import { Box, ButtonGroup, IconButton, Link, Stack, useColorModeValue } from '@chakra-ui/react'
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiOutlineTwitter } from "react-icons/ai";
import { SiGoodreads } from 'react-icons/si';

export const Sidebar = () => {

    const lineColor = useColorModeValue('gray.200', 'gray.500')

    return (
        <Stack
            display={{ base: 'none', md: 'flex' }}
            pos='fixed'
            h='100vh'
            justify='center'
            align='center'
            spacing='8'
            left='10'>
            <ButtonGroup
                size='md'
                fontSize='lg'
                left='0'
                pos='absolute'
                variant='ghost'>
                <Stack spacing={6}>
                    <IconButton aria-label='Github' icon={<AiFillGithub fontSize="1.5rem" />} rounded='xl' as={Link} isExternal href='https://github.com/sharukPro' />
                    <IconButton aria-label='Linkedin' icon={<AiFillLinkedin fontSize="1.5rem" />} rounded='xl' as={Link} isExternal href='https://www.linkedin.com/in/sharook-at-620872211?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app' />
                    <IconButton aria-label='Instagram' icon={<AiFillInstagram fontSize="1.5rem" />} rounded='xl' as={Link} isExternal href='https://www.instagram.com/sharu__ykza/' />
                </Stack>
            </ButtonGroup>
            <Box
                height='100px'
                pos='relative'
                top='25%'
                left='5'
                bg={lineColor}
                w='1px'>
            </Box>
        </Stack>
    )
}