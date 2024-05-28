import { Injectable } from '@nestjs/common';
import { getTasks, schedule, ScheduleOptions, validate } from 'node-cron';

/**
* Service class for working with cron expressions and tasks.
*/
@Injectable()
export class NodeCronService {

    /**
    * To validate whether the expression is a cron expression or not
    * @param cronExpression
    */
    Validate(expression: string) {
        return validate(expression);
    }

    /**
    * Creates a new task to execute the given function when the cron expression ticks.
    * @param cronExpression
    * @param func
    * @param options
    */
    Schedule(expression: string, func: ((now: Date | "manual" | "init") => void) | string, options?: ScheduleOptions) {
        return schedule(expression, func, options);
    }

    /**
    * Get the list of tasks created using the `schedule` function
    */
    GetTasks() {
        return getTasks();
    }
}