import { Controller, Post, Body, Patch, Param, UsePipes } from "@nestjs/common";
import { UsersService } from "../../application/services/users.service";
import { z } from "zod";
import { userSchema } from "./schemas/user.schema";
import { ZodValidationPipe } from "./schemas/zod-validate";
@Controller("users")
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  @UsePipes(new ZodValidationPipe(userSchema))
  create(@Body() user: z.infer<typeof userSchema>) {
    return this.usersService.create(user);
  }

  @Patch(":id")
  @UsePipes(new ZodValidationPipe(userSchema))
  update(
    @Param("id") id: string,
    @Body() updateUser: z.infer<typeof userSchema>
  ) {
    return this.usersService.update(+id, updateUser);
  }
}
