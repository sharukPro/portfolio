import { Box, Center, Flex, Heading, HStack, SimpleGrid, Stack, Text, useColorModeValue, VStack } from '@chakra-ui/react'
import React from 'react'
import { MdOutlineAlternateEmail } from 'react-icons/md'
import { HiOutlineLocationMarker, HiOutlineMail } from 'react-icons/hi'
import Image from 'next/image'
import workspaceLight from '../../assets/about/sharuWorkspace.png'
import workspaceDark from '../../assets/about/workspace-dark.jpg'
import avatar from '../../assets/about/avatar.jpeg'
import arrowDark from '../../assets/curved-arrow-dark.png'
import arrowLight from '../../assets/curved-arrow-light.png'
import styles from '../../styles/CustomStyles.module.css'
import { CustomHeading } from '../CustomHeading/CustomHeading'

export const About = () => {

    const workspace = useColorModeValue(workspaceLight, workspaceDark)
    const arrow = useColorModeValue(arrowLight, arrowDark)
    const textColor = useColorModeValue('gray.500', 'gray.400')

    return (
        <>
            <Flex
                pl={{ base: 10, md: 56 }}
                pt={{ base: 36, md: 44 }}
                pr={{ base: 10, md: 52 }}
                pb={{ base: 12, md: 24 }}>
                <HStack spacing={4} align='flex-start' flexDirection={{ base: 'column', md: 'row' }}>
                    <Stack spacing={{ base: 2, md: 6 }}>
                        <Box display={{ base: 'none', md: 'block' }}>
                            <CustomHeading headingText='Software Developer' boxColor='yellow.100' chars={8.5} />
                            <CustomHeading headingText='ERP Consultant' boxColor='pink.100' chars={7.5} />
                        </Box>
                        <Flex
                            textAlign={'center'}
                            direction="column"
                            align="center"
                            justify="center"
                            display={{ base: 'block', md: 'none' }}
                            w="100%">
                            <CustomHeading headingText='Software Developer' boxColor='yellow.100' chars={8.5} />
                            <CustomHeading headingText='ERP Consultant' boxColor='pink.100' chars={7.5} />
                        </Flex>
                        <Stack spacing={4} py={6} display={{ base: 'flex', md: 'none' }}>
                            <Center>
                                <Image src={avatar} alt='my picture' height='180px' width='180px' style={{ borderRadius: '50%' }} />
                            </Center>
                            <Center px={4} textAlign='center'>
                                <Text className={styles.customFont}>
                                    My goal is to help build great products that have a lasting impact.
                                </Text>
                            </Center>
                        </Stack>
                        <Stack spacing={{ base: 16, md: 6 }} direction={{ base: 'column-reverse', md: 'column' }}>
                            <Stack spacing={{ base: 4, md: 4 }} width={{ base: '100%', md: '70%' }}>
                                <Stack spacing={2} pt={{ base: 10, md: 0 }}>
                                    <Text as='p'>
                                        Hi, I am <strong>Sharook</strong>, a full-stack software developer who wants to build products that make a difference.
                                        My top skills lie within front-end web app development and my go-to tech stack includes
                                        TypeScript, React, Frappe, Python, SQL, HTML & CSS. Back-end techs under my belt includes PHP, Laravel and Dot Net.
                                        I&apos;m a lifelong learner and love to read,
                                        travel and explore new places and cultures.
                                    </Text>
                                </Stack>
                                <Heading as='h3'
                                    fontWeight={{ base: 'bold', md: 'semibold' }}
                                    fontSize={{ base: '2xl', md: 'lg' }}>
                                    My calling - Turning ideas into <strong>products</strong></Heading>
                                <Stack spacing={0}>
                                    <Text as='p'>
                                        I graduated with a Bachelor of Engineering in Computer Science and Technology
                                        from KMCT College of Engineering, Calicut, India - with distinction, class rank - 3rd.
                                    </Text>
                                </Stack>
                            </Stack>
                            <Flex width={{ md: '60%' }} display={{ base: 'none', md: 'flex' }}>
                                <SimpleGrid columns={{ md: 2 }} spacing={2}>
                                    <HStack spacing={2}><MdOutlineAlternateEmail fontSize='1.1em' /><Text color={textColor} fontSize={{ base: 'sm' }}>Sharook Andathodan</Text></HStack>
                                    <HStack spacing={2}><HiOutlineLocationMarker fontSize='1.1em' /><Text color={textColor} fontSize={{ base: 'sm' }}>Kerala, India</Text></HStack>
                                    <HStack spacing={2}><HiOutlineMail size={'1.1em'} /><Text color={textColor} fontSize={{ base: 'sm' }}>sharookat@gmail.com</Text></HStack>
                                </SimpleGrid>
                            </Flex>
                            <VStack display={{ base: 'flex', md: 'none' }}>
                                <HStack spacing={4}>
                                    <HStack spacing={2}><MdOutlineAlternateEmail fontSize='1.1em' /><Text color={textColor} fontSize={{ base: 'sm' }}>Janhvi Patil</Text></HStack>
                                    <HStack spacing={2}><HiOutlineLocationMarker fontSize='1.1em' /><Text color={textColor} fontSize={{ base: 'sm' }}>Pune, India</Text></HStack>
                                </HStack>
                                <HStack spacing={2}><HiOutlineMail size={'1.1em'} /><Text color={textColor} fontSize={{ base: 'sm' }}>janhvi716@gmail.com</Text></HStack>
                            </VStack>
                        </Stack>
                    </Stack>
                    <Stack spacing={10} display={{ base: 'none', md: 'flex' }}>
                        <Box pt='50px'>
                            <Image src={avatar} alt='my picture' height='150px' width='150px' style={{ borderRadius: '50%' }} />
                        </Box>
                        <Box className={styles.tiltBox} width='250px'>
                            <Text className={styles.customFont}>
                                I&apos;m fascinated by the intersection between tech, business and life.
                                My goal is to help build great products that have a lasting impact.
                            </Text>
                        </Box>
                        <Box className={styles.tiltArrow}>
                            <Image src={arrow} alt='arrow pointing to content' height='100px' width='120px' />
                        </Box>
                    </Stack>
                </HStack>
            </Flex>
            <Stack spacing={{ base: 8, md: 16 }}
                pt={{ base: 6, md: 12 }}
                pl={{ base: 10, md: 56 }}
                pr={{ base: 10, md: 52 }}
                pb={{ base: 12, md: 24 }}
                direction={{ base: 'column', md: 'row' }}>
                <Box style={{ borderRadius: '10px', overflow: 'hidden' }} w={{ base: '100%', md: '70%' }}>
                    <Image src={workspaceLight}
                        alt='my workspace'
                        objectFit='cover' />
                </Box>
                <Box width={{ base: '100%', md: '60%' }}>
                    <Stack spacing={{ base: 2, md: 4 }}>
                        <Heading bgGradient='linear(to-r, pink.200, blue.200)'
                            bgClip='text'>This is where the magic happens</Heading>
                        <Text as='p'>
                            As an enthusiastic and diligent software engineer, I thrive in dynamic environments
                            that challenge my adaptability and foster continuous learning. My experience across diverse
                            projects has honed my ability to collaborate effectively within teams and take initiative when
                            necessary. I am committed to delivering high-quality solutions and am always eager to
                            acquire new skills to drive both personal and organizational growth.
                        </Text>
                        <Text as='p'>
                            What I did not know then was that my skills as a developer combined with my
                            love for communicating would be the perfect recipe for my career in tech.
                        </Text>
                        <Text as='p'>

                        </Text>
                    </Stack>
                </Box>
            </Stack>
        </>
    )
}