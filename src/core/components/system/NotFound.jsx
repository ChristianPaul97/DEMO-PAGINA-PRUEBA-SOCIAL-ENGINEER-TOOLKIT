import { Box, Heading, Text } from "@chakra-ui/react";

export default function NotFound() {
  return (
    <Box textAlign="center" py={60} className="bg-white dark:bg-navy-900">
      <Heading
        fontSize="4xl"
        className="text-gray-800 dark:text-white"
      >
        404 - Página no encontrada
      </Heading>
      <Text
        mt={4}
        className="text-gray-600 dark:text-gray-300"
      >
        La ruta que intentaste acceder no existe.
      </Text>
    </Box>
  );
}
