import { useState, useMemo } from "react";
import {
  Box, Flex, Heading, Text, Input, Button, IconButton,
  HStack, VStack, Badge
} from "@chakra-ui/react";
import { Mail, Lock, Eye, EyeOff } from "lucide-react";

const TARGET_URL = "https://www.lisofttech.com/";

export default function Login() {
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);

  const validEmail = useMemo(() => /[^@\s]+@[^@\s]+\.[^@\s]+/.test(email), [email]);
  const strongPwd  = useMemo(() => pwd.length >= 6, [pwd]);
  const disabled   = !validEmail || !strongPwd || loading;

  const onSubmit = (e) => {
    e.preventDefault();
    if (!validEmail || !strongPwd) return;
    setLoading(true);

    // Simula breve verificación y luego redirige
    setTimeout(() => {
      window.location.assign(TARGET_URL); // misma pestaña
      // Si prefieres nueva pestaña: window.open(TARGET_URL, "_blank", "noopener,noreferrer")
    }, 600);
  };

  // estilos comunes para inputs Chakra v3
  const inputBase = {
    bg: "whiteAlpha.100",
    borderColor: "whiteAlpha.300",
    _placeholder: { color: "whiteAlpha.600" },
    size: "lg",
    rounded: "xl",
    color: "white",
  };

  const focusCyan = {
    "&:focus": {
      borderColor: "cyan.300",
      boxShadow: "0 0 0 1px var(--chakra-colors-cyan-300)"
    },
    "&:focus-visible": {
      outline: "none",
      borderColor: "cyan.300",
      boxShadow: "0 0 0 2px var(--chakra-colors-cyan-300)"
    }
  };

  const focusPurple = {
    "&:focus": {
      borderColor: "purple.300",
      boxShadow: "0 0 0 1px var(--chakra-colors-purple-300)"
    },
    "&:focus-visible": {
      outline: "none",
      borderColor: "purple.300",
      boxShadow: "0 0 0 2px var(--chakra-colors-purple-300)"
    }
  };

  return (
    <Flex position="relative" direction="column" gap={6}>
      {/* Banner de advertencia visible */}
      <Box
        role="alert"
        rounded="xl"
        px={4}
        py={3}
        bg="yellow.300"
        color="black"
        fontWeight="semibold"
        textAlign="center"
        boxShadow="0 6px 20px rgba(0,0,0,.25)"
      >
        ⚠️ SIMULACIÓN — NO INGRESE DATOS REALES
      </Box>

      {/* Encabezado */}
      <VStack spacing={1} align="start">
        <Badge variant="solid" colorScheme="purple" borderRadius="full" px={3} py={1}>
          Acceso
        </Badge>
        <Heading size="lg" lineHeight={1.1} color="white">
          Bienvenido a LisoftTech

        </Heading>
        <Text color="gray.300" fontSize="sm">
          Inicia sesión para continuar. INTRANET.
        </Text>
      </VStack>

      {/* Tarjeta con borde degradado */}
      <Box p="1.5" rounded="2xl" bgGradient="linear(to-r, cyan.400, purple.400)" boxShadow="0 10px 30px rgba(0,0,0,.35)">
        <Box
          as="form"
          onSubmit={onSubmit}
          bg="rgba(17, 17, 27, 0.72)"
          backdropFilter="blur(12px)"
          border="1px solid"
          borderColor="whiteAlpha.200"
          rounded="xl"
          p={{ base: 5, md: 6 }}
        >
          <VStack spacing={5} align="stretch">
            {/* Email */}
            <Box>
              <Text as="label" htmlFor="email" fontSize="sm" mb={2} display="block" color="white">
                Correo electrónico
              </Text>
              <Box position="relative">
                <Box position="absolute" left="12px" top="50%" transform="translateY(-50%)" color="cyan.300">
                  <Mail size={20} strokeWidth={2.2} />
                </Box>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="usuario@lisofttech.com"
                  pl="44px"
                  aria-invalid={email.length > 0 && !validEmail}
                  aria-describedby="email-help"
                  {...inputBase}
                  sx={focusCyan}
                />
              </Box>
              {email.length > 0 && !validEmail && (
                <Text id="email-help" color="red.200" fontSize="xs" mt={2}>
                  Ingresa un correo válido
                </Text>
              )}
            </Box>

            {/* Password */}
            <Box>
              <Text as="label" htmlFor="password" fontSize="sm" mb={2} display="block" color="white">
                Contraseña
              </Text>
              <Box position="relative">
                <Box position="absolute" left="12px" top="50%" transform="translateY(-50%)" color="purple.300">
                  <Lock size={20} strokeWidth={2.2} />
                </Box>
                <Input
                  id="password"
                  type={show ? "text" : "password"}
                  value={pwd}
                  onChange={(e) => setPwd(e.target.value)}
                  placeholder="••••••••"
                  pl="44px"
                  pr="56px"
                  aria-invalid={pwd.length > 0 && !strongPwd}
                  aria-describedby="pwd-help"
                  {...inputBase}
                  sx={focusPurple}
                />
                <IconButton
                  aria-label={show ? "Ocultar contraseña" : "Mostrar contraseña"}
                  icon={show ? <EyeOff size={18} /> : <Eye size={18} />}
                  size="sm"
                  variant="ghost"
                  onClick={() => setShow((s) => !s)}
                  position="absolute"
                  right="6px"
                  top="50%"
                  transform="translateY(-50%)"
                  color="whiteAlpha.900"
                  _hover={{ bg: "whiteAlpha.200" }}
                />
              </Box>
              {pwd.length > 0 && !strongPwd && (
                <Text id="pwd-help" color="red.200" fontSize="xs" mt={2}>
                  Mínimo 6 caracteres
                </Text>
              )}
            </Box>

            <HStack justify="space-between" align="center">
              <Box />
              <Button variant="link" color="cyan.300" size="sm" _hover={{ color: "cyan.200" }}>
                ¿Olvidaste tu contraseña?
              </Button>
            </HStack>

            {/* Botón principal MUY visible */}
            <Button
              type="submit"
              isDisabled={disabled}
              isLoading={loading}
              loadingText="Redirigiendo…"
              size="lg"
              rounded="full"
              fontWeight="extrabold"
              letterSpacing=".2px"
              color="white"
              bgGradient="linear(to-r, #22d3ee, #a78bfa)"
              border="1px solid"
              borderColor="whiteAlpha.400"
              boxShadow="0 10px 24px rgba(34,211,238,.35), 0 10px 24px rgba(167,139,250,.25)"
              _hover={{ filter: "brightness(1.08)", transform: "translateY(-1px)" }}
              _active={{ transform: "translateY(0px)" }}
            >
              Entrar
            </Button>

            {/* Social con logos reales */}
            <Box pt={1}>
              <HStack my={4} align="center" color="whiteAlpha.700">
                <Box flex="1" h="1px" bg="whiteAlpha.300" />
                <Text fontSize="xs" px={3}>
                  o continúa con
                </Text>
                <Box flex="1" h="1px" bg="whiteAlpha.300" />
              </HStack>
              <HStack spacing={3}>
                <BrandButton label="Google" icon={<GoogleSVG />} />
                <BrandButton label="GitHub" icon={<GitHubSVG />} />
                <BrandButton label="Microsoft" icon={<MicrosoftSVG />} />
              </HStack>
            </Box>
          </VStack>
        </Box>
      </Box>
    </Flex>
  );
}

