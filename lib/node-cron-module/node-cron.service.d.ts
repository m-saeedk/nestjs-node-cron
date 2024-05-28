import { ScheduleOptions } from 'node-cron';
/**
* Service class for working with cron expressions and tasks.
*/
export declare class NodeCronService {
    /**
    * To validate whether the expression is a cron expression or not
    * @param cronExpression
    */
    Validate(expression: string): boolean;
    /**
    * Creates a new task to execute the given function when the cron expression ticks.
    * @param cronExpression
    * @param func
    * @param options
    */
    Schedule(expression: string, func: ((now: Date | "manual" | "init") => void) | string, options?: ScheduleOptions): import("node-cron").ScheduledTask;
    /**
    * Get the list of tasks created using the `schedule` function
    */
    GetTasks(): Map<string, import("node-cron").ScheduledTask>;
}
