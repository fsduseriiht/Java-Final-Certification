import { Injectable } from '@angular/core';

@Injectable()
export class UtilService {

  constructor() { }

  // format Date to "yyyy-MM-dd"
  getDate(isoDate) {
    const date = new Date(isoDate);
    const month = date.getMonth() + 1;
    const taskDate = date.getDate();
    //yyyy-MM-dd
    
    let newDate = '';
    if(taskDate < 10) {
      newDate = '0' + taskDate;
    } else {
      newDate = taskDate + '';
    }

    let newMonth = '';
    if(month < 10) {
      newMonth = '0' + month;
    } else {
      newMonth = month + '';
    }

    return date.getFullYear()+'-' + newMonth + '-' + newDate;
  }

  sortCompleted(data$) {
    return data$
      .map((data) => {
        data.sort((a, b) => {
        var aStartDateObj = new Date(a.startDate);
        var aEndDateObj = new Date(a.endDate);
        var bStartDateObj = new Date(b.startDate);
        var bEndDateObj = new Date(b.endDate);
        var aTimeDiff = Math.abs(aEndDateObj.getTime() - aStartDateObj.getTime());
        var x = Math.ceil(aTimeDiff / (1000 * 3600 * 24));
        var bTimeDiff = Math.abs(bEndDateObj.getTime() - bStartDateObj.getTime());
        var y = Math.ceil(bTimeDiff / (1000 * 3600 * 24));
        return x < y ? -1 : x > y ? 1 : 0;
      });
      return data;
    });
  }

  sort(data$, item, type) {
    return data$
      .map((data) => {
        if (type === 'date') {
          data.sort((a, b) => {
            var x = new Date(a[item]);
            var y = new Date(b[item]);
            return x < y ? -1 : x > y ? 1 : 0;
          });
        } else {
          const isNumber = type === 'number';
          data.sort((a, b) => {
            var x = isNumber ? parseInt(a[item], 10) : a[item].toLowerCase();
            var y = isNumber ? parseInt(b[item], 10) : b[item].toLowerCase();
            return x < y ? -1 : x > y ? 1 : 0;
          });
        }
        return data;
      });
  }

  getCalculatdDate(date) {
    const tDate = date.getDate();
    const tMonth = date.getMonth() + 1;
    const tYear = date.getFullYear();
    return new Date(tYear, tMonth, tDate);
  }

  setHeader(subHeading) {
    const links: any = document.querySelectorAll('.nav-link');
    links.forEach(link => {
      link.classList.remove('active');
      if (link.innerHTML.trim() ===  subHeading) {
        link.classList.add('active');
      }
    });
    document.getElementById('subHeading').innerText = subHeading;
  }
}
