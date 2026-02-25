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

export interface PropertyCardProps {
  imageSrc: string;
  imageAlt: string;
  buildingName: string;
  unitName: string;
  bedrooms: number;
  bathrooms: number;
  areaM2: number;
  price: number;
  isAvailable?: boolean;
}
