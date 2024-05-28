# NestJS | node-cron 

`nestjs-node-cron` is a NestJS module that provides a simple and intuitive API for scheduling tasks using cron expressions. It is built on top of the popular `node-cron` library. This package offers a service to manage cron tasks easily within a NestJS application.

## Installation

To install the package, use npm or yarn:
```
npm install nestjs-node-cron 
or
yarn add nestjs-node-cron
``` 

## Getting Started

### NodeCronModule

First, you need to import the `NodeCronModule` into your NestJS module.

``` typescript
import { Module } from '@nestjs/common';
import { NodeCronModule } from 'nestjs-node-cron';

@Module({
  imports: [NodeCronModule],
})
export class AppModule {}`
```
### NodeCronService

Inject the `NodeCronService` into your service or controller where you want to manage cron tasks.
``` typescript
import { Injectable } from  '@nestjs/common'; 
import { NodeCronService } from  'nestjs-node-cron'; 

@Injectable() 
export  class  CronService { 
	constructor(private readonly nodeCronService: NodeCronService) {}
	setupCronJobs() { 
		// Example usage 
	} 
}
```

## API Documentation

### Methods

#### `Validate(expression: string): boolean`

Validates whether the provided string is a valid cron expression.

**Parameters:**

-   `expression`: A string representing the cron expression to validate.

**Returns:**

-   `boolean`: `true` if the expression is valid, `false` otherwise.

**Usage:**

``` typescript
const isValid = this.nodeCronService.Validate('*/5 * * * *');
console.log(isValid); // Output: true
```

#### `Schedule(expression: string, func: ((now: Date | "manual" | "init") => void) | string, options?: ScheduleOptions)`

Schedules a new task to execute the given function according to the cron expression.

**Parameters:**

-   `expression`: A string representing the cron expression for the schedule.
-   `func`: A function to execute when the cron expression ticks. It can be a function or a string command.
-   `options?`: Optional scheduling options as defined by `node-cron`.

**Returns:**

-   `ScheduledTask`: The scheduled task instance.

**Usage:**
``` typescript
this.nodeCronService.Schedule('*/5 * * * *', () => {
  console.log('Running a task every 5 minutes');
});

this.nodeCronService.Schedule('0 0 * * *', 'echo "Midnight task"');
```

#### `GetTasks()`

Retrieves the list of tasks created using the `schedule` function.

**Returns:**

-   `Map<string, ScheduledTask>`: A map of task identifiers to scheduled task instances.

**Usage:**

``` typescript
const tasks = this.nodeCronService.GetTasks();
tasks.forEach((task, id) => {
  console.log(`Task ID: ${id}, Task: ${task}`);
});
```

## Example Usage

Here's a complete example of how to use `NodeCronService` in a NestJS service:

``` typescript
import { Injectable } from '@nestjs/common';
import { NodeCronService } from 'nestjs-node-cron';

@Injectable()
export class Service {
  constructor(private readonly nodeCronService: NodeCronService) {
    this.setupCronJobs();
  }

  setupCronJobs() {
    // Schedule a task to run every minute
    this.nodeCronService.Schedule('* * * * *', () => {
      console.log('Task running every minute');
    });

    // Validate a cron expression
    const isValid = this.nodeCronService.Validate('0 0 * * *');
    console.log('Cron expression is valid:', isValid);

    // Get all scheduled tasks
    const tasks = this.nodeCronService.GetTasks();
    console.log('Scheduled tasks:', tasks);
  }
}
```

## Credits

This package is built on top of the [node-cron](https://github.com/node-cron/node-cron) library. Thanks to the authors and contributors of `node-cron` for providing a robust cron scheduling solution for Node.js.
 
For more information, check out our [GitHub repository](https://github.com/m-saeedk/nestjs-node-cron)