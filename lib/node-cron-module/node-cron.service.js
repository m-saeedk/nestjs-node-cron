"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NodeCronService = void 0;
const common_1 = require("@nestjs/common");
const node_cron_1 = require("node-cron");
/**
* Service class for working with cron expressions and tasks.
*/
let NodeCronService = class NodeCronService {
    /**
    * To validate whether the expression is a cron expression or not
    * @param cronExpression
    */
    Validate(expression) {
        return (0, node_cron_1.validate)(expression);
    }
    /**
    * Creates a new task to execute the given function when the cron expression ticks.
    * @param cronExpression
    * @param func
    * @param options
    */
    Schedule(expression, func, options) {
        return (0, node_cron_1.schedule)(expression, func, options);
    }
    /**
    * Get the list of tasks created using the `schedule` function
    */
    GetTasks() {
        return (0, node_cron_1.getTasks)();
    }
};
exports.NodeCronService = NodeCronService;
exports.NodeCronService = NodeCronService = __decorate([
    (0, common_1.Injectable)()
], NodeCronService);
