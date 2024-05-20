import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipe'
})
export class PipePipe implements PipeTransform {

  transform(value: any[], filterString: string, propName: string): any[] {
    if (!filterString || filterString.trim() === '') {
      return value;
    }
    
    const resultArray = [];
    const lowerCaseFilter = filterString.toLowerCase();

    for (const item of value) {
      const propValue = item[propName]?.toString().toLowerCase();
      if (propValue && propValue.includes(lowerCaseFilter)) {
        resultArray.push(item);
      }
    } 
    return resultArray;
  }
}
