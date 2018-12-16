import { Component, Pipe, PipeTransform } from '@angular/core';

import { UtilService } from '../services/util.service';

@Pipe({
  name: 'searchContent'
})
export class SearchContentPipe implements PipeTransform {
  searchValue: string = '';
  
  constructor( private utilService: UtilService) {}

  transform(tasks: any, args?: any): any {
    if (!tasks) return [];

    const searchValue = args.trim().toLowerCase();

    return tasks.filter(task => {
      return task.task.toLowerCase().includes(searchValue)
      || (task.parentTask && task.parentTask.toLowerCase().includes(searchValue))
      || task.sdate.toLowerCase().includes(searchValue)
      || task.edate.toLowerCase().includes(searchValue)
      || task.priority.toLowerCase().includes(searchValue)
    });
  }

}
