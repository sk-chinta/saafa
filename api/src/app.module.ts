import { Module, Logger } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { ArtistModule } from "./artist.module";
import { TypeOrmModule } from "@nestjs/typeorm";
import path from "path";

console.log(__dirname);
@Module({
  imports: [
    ConfigService,
    Logger,
    ArtistModule,
    TypeOrmModule.forRoot({
      type: "sqlite",
      database: path.resolve(__dirname, "..", "chinook.db"),
      synchronize: false,
      entities: [path.resolve(__dirname, "*.entity.*")],
      logging: true,
    }),
  ],
})
export class AppModule {}
