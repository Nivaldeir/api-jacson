import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { announcementSchema } from "src/infra/controllers/schemas/announcement.schema";
import { z } from "zod";
import { Announcement } from "../schema/announcement.schema";
import { Model } from "mongoose";

@Injectable()
export class AnnouncementService {
  constructor(
    @InjectModel(Announcement.name) private repositoryModel: Model<Announcement>
  ) { }
  async create(input: z.infer<typeof announcementSchema>) {
    const newData = new this.repositoryModel(input);
    return newData.save()
  }

  async update(id: string, input: Partial<z.infer<typeof announcementSchema>>) {
    console.log(id)
    return await this.repositoryModel.findByIdAndUpdate(id, input);
  }
}
