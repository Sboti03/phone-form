import { Body, Controller, Get, Post, Render } from '@nestjs/common';
import { AppService } from './app.service';
import { Phone } from './phone.dto';

@Controller()
export class AppController {
  

  @Get()
  @Render('index')
  main(): object {
    return {};
  }

  @Post()
  @Render('phone')
  handlePhoneForm(@Body() body: Phone) {
    return body;
  }

}
