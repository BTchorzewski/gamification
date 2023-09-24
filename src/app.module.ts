import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { SettingsModule } from './settings/settings.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [UserModule, SettingsModule, DatabaseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
