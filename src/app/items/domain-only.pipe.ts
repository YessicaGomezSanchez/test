import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'domainOnly'
})
export class DomainOnlyPipe implements PipeTransform {

  transform(value: string, args?: any): any {
    const n = value.split('@');
    return n[1];
  }

}
