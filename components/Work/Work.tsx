import { Box, Flex, Heading, Stack, Text, HStack } from '@chakra-ui/react'
import React from 'react'
// import nicelogo from '../../assets/company logos/nice-logo.png'
// import myassetbuddylogo from '../../assets/company logos/myassetbuddy-logo.png'
import emeronlogo from '../../assets/company logos/emeron.png'
import mnilogo from '../../assets/company logos/mni.jpeg'
// import medbuyerlogo from '../../assets/company logos/medbuyer-logo.png'
import linkedInIcon from '../../assets/company logos/linkedin.png'
import Link from 'next/link'
import Image from 'next/image'
import { AiOutlineArrowRight } from 'react-icons/ai'
import { JobInfoBox } from '../JobInfoBox/JobInfoBox'

export const Work = () => {

    const headingColor = 'linear(to-r, blue.200, pink.200)'

    return (
        <Flex w='full'
            pl={{ base: 10, md: 56 }}
            pt={{ base: 28, md: 44 }}
            pr={{ base: 10, md: 52 }}
            pb={{ base: 12, md: 24 }}>

            <Stack spacing={{ base: 0, md: 9 }}>
                <Stack spacing={4}>
                    <Heading fontSize={{ base: '4xl', md: '6xl' }}
                        bgGradient={headingColor}
                        bgClip='text'>My professional journey so far</Heading>
                    <HStack>
                        <AiOutlineArrowRight />
                        <Text>Visit my </Text>
                        <Box pt={1}>
                            <Image src={linkedInIcon} alt='linkedin icon' height='24px' width='24px' />
                        </Box>
                        <Link href='https://www.linkedin.com/in/sharook-at-620872211?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app' passHref>
                            <a target='_blank' ><Text fontSize={{ base: 'md', md: 'lg' }} fontWeight='semibold' _hover={{ color: 'blue.400', cursor: 'pointer' }}>LinkedIn</Text></a>
                        </Link>
                        <Text> for more info</Text>
                    </HStack>
                </Stack>

                <Stack spacing={{ base: 16, md: 28 }}>

                    <JobInfoBox
                        logo={emeronlogo}
                        logoWidth='150px'
                        logoHeight='55px'
                        mt='1'
                        dates='Jun 2024 - Apr 2025'
                        position='Full-Stack Developer'
                        companyName='Emeron Infospace'
                        companylink='https://emeron.io/'
                        location='On-site Dubai, UAE'
                        jobdetails='Utilize Laravel Eloquent ORM, Blade templating engine, and Artisan CLI to 
streamline application development and enhance productivity. Design, develop, and optimize RESTful APIs while integrating third-party services for 
seamless functionality and performance improvements. Manage and optimize relational databases (MySQL/PostgreSQL) by designing 
schemas, creating migrations, and ensuring efficient queries for high-performance 
data handling. Develop reusable, modular components in React and Vue.js to create dynamic and 
high-performance applications, ensuring scalability and maintainability.'
                        jobdetails2='I was also responsible for mentoring our software development intern, which helped me grow as a developer and gain some management skills.'
                    />

                    <JobInfoBox
                        logo={mnilogo}
                        logoWidth='150px'
                        logoHeight='80px'
                        mt='2'
                        dates='Apr 2022 - Feb 2024'
                        position='Full-Stack Developer'
                        companyName='MNI Pvt.Ltd'
                        companylink='https://www.linkedin.com/company/mni-pvt-ltd/posts/?feedView=all'
                        location='On-site Bangalore, India'
                        jobdetails='Engineered new features and enhancements for web applications using React and 
TypeScript, seamlessly connecting frontend and backend services through RESTful 
APIs. Improved application performance by optimizing API calls, resulting in a 15% 
reduction in page load times. Managed and mentored a team of 8 junior software engineers, guiding them through 
the development lifecycle and contributing to the overall project roadmap. Deployed and maintained features on the Azure Cloud platform, ensuring smooth 
testing, deployment, and ongoing maintenance of production systems. Actively participated in Agile Scrum ceremonies, including sprint planning, daily 
stand-ups, and task prioritization, ensuring on-time delivery and team collaboration.'
                        jobdetails2='A key achievement was enhancing the UX by adding empty states, help buttons, and Google Sign-In for easier user access.'
                    />

                </Stack>
            </Stack>
        </Flex>
    )
}