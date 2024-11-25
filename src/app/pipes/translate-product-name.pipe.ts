import { computed, Pipe, PipeTransform } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Product } from '../interfaces';
import { AppService } from '../services/app.service';

@Pipe({
  name: 'translateName',
})
export class TranslateNamePipe implements PipeTransform {
  transform(
    product: Product,
    format: 'name' | 'currency',
    lang = 'en'
  ): string {
    if (format === 'name') {
      return product.names[lang] || product.names['en'];
    }

    if (format === 'currency') {
      return product.currency[lang] || product.currency['en'];
    }

    return '';
  }
}
