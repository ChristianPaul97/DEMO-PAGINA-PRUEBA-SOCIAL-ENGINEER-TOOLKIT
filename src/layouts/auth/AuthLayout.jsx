import { Outlet } from "react-router-dom";
import { Box, Container, HStack, Image, Text } from "@chakra-ui/react";
import fondo from "../../assets/fondo.jpg"; // ← tu imagen local

export default function AuthLayout() {
  return (
    <Box position="relative" minH="100dvh" overflow="hidden" bg="black">
      {/* Imagen de fondo */}
      <Box
        position="absolute"
        inset="0"
        bgImage={`url(${fondo})`}
        bgSize="cover"
        bgPosition="center"
        filter="brightness(0.7) saturate(1.2)"
        transform="scale(1.02)"
      />

      {/* Degradados para contraste y look moderno */}
      <Box
        position="absolute"
        inset="0"
        bgGradient="
          linear(to-b, rgba(0,0,0,0.35), rgba(0,0,0,0.65)),
          radial(1200px 800px at 15% 10%, rgba(56,189,248,.22), transparent 60%),
          radial(900px 700px at 85% 90%, rgba(167,139,250,.20), transparent 60%)
        "
      />

      {/* Header: logo / marca */}
      <Container position="relative" zIndex={1} maxW="6xl" pt={{ base: 8, md: 12 }}>
        <HStack spacing={3} mb={{ base: 8, md: 12 }}>
          <Box
            w="44px"
            h="44px"
            rounded="xl"
            bg="whiteAlpha.200"
            border="1px solid"
            borderColor="whiteAlpha.400"
            display="grid"
            placeItems="center"
            boxShadow="0 8px 30px rgba(0,0,0,.35)"
          >
            {/* Reemplaza por tu logo si quieres */}
            <Image
              alt="LisoftTech"
              src="https://api.iconify.design/ph/sparkle-fill.svg?color=%23ffffff"
              w="22px"
              h="22px"
              opacity={0.95}
            />
          </Box>
          <Text fontWeight="extrabold" fontSize={{ base: "2xl", md: "3xl" }} color="white">
          LisoftTech
          </Text>
          <Text fontSize="sm" color="whiteAlpha.700">
            • Plataforma
          </Text>
        </HStack>
      </Container>

      {/* Contenido centrado */}
      <Container position="relative" zIndex={1} maxW="6xl" pb={{ base: 10, md: 20 }}>
        <Box display="grid" placeItems="center" minH="calc(100dvh - 200px)">
          <Box w="full" maxW="lg">
            <Outlet />
          </Box>
        </Box>
      </Container>

      {/* Footer sutil */}
      <Box
        position="absolute"
        insetX="0"
        bottom="10px"
        textAlign="center"
        color="whiteAlpha.700"
        fontSize="xs"
        px="4"
        zIndex={1}
      >
      </Box>
    </Box>
  );
}
