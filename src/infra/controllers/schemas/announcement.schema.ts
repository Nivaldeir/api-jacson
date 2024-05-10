import { z } from "zod";

const CategorySchema = z.enum([
  "comercial",
  "residencial/comercial",
  "industrial",
  "residencial",
  "corporativa",
  "temporada",
  "comodo",
  "rural",
  "fazenda/sítio/chácara",
  "flat",
  "kitnet",
  "loft",
  "sobrado",
  "studio",
  "terreno/lote/condomínio",
]);

export const announcementSchema = z.object({
  announcement: z.object({
    url: z.string(),
    title: z.string(),
    description: z.string(),
    area_internal: z.string(),
    area_lot: z.string(),
    details: z.object({
      bathrooms: z.number(),
      car_parking: z.number(),
      bedrooms: z.number(),
      suites: z.number(),
    }),
    destination: CategorySchema,
  }),
  location: z.object({
    state: z.string(),
    address: z.string(),
    city: z.string(),
    cep: z.string(),
    latitude: z.string().optional(),
    longitude: z.string().optional(),
  }),
  images: z.string().array(),
})