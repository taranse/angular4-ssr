import { Injectable } from '@angular/core';

@Injectable()
export class ReplacerService {

  number(number) {
    return Math.round(number).toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
  }

  price(price) {
    return this.number(price) + ' ₽.';
  }

  phone(phone) {
    return phone.replace(/\D/g, '');
  }
}
