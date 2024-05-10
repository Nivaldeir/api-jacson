import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { userSchema } from "src/infra/controllers/schemas/user.schema";
import { z } from "zod";
import { User } from "../schema/user.schema";
import { Model } from "mongoose";
import * as crypto from "crypto";

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) { }
  async create(input: z.infer<typeof userSchema>) {
    const password = crypto
      .pbkdf2Sync(input.password, "20", 100, 64, "sha512")
      .toString("hex");
    const newData = new this.userModel({
      email: input.email,
      password: password,
    });
    const userCreated = await newData.save();
    return userCreated
  }

  async update(id: number, updateUserDto: z.infer<typeof userSchema>) {
    return await this.userModel.findByIdAndUpdate(id, updateUserDto);
  }
}
