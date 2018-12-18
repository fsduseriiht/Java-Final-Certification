import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchTable'
})
export class SearchTablePipe implements PipeTransform {

  transform(data: any, args?: any): any {
    if (!data) return [];

    const searchValue = args.trim().toLowerCase();

    return data.filter(elem => {
      if (elem.firstName) {
        return elem.firstName.toLowerCase().includes(searchValue)
        || elem.lastName.toLowerCase().includes(searchValue)
        || elem.employeeId.toLowerCase().includes(searchValue);
      } else {
        return elem.project.toLowerCase().includes(searchValue)
      }
    });
  }
}
