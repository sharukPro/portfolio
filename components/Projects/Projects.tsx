import { Box, Flex, Heading, HStack, Icon, SimpleGrid, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import project1 from '../../assets/projects/orderbyme.png'
import project2 from '../../assets/projects/stijlpartner.png'
import project3 from '../../assets/projects/abitos.png'
import project4 from '../../assets/projects/myPortfolio.png'
// import project5 from '../../assets/projects/portfolio-preview.png'
// import project6 from '../../assets/projects/crux-blog-preview.png'
// import project7 from '../../assets/projects/mem-game-preview.png'
// import githubIcon from '../../assets/projects/github.png'
// import Image from 'next/image'
// import Link from 'next/link'
// import { AiFillHtml5, AiOutlineArrowRight } from 'react-icons/ai'
import { TbBrandNextjs, TbBrandVercel, TbLetterF } from 'react-icons/tb'
import { FaVuejs, FaCloud } from "react-icons/fa";
import { SiChakraui, SiLaravel, SiCss3, SiJavascript, SiMaterialui, SiPython, SiDotnet, SiSupabase, SiTypescript } from 'react-icons/si'
import { FaBootstrap, FaReact } from 'react-icons/fa'
import { FiFigma } from 'react-icons/fi'
import { ProjectBox } from '../ProjectBox/ProjectBox'

export const Projects = () => {

    const headingColor = 'linear(to-r, blue.200, pink.200)'

    return (
        <Flex width='full'
            pl={{ base: 2, md: 40 }}
            pt={{ base: 28, md: 44 }}
            pr={{ base: 2, md: 24 }}
            pb={{ base: 12, md: 32 }}>

            <Stack px={{ base: 8, md: 20 }} spacing={{ base: 4, md: 0 }}>
                <Heading
                    fontSize={{ base: '4xl', md: '6xl' }}
                    bgGradient={headingColor}
                    bgClip='text'>Here&apos;s a few of my projects</Heading>
                {/* <HStack>
                    <HStack>
                        <AiOutlineArrowRight />
                        <Text fontSize={{ base: 'md', md: 'lg' }}>Get the complete list at my</Text>
                    </HStack>
                    <Box pt={1}>
                        <Image src={githubIcon} alt='github icon' height='24px' width='24px' />
                    </Box>
                    <Link href='https://github.com/janhvipatil' passHref>
                        <a target='_blank' ><Text fontSize={{ base: 'md', md: 'lg' }} fontWeight='semibold' _hover={{ color: 'blue.400', cursor: 'pointer' }}>Github</Text></a>
                    </Link>
                </HStack> */}

                <SimpleGrid
                    columns={1}
                    spacing={{ base: 12, md: 14 }}
                    py={{ base: 4, md: 8 }}
                    rounded='xl'>

                    <ProjectBox
                        image={project1}
                        heading='OrderByMe (POS + Online ordering)'
                        data='A POS web app that combines in-store table ordering and online delivery in one system.
                        Manage dine-in orders, split bills, and track tables for staff. Order online for delivery or scan a QR code to order at their table
                        for customers. Real-time sales tracking, inventory control, and payment processing for buisness.'
                        link='https://www.orderbyme.com/'
                        projectLink='https://www.orderbyme.com/'>
                        <HStack>
                            <Icon as={FaVuejs} fontSize='1.2em' color='blue.300' />
                            <Text>Vue JS</Text>
                        </HStack>
                        <HStack>
                            <Icon as={SiLaravel} color='blue.300' />
                            <Text>Laravel</Text>
                        </HStack>
                        <HStack>
                            <Icon as={SiTypescript} color='blue.300' />
                            <Text>TypeScript</Text>
                        </HStack>
                        <HStack>
                            <Icon as={FaCloud} color='blue.300' />
                            <Text>Cloud Panel</Text>
                        </HStack>
                    </ProjectBox>

                    <ProjectBox
                        image={project2}
                        heading='StijlPartner'
                        data='A web app that helps customers easily select and visualize interior designs for floors and window curtains.
                        Customers can browse styles and customize colors/materials.
                        Transform spaces with the perfect style—effortlessly!'
                        link='https://www.stijlpartner.nl/'
                        projectLink='https://www.stijlpartner.nl/'>
                        <HStack>
                            <Icon as={SiDotnet} color='blue.300' />
                            <Text>Dot Net</Text>
                        </HStack>
                        <HStack>
                            <Icon as={SiJavascript} color='blue.300' />
                            <Text>JavaScript</Text>
                        </HStack>
                        <HStack>
                            <Icon as={FaReact} color='blue.300' />
                            <Text>React</Text>
                        </HStack>
                        <HStack>
                            <Icon as={SiMaterialui} color='blue.300' />
                            <Text>Material UI</Text>
                        </HStack>
                    </ProjectBox>

                    <ProjectBox
                        image={project3}
                        heading='Abitos Sportswear'
                        data='A POS + E-commerce web app designed for sportswear shops, combining seamless in-store and online sales.
                        Browse & order sportswear online for delivery or in-store pickup for customers.
                        Process payments, manage inventory, and track sales in real-time for staff.
                        Boost sales & streamline shopping—anywhere, anytime!'
                        link='https://abitossportswear.ae/'
                        projectLink='https://abitossportswear.ae/'>
                        <HStack>
                            <Icon as={FaVuejs} fontSize='1.2em' color='blue.300' />
                            <Text>Vue JS</Text>
                        </HStack>
                        <HStack>
                            <Icon as={SiTypescript} color='blue.300' />
                            <Text>TypeScript</Text>
                        </HStack>
                        <HStack>
                            <Icon as={SiLaravel} color='blue.300' />
                            <Text>Laravel</Text>
                        </HStack>
                        <HStack>
                            <Icon as={FaCloud} color='blue.300' />
                            <Text>AAPanel</Text>
                        </HStack>
                    </ProjectBox>

                    {/* <ProjectBox
                        image={project5}
                        heading='Portfolio Website'
                        data='This is a just for fun passion project that I have created
                            for collating my recent projects and helping my future employers/
                            prospective clients know more about me.'
                        link='/projects/portfolio-website'
                        projectLink='https://www.janhvipatil.me/'
                        githubLink='https://github.com/janhvipatil/Portfolio'>
                        <HStack>
                            <Icon as={TbBrandNextjs} fontSize='1.2em' color='blue.300' />
                            <Text>NextJS</Text>
                        </HStack>
                        <HStack>
                            <Icon as={SiChakraui} color='blue.300' />
                            <Text>Chakra UI</Text>
                        </HStack>
                        <HStack>
                            <Icon as={SiTypescript} color='blue.300' />
                            <Text>TypeScript</Text>
                        </HStack>
                        <HStack>
                            <Icon as={TbBrandVercel} color='blue.300' />
                            <Text>Vercel</Text>
                        </HStack>
                    </ProjectBox> */}

                    <ProjectBox
                        image={project4}
                        heading='Portfolio Website'
                        data='This is a just for fun passion project that I have created
                            for collating my recent projects and helping my future employers/
                            prospective clients know more about me.'
                        link='https://www.janhvipatil.me/'
                        projectLink='https://www.janhvipatil.me/'>
                        <HStack>
                            <Icon as={TbBrandNextjs} fontSize='1.2em' color='blue.300' />
                            <Text>NextJS</Text>
                        </HStack>
                        <HStack>
                            <Icon as={SiChakraui} color='blue.300' />
                            <Text>Chakra UI</Text>
                        </HStack>
                        <HStack>
                            <Icon as={SiTypescript} color='blue.300' />
                            <Text>TypeScript</Text>
                        </HStack>
                        <HStack>
                            <Icon as={TbBrandVercel} color='blue.300' />
                            <Text>Vercel</Text>
                        </HStack>
                    </ProjectBox>

                    {/* <ProjectBox
                        image={project6}
                        heading='Blog Starter Template'
                        data='I have used Sanity IO headless CMS, NextJS and Chakra UI to 
                            create a blog template that can be used to easily jumpstart any project that needs
                            a website with a blog.'
                        link='/projects/blog-using-nextjs-sanityio'
                        githubLink='https://github.com/janhvipatil/Crux-Blog-Frontend'>
                        <HStack>
                            <Icon as={TbBrandNextjs} fontSize='1.2em' color='blue.300' />
                            <Text>NextJS</Text>
                        </HStack>
                        <HStack>
                            <Icon as={SiChakraui} color='blue.300' />
                            <Text>Chakra UI</Text>
                        </HStack>
                        <HStack>
                            <Icon as={SiTypescript} color='blue.300' />
                            <Text>TypeScript</Text>
                        </HStack>
                        <HStack>
                            <Icon as={TbBrandVercel} color='blue.300' />
                            <Text>Vercel</Text>
                        </HStack>
                    </ProjectBox> */}

                    {/* <ProjectBox
                        image={project7}
                        heading='Memory Game using JS'
                        data='The game has a grid of cards,
                            that can be flipped over and matched. 
                            If a match is found, the cards stay flipped,
                            if not, they will turn back. 
                            The game continues until all cards are matched.'
                        link='/projects/memory-game'
                        githubLink='https://github.com/janhvipatil/Memory-Game'>
                        <HStack>
                            <Icon as={SiJavascript} color='blue.300' />
                            <Text>JavaScript</Text>
                        </HStack>
                        <HStack>
                            <Icon as={AiFillHtml5} fontSize='1.2em' color='blue.300' />
                            <Text>HTML</Text>
                        </HStack>
                        <HStack>
                            <Icon as={SiCss3} color='blue.300' />
                            <Text>CSS</Text>
                        </HStack>
                        <HStack>
                            <Icon as={TbBrandVercel} color='blue.300' />
                            <Text>Vercel</Text>
                        </HStack>
                    </ProjectBox> */}

                </SimpleGrid>
            </Stack>
        </Flex>
    )
}