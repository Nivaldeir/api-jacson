import { Module } from "@nestjs/common";
import { AnnouncementService } from "../services/announcement.service";
import { AnnouncementController } from "../../infra/controllers/announcement.controller";
import { MongooseModule } from "@nestjs/mongoose";
import { Announcement, AnnouncementSchema } from "../schema/announcement.schema";

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Announcement.name, schema: AnnouncementSchema },
    ]),
  ],
  controllers: [AnnouncementController],
  providers: [AnnouncementService],
})
export class AnnouncementModule {}
