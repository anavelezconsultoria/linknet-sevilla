import type { Adicional, Negocio, Plan, Servicio } from '../types/negocio';

/**
 * Contenido del sitio. Fuente: el volante oficial de LinkNet y la lista de
 * servicios del dueño. No agregar datos (horarios, direccion, cifras) que no
 * esten confirmados por el negocio.
 */

export const negocio: Negocio = {
  nombre: 'LinkNet',
  lema: 'Conectamos tu mundo, sin importar la distancia',
  promesa: 'Más que internet, somos tu aliado en tecnología',
  cobertura: ['Sevilla', 'Caicedonia'],
  detalleCobertura: 'Veredas de Sevilla y alrededores',
  telefonos: [
    { etiqueta: 'WhatsApp y llamadas', numero: '573157888967', visible: '315 788 8967', whatsapp: true },
    { etiqueta: 'Línea alterna', numero: '573183813349', visible: '318 381 3349', whatsapp: false },
  ],
  mediosPago: ['Nequi', 'Daviplata', 'Otros medios'],
};

/** WhatsApp principal: todos los botones de contacto llegan aqui. */
const WHATSAPP = negocio.telefonos.find((t) => t.whatsapp)?.numero ?? '573157888967';

export function enlaceWhatsapp(mensaje: string): string {
  return `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(mensaje)}`;
}

export const servicios: readonly Servicio[] = [
  {
    icono: 'wifi',
    titulo: 'Internet banda ancha ilimitado',
    descripcion: 'Internet rural para tu casa, finca o negocio, sin límite de consumo, en las veredas de Sevilla y Caicedonia.',
    mensaje: 'Hola, quiero información sobre el internet de LinkNet para mi vereda.',
  },
  {
    icono: 'camara',
    titulo: 'Instalación de cámaras',
    descripcion: 'Cámaras de alta definición instaladas y configuradas para verlas desde tu celular, estés donde estés.',
    mensaje: 'Hola, quiero cotizar la instalación de cámaras de seguridad.',
  },
  {
    icono: 'alquiler',
    titulo: 'Alquiler de cámaras',
    descripcion: 'Cámaras en alquiler por el tiempo que las necesites, instaladas y listas para usar.',
    mensaje: 'Hola, quiero información sobre el alquiler de cámaras.',
  },
  {
    icono: 'vigilancia',
    titulo: 'Servicio de vigilancia',
    descripcion: 'Vigilancia para tu casa, finca o negocio, para que tengas tranquilidad.',
    mensaje: 'Hola, quiero información sobre el servicio de vigilancia.',
  },
  {
    icono: 'drone',
    titulo: 'Servicios con drones',
    descripcion: 'Cuéntanos qué necesitas ver desde el aire y te asesoramos.',
    mensaje: 'Hola, quiero información sobre los servicios con drones.',
  },
];

export const planes: readonly Plan[] = [
  {
    icono: 'hogar',
    nombre: 'LinkNet Hogar',
    incluye: ['Internet rural', 'Soporte técnico básico'],
    precio: '$90.000',
    detallePrecio: 'al mes',
    destacado: true,
  },
  {
    icono: 'seguridad',
    nombre: 'LinkNet Seguridad',
    incluye: ['Internet', '2 cámaras de seguridad', 'Acceso desde el celular'],
    precio: 'Desde $850.000',
    detallePrecio: 'instalación',
  },
  {
    icono: 'finca',
    nombre: 'LinkNet Finca',
    incluye: ['Internet', 'Wi-Fi para toda la finca', 'Cámaras de seguridad (opcional)'],
    precio: 'Desde $1.100.000',
    detallePrecio: 'instalación',
  },
  {
    icono: 'empresa',
    nombre: 'LinkNet Empresa',
    incluye: ['Internet', 'Red Wi-Fi empresarial', 'Cámaras de seguridad', 'Soporte técnico prioritario'],
    precio: 'Desde $1.500.000',
    detallePrecio: 'instalación',
  },
];

export const adicionales: readonly Adicional[] = [
  {
    icono: 'camara',
    titulo: 'Cámaras de seguridad',
    detalles: ['Cámaras Wi-Fi o IP', 'Visualización desde el celular', 'Grabación en NVR/DVR', 'Instalación y configuración'],
    precio: 'Desde $250.000',
    detallePrecio: 'por cámara',
  },
  {
    icono: 'kit',
    titulo: 'Kit de 2 cámaras + NVR',
    detalles: ['2 cámaras de alta definición', 'Grabador (NVR)', 'Disco duro según capacidad', 'Instalación y configuración'],
    precio: '$650.000 a $900.000',
    detallePrecio: 'según la capacidad del disco',
  },
  {
    icono: 'kit',
    titulo: 'Kit de 4 cámaras + NVR',
    detalles: ['4 cámaras de alta definición', 'Grabador (NVR)', 'Disco duro según capacidad', 'Instalación y configuración'],
    precio: '$1.000.000 a $1.500.000',
    detallePrecio: 'según la capacidad del disco',
  },
  {
    icono: 'wifi',
    titulo: 'Wi-Fi para toda la finca',
    detalles: ['Puntos de acceso adicionales', 'Cobertura en casa, galpón, establo, kiosco', 'Configuración y optimización'],
    precio: 'Desde $250.000',
    detallePrecio: 'según la cobertura requerida',
  },
  {
    icono: 'enlace',
    titulo: 'Enlace inalámbrico entre viviendas',
    detalles: ['Conecta tu casa con otra vivienda o finca', 'Ideal para fincas y veredas'],
    precio: '$500.000 a $900.000',
    detallePrecio: 'según la distancia y equipos',
  },
  {
    icono: 'ups',
    titulo: 'UPS / respaldo para internet',
    detalles: ['Mantiene tu internet activo en cortes de energía', 'Protege tus equipos'],
    precio: 'Desde $250.000',
    detallePrecio: 'según la capacidad',
  },
  {
    icono: 'mantenimiento',
    titulo: 'Mantenimiento de redes',
    detalles: ['Revisión de antenas y equipos', 'Cambio de cables y conectores', 'Solución de problemas de Wi-Fi'],
    precio: '$80.000 a $150.000',
    detallePrecio: 'por visita',
  },
  {
    icono: 'telefono',
    titulo: 'Telefonía IP',
    detalles: ['Número telefónico para negocios', 'Extensiones internas', 'Teléfono IP para fincas u oficinas'],
    precio: 'Desde $120.000',
    detallePrecio: 'equipo y configuración',
  },
  {
    icono: 'solar',
    titulo: 'Sistema solar para equipos de internet',
    detalles: ['Paneles solares', 'Baterías', 'Controlador de carga', 'Instalación y configuración'],
    precio: 'Desde $800.000',
    detallePrecio: 'según la capacidad',
  },
];
