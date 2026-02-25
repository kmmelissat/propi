export enum PropertyType {
  APARTAMENTO = "Apartamento",
  CASA = "Casa",
  DEPARTAMENTO = "Departamento",
  PENTHOUSE = "Penthouse",
  LOCAL = "Local comercial",
  OFICINA = "Oficina",
  TERRENO = "Terreno",
  OTROS = "Otros",
}

export interface PreReservaHeaderProps {
  propertyName: string;
  propertyType?: PropertyType;
}
