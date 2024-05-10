import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, } from "mongoose";

@Schema()
export class Announcement {
  @Prop({
    type: Object
  })
  announcement: {
    url: string;
    type: "SELL" | "RENT";
    title: string;
    description: string;
    area_internal: string;
    area_lot: string;
    details: {
      bathrooms: string;
      car_parking: string;
      bedrooms: string;
      suites: string;
    };
    destination: keyof typeof enumCategory;
  };
  @Prop({
    type: {
      state: { type: String },
      address: { type: String },
      city: { type: String },
      cep: { type: String },
      latitude: { type: String, default: null },
      longitude: { type: String, default: null },
    },
  })
  location: {
    state: string;
    address: string;
    city: string;
    cep: string;
    latitude?: string;
    longitude?: string;
  };

  @Prop({ type: [String], default: [] })
  images: string[];
}

export type AnnouncementDocument = Announcement & Document;

export const AnnouncementSchema = SchemaFactory.createForClass(Announcement);

enum enumCategory {
  COMERCIAL = "comercial",
  RESIDENCIAL_COMERCIAL = "residencial/comercial",
  INDUSTRIAL = "industrial",
  RESIDENCIAL = "residencial",
  CORPORATIVA = "corporativa",
  TEMPORADA = "temporada",
  COMODO = "comodo",
  RURAL = "rural",
  FAZENDA_SITIO_CHACARA = "fazenda/sítio/chácara",
  FLAT = "flat",
  KITNET = "kitnet",
  LOFT = "loft",
  SOBRADO = "sobrado",
  STUDIO = "studio",
  TERRENO_LOTE_CONDOMINIO = "terreno/lote/condomínio",
}
