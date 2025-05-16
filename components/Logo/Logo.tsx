import { Box, useColorModeValue } from '@chakra-ui/react'
import Image from 'next/image'
// import lightLogo from '../../assets/logo-light.svg'
import darkLogo from '../../assets/log.png'

interface Props {
    height: number,
    width: number,
}

export const Logo = ({ height, width, ...props }: Props) => {

    // const logo = useColorModeValue(lightLogo, darkLogo)

    return (
        <Box {...props}>
            <Image src={darkLogo}
                objectFit="contain"
                alt="logo"
                height={height}
                width={width}
            />
        </Box>
    )
}