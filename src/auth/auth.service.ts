import { Injectable } from "@nestjs/common";
import { PrismaClient } from "@prisma/client";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable({})
export class AuthService {
    constructor(private prisma: PrismaService){}
    signup() {
        return 'I am signed up';
    }

    signin(){
        return 'I am signed in';
    }
}