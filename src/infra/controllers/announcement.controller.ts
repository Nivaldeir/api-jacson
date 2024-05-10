import { Controller, Post, Body, Patch, Param, UsePipes } from "@nestjs/common";
import { AnnouncementService } from "../../application/services/announcement.service";
import { ZodValidationPipe } from "./schemas/zod-validate";
import { announcementSchema,  } from "./schemas/announcement.schema";
import { z } from "zod";

@Controller("announcement")
export class AnnouncementController {
  constructor(private readonly announcementService: AnnouncementService) {}

  @Post()
  @UsePipes(new ZodValidationPipe(announcementSchema))
  create(@Body() input: z.infer<typeof announcementSchema>) {
    return this.announcementService.create(input);
  }

  @Patch(":id")
  update(
    @Param("id") id: string,
    @Body() input: any
  ) {
    return this.announcementService.update(id, input);
  }
}
