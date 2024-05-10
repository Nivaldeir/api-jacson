import { Module } from "@nestjs/common";
import { UsersService } from "../services/users.service";
import { UsersController } from "../../infra/controllers/users.controller";
import { MongooseModule } from "@nestjs/mongoose";
import { User, userSchema } from "../schema/user.schema";

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: userSchema }]),
  ],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
