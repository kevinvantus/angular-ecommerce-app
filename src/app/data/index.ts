import { Product } from '../interfaces';

export const coupons = new Map<string, number>();
coupons.set('PROMO', 10);
coupons.set('SIDD', 50);
coupons.set('BLACKFRIDAY', 25);

export const sampleProducts: Product[] = [
  { id: 1, name: 'Wireless Headphones', price: 129.99, discount: 15 },
  { id: 2, name: 'Smart Watch', price: 199.99, discount: 20 },
  { id: 3, name: 'Laptop Backpack', price: 49.99 },
  { id: 4, name: 'Mechanical Keyboard', price: 89.99, discount: 10 },
  { id: 5, name: 'Gaming Mouse', price: 59.99 },
  { id: 6, name: 'USB-C Hub', price: 39.99, discount: 5 },
  { id: 7, name: 'Portable SSD', price: 149.99 },
  { id: 8, name: 'Wireless Charger', price: 29.99, discount: 8 },
  { id: 9, name: 'Bluetooth Speaker', price: 79.99 },
  { id: 10, name: 'Webcam HD', price: 69.99, discount: 12 },
  { id: 11, name: 'Phone Stand', price: 19.99 },
  { id: 12, name: 'Screen Protector', price: 14.99 },
  { id: 13, name: 'Laptop Sleeve', price: 24.99, discount: 7 },
  { id: 14, name: 'Power Bank', price: 44.99 },
  { id: 15, name: 'Cable Organizer', price: 9.99 },
  { id: 16, name: 'Monitor Stand', price: 34.99, discount: 15 },
  { id: 17, name: 'Wireless Mouse', price: 29.99 },
  { id: 18, name: 'Desk Mat', price: 19.99, discount: 5 },
  { id: 19, name: 'Laptop Cooling Pad', price: 39.99 },
  { id: 20, name: 'Keyboard Wrist Rest', price: 15.99, discount: 3 },
];
