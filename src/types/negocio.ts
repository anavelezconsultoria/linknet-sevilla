/** Tipos del contenido del sitio: cada dato que se muestra pasa por aqui. */

export type IconoServicio = 'wifi' | 'camara' | 'alquiler' | 'vigilancia' | 'drone';

export type IconoAdicional =
  | 'camara'
  | 'kit'
  | 'wifi'
  | 'enlace'
  | 'ups'
  | 'mantenimiento'
  | 'telefono'
  | 'solar';

export type IconoPlan = 'hogar' | 'seguridad' | 'finca' | 'empresa';

export interface Telefono {
  readonly etiqueta: string;
  /** Solo digitos, con indicativo de pais. */
  readonly numero: string;
  /** Como se lee: 315 788 8967 */
  readonly visible: string;
  readonly whatsapp: boolean;
}

export interface Servicio {
  readonly icono: IconoServicio;
  readonly titulo: string;
  readonly descripcion: string;
  /** Mensaje con el que abre WhatsApp al tocar "Me interesa". */
  readonly mensaje: string;
}

export interface Plan {
  readonly icono: IconoPlan;
  readonly nombre: string;
  readonly incluye: readonly string[];
  readonly precio: string;
  readonly detallePrecio: string;
  readonly destacado?: boolean;
}

export interface Adicional {
  readonly icono: IconoAdicional;
  readonly titulo: string;
  readonly detalles: readonly string[];
  readonly precio: string;
  readonly detallePrecio: string;
}

export interface Negocio {
  readonly nombre: string;
  readonly lema: string;
  readonly promesa: string;
  readonly cobertura: readonly string[];
  readonly detalleCobertura: string;
  readonly telefonos: readonly Telefono[];
  readonly mediosPago: readonly string[];
}
