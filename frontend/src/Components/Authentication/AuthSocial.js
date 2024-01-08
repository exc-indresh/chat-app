import { AbsoluteCenter, Flex, Heading, Divider, IconButton } from '@chakra-ui/react'
import React from 'react'
import { AiFillGoogleCircle } from "react-icons/ai";
import { Stack } from '@chakra-ui/react';

const handleGoogleLogin = async () => {

};


function AuthSocial() {
    return (
        <div>
            <Flex alignItems="center" gap={2}>
                <Divider border="4px" borderRadius="2xl" />
                <Heading as="h6" size="xs" sx={{ whiteSpace: "nowrap" }}>
                    OR
                </Heading>
                <Divider border="4px" borderRadius="2xl" />
            </Flex>
            <Stack direction="row" justifyContent="center" spacing={2}>
                <IconButton onClick={handleGoogleLogin} fontSize={25} backdropContrast={0} backgroundColor={'inherit'}>
                    <AiFillGoogleCircle color='#DF3E30' />
                </IconButton>
            </Stack>
        </div>
    )
}

export default AuthSocial
