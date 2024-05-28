import { Module } from "@nestjs/common";
import { NodeCronService } from "./node-cron.service";

@Module({
    imports: [],
    providers: [NodeCronService],
    exports: [NodeCronService],
})
export class NodeCronModule { }