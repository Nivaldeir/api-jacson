import { Module, ValidationPipe } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { MongooseModule } from "@nestjs/mongoose";
import { APP_PIPE } from "@nestjs/core";
import { UsersModule } from './application/modules/users.module';
import { AnnouncementModule } from './application/modules/announcement.module';
@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(
      "mongodb+srv://nival:0068620748@cluster0.hsvej.mongodb.net/api?retryWrites=true&w=majority&appName=Cluster0"
    ),
    UsersModule,
    AnnouncementModule,
  ],
  controllers: [],
  providers: [
    {
      provide: APP_PIPE,
      useClass: ValidationPipe,
    },
  ],
})
export class AppModule {}
