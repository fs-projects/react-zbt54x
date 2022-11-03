import React from 'react';

import { Box, Heading, Text, Image, Button } from "@chakra-ui/react";
function CtaSection() {
  return (
    <Box
      as="section"
      marginBottom="90px"
      display="flex"
      alignItems="center"
      justifyContent="space-between"
    >
      <Box width="40%">
        <Box marginBottom="45px">
          <Heading as="h2" size="2xl" marginBottom="25px">Virtual Healthcare for you</Heading>
          <Text fontWeight="light" fontSize="md">
            Trafalgar provides progressive, and affordable healthcare,
            accessible on mobile and online for everyone
          </Text>
        </Box>
        <Button colorScheme="teal" size="lg" borderRadius="55px">
          Consult Today
        </Button>
      </Box>
      <Box width="55%">
        <Image
          src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8b2ZmaWNlJTIwbWVldGluZ3N8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
          borderRadius="10px"
          width="100%"
        />
      </Box>
    </Box>
  );
}
export default CtaSection;
