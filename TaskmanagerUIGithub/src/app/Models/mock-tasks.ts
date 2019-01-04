import { Task } from "src/app/Models/task";

export const MockTasks: Task[] = [
    {
        TaskId: 1,
        TaskName: 'unit Coding',
        ParentId: 1,
        ParentName: 'create Work',
        StartDate: new Date(),
        EndDate: new Date(),
        Priority: 13,
        CreatedBy: null,
        UpdatedBy: null,
        ActiveInd: 'Y'
    },
    {
        TaskId: 2,
        TaskName: 'Unit Testing',
        ParentId: 1,
        ParentName: 'Work',
        StartDate: new Date(),
        EndDate: new Date(),
        Priority: 22,
        CreatedBy: 'selvaraj',
        UpdatedBy: null,
        ActiveInd: 'Y'
    },
    {
        TaskId: 3,
        TaskName: 'Review',
        ParentId: 1,
        ParentName: 'Project Work2',
        StartDate: new Date(),
        EndDate: new Date(),
        Priority: 8,
        CreatedBy: 'selvaraj',
        UpdatedBy: null,
        ActiveInd: 'N'
    }
]