/* === Botón social (con icono real) === */
function BrandButton({ label, icon }) {
  return (
    <Button
      variant="solid"
      bg="white"
      color="black"
      _hover={{ bg: "whiteAlpha.900" }}
      rounded="xl"
      flex="1 1 0"
      leftIcon={<Box w="18px" h="18px">{icon}</Box>}
    >
      {label}
    </Button>
  );
}

/* === SVGs de marca (a color) === */
function GoogleSVG() {
  return (
    <svg viewBox="0 0 24 24">
      <path fill="#EA4335" d="M12 10v3.8h5.4c-.2 1.3-1.6 4-5.4 4A6.8 6.8 0 1 1 12 3.2c1.8 0 3.1.6 3.7 1l2.4-2.3C16.3.8 14.3 0 12 0 5.4 0 0 5.4 0 12s5.4 12 12 12c6.9 0 11.5-4.9 11.5-11.8 0-.8-.1-1.3-.2-1.8H12z"/>
      <path fill="#34A853" d="M12 24c3.2 0 5.9-1 7.8-2.8l-3.6-2.8c-1 .7-2.4 1.2-4.2 1.2a7.2 7.2 0 0 1-6.8-5H.5v3.1A12 12 0 0 0 12 24z"/>
      <path fill="#FBBC05" d="M5.2 14.6A7.2 7.2 0 0 1 5 12c0-.9.2-1.8.4-2.6V6.2H.5A12 12 0 0 0 0 12a12 12 0 0 0 .5 5.8l4.7-3.2z"/>
      <path fill="#4285F4" d="M12 4.7c1.7 0 2.9.6 3.6 1.1l2.6-2.6C16.8 1.2 14.9.4 12 .4 7.4.4 3.5 3.1 1.9 6.8l4.7 3.4A7.2 7.2 0 0 1 12 4.7z"/>
    </svg>
  );
}

function GitHubSVG() {
  return (
    <svg viewBox="0 0 24 24">
      <path fill="#181717" d="M12 .5A12 12 0 0 0 8.2 23.9c.6.1.8-.2.8-.6v-2.2c-3.2.7-3.9-1.5-3.9-1.5-.6-1.4-1.3-1.8-1.3-1.8-1-.7.1-.7.1-.7 1.1.1 1.7 1.1 1.7 1.1.9 1.6 2.5 1.1 3.1.8.1-.7.3-1.1.6-1.4-2.6-.3-5.4-1.3-5.4-5.7 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.6.1-3.3 0 0 1-.3 3.3 1.2a11.2 11.2 0 0 1 6 0c2.2-1.5 3.3-1.2 3.3-1.2.6 1.7.2 3 .1 3.3.7.8 1.2 1.9 1.2 3.2 0 4.5-2.8 5.4-5.5 5.7.4.3.7 1 .7 2.1v3c0 .4.2.7.8.6A12 12 0 0 0 12 .5z"/>
    </svg>
  );
}

function MicrosoftSVG() {
  return (
    <svg viewBox="0 0 24 24">
      <path fill="#F35325" d="M2 2h9.5v9.5H2z"/>
      <path fill="#81BC06" d="M12.5 2H22v9.5h-9.5z"/>
      <path fill="#05A6F0" d="M2 12.5h9.5V22H2z"/>
      <path fill="#FFBA08" d="M12.5 12.5H22V22h-9.5z"/>
    </svg>
  );
}
