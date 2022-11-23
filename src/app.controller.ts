import { Get, Controller, Render } from '@nestjs/common';
import { Gender, User } from './user';

const userStore: Array<User> = [];

function seedUsers() {
  const older = new Date("1982-05-26");
  const young = new Date("2005-03-12");

  userStore.push(
    new User("l;twrqdnltqdnwtrl;qwntld", Gender.Male, older, 5000, false),
    new User("wl;dt;nqrltd;lqn", Gender.Female, young, -1200, true),
    new User("r237", Gender.Male, young, 6330, true),
    new User("rwlntdwdt", Gender.Female, older, 2314, true),
    new User("lr;wdtqdtl;rnqwdt", Gender.Male, young, 7322, false),
    new User("rlw;qdtnr;lw", Gender.Female, older, 8328, true));
}

@Controller()
export class AppController {
  @Get()
  @Render('index')
  root() {
    if (userStore.length <= 0)
      seedUsers();

    return { users: userStore.filter(x => x.isActive) };
  }
}
