import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchDashboard'
})
export class SearchDashboardPipe implements PipeTransform {

  transform(dashboard, value): any {
    return dashboard.filter(dash => {
      return dash.link.includes(value);
    });
  }

}
