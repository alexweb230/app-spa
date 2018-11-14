import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(dashboard, value): any {
     return dashboard.filter(dash => {
       return dash.made.includes(value);
     });
  }

}
