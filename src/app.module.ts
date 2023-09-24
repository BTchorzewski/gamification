import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { SettingsModule } from './settings/settings.module';

@Module({
  imports: [UserModule, SettingsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
