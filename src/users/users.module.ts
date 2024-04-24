import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UserService } from "./users.service";
import { UsersController } from "./users.controller";
import { User } from "./entities/user.entity";

@Module({
    imports:[TypeOrmModule.forFeature([User])],
    exports: [UserModule],
    providers: [UserService],
    controllers: [UsersController]
})
export class UserModule {}