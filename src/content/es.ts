export const esContent = {
  brand: {
    name: "PushPoint",
    tagline: "Ideas con impacto.",
  },
  navigation: [
    { href: "/", label: "Inicio" },
    { href: "/servicios", label: "Servicios: en preparación" },
    { href: "/como-trabajamos", label: "Cómo trabajamos: en preparación" },
    { href: "/trabajo", label: "Trabajo: en preparación" },
  ],
  primaryAction: {
    href: "/contacto",
    label: "Contactar",
  },
  footer: {
    summary:
      "Software a medida con Product, Engineering y Quality en el mismo equipo.",
    legalLabel: "Privacidad: en preparación",
    legalHref: "/privacidad",
  },
  home: {
    eyebrow: "Hacemos software a medida",
    title: "Llevamos tu idea a un producto digital confiable.",
    description:
      "Definimos, construimos, probamos y mantenemos productos digitales con equipos senior que se adaptan al problema.",
    processLabel: "Cómo aportamos",
    process: [
      {
        index: "01",
        title: "Definir",
        description: "Convertimos necesidades de negocio en requisitos y decisiones de producto.",
      },
      {
        index: "02",
        title: "Construir",
        description: "Desarrollamos software a medida con alcance y prioridades claras.",
      },
      {
        index: "03",
        title: "Validar",
        description: "Integramos Quality Engineering desde el inicio del trabajo.",
      },
      {
        index: "04",
        title: "Mejorar",
        description: "Estabilizamos, mantenemos y ajustamos el producto con evidencia.",
      },
    ],
  },
  contact: {
    eyebrow: "Contacto",
    title: "Contanos qué necesitás construir o mejorar.",
    description:
      "Podés escribirnos por email o LinkedIn, o llamarnos directamente.",
    channels: [
      {
        label: "Teléfono",
        value: "+54 9 11 5758-9002",
        href: "tel:+5491157589002",
      },
      {
        label: "Email",
        value: "ureapluis@gmail.com",
        href: "mailto:ureapluis@gmail.com",
      },
      {
        label: "LinkedIn",
        value: "linkedin.com/company/pushpoint-co",
        href: "https://linkedin.com/company/pushpoint-co",
      },
    ],
  },
  placeholders: {
    services: {
      eyebrow: "Servicios",
      title: "Estamos preparando el detalle de servicios.",
      description: "Esta página incluirá capacidades, situaciones de uso y entregables.",
    },
    approach: {
      eyebrow: "Cómo trabajamos",
      title: "Estamos documentando nuestra forma de trabajo.",
      description:
        "Esta página explicará el proceso, la composición del equipo y el rol de Quality Engineering.",
    },
    work: {
      eyebrow: "Trabajo",
      title: "Los casos se publicarán cuando estén aprobados.",
      description: "No mostramos clientes, cifras ni resultados sin autorización y evidencia.",
    },
    privacy: {
      eyebrow: "Privacidad",
      title: "La política de privacidad está en preparación.",
      description:
        "Todavía no hay formularios que recopilen datos personales en este sitio.",
    },
  },
} as const;

export type SiteContent = typeof esContent;
