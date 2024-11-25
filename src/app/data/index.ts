import { Product } from '../interfaces';

export const coupons = new Map<string, number>();
coupons.set('PROMO', 10);
coupons.set('SIDD', 50);
coupons.set('BLACKFRIDAY', 25);

export const sampleProducts: Product[] = [
  {
    id: 1,
    names: {
      en: 'Wireless Headphones',
      es: 'Auriculares inalámbricos',
      fr: 'Casque sans fil',
    },
    price: 129.99,
    discount: 15,
    currency: { en: 'NGN', es: 'EUR', fr: 'EUR' },
  },
  {
    id: 2,
    names: {
      en: 'Smart Watch',
      es: 'Reloj inteligente',
      fr: 'Montre intelligente',
    },
    price: 199.99,
    discount: 20,
    currency: { en: 'NGN', es: 'EUR', fr: 'EUR' },
  },
  {
    id: 3,
    names: {
      en: 'Laptop Backpack',
      es: 'Mochila para portátil',
      fr: 'Sac à dos pour ordinateur portable',
    },
    price: 49.99,
    currency: { en: 'NGN', es: 'EUR', fr: 'EUR' },
  },
  {
    id: 4,
    names: {
      en: 'Mechanical Keyboard',
      es: 'Teclado mecánico',
      fr: 'Clavier mécanique',
    },
    price: 89.99,
    discount: 10,
    currency: { en: 'NGN', es: 'EUR', fr: 'EUR' },
  },
  {
    id: 5,
    names: {
      en: 'Gaming Mouse',
      es: 'Ratón para juegos',
      fr: 'Souris de jeu',
    },
    price: 59.99,
    currency: { en: 'NGN', es: 'EUR', fr: 'EUR' },
  },
  {
    id: 6,
    names: {
      en: 'USB-C Hub',
      es: 'Concentrador USB-C',
      fr: 'Hub USB-C',
    },
    price: 39.99,
    discount: 5,
    currency: { en: 'NGN', es: 'EUR', fr: 'EUR' },
  },
  {
    id: 7,
    names: {
      en: 'Portable SSD',
      es: 'SSD portátil',
      fr: 'SSD portable',
    },
    price: 149.99,
    currency: { en: 'NGN', es: 'EUR', fr: 'EUR' },
  },
  {
    id: 8,
    names: {
      en: 'Wireless Charger',
      es: 'Cargador inalámbrico',
      fr: 'Chargeur sans fil',
    },
    price: 29.99,
    discount: 8,
    currency: { en: 'NGN', es: 'EUR', fr: 'EUR' },
  },
  {
    id: 9,
    names: {
      en: 'Bluetooth Speaker',
      es: 'Altavoz Bluetooth',
      fr: 'Haut-parleur Bluetooth',
    },
    price: 79.99,
    currency: { en: 'NGN', es: 'EUR', fr: 'EUR' },
  },
  {
    id: 10,
    names: {
      en: 'Webcam HD',
      es: 'Webcam HD',
      fr: 'Webcam HD',
    },
    price: 69.99,
    discount: 12,
    currency: { en: 'NGN', es: 'EUR', fr: 'EUR' },
  },
  {
    id: 11,
    names: {
      en: 'Phone Stand',
      es: 'Soporte para teléfono',
      fr: 'Support téléphone',
    },
    price: 19.99,
    currency: { en: 'NGN', es: 'EUR', fr: 'EUR' },
  },
  {
    id: 12,
    names: {
      en: 'Screen Protector',
      es: 'Protector de pantalla',
      fr: 'Protection d’écran',
    },
    price: 14.99,
    currency: { en: 'NGN', es: 'EUR', fr: 'EUR' },
  },
  {
    id: 13,
    names: {
      en: 'Laptop Sleeve',
      es: 'Funda para portátil',
      fr: 'Housse pour ordinateur portable',
    },
    price: 24.99,
    discount: 7,
    currency: { en: 'NGN', es: 'EUR', fr: 'EUR' },
  },
  {
    id: 14,
    names: {
      en: 'Power Bank',
      es: 'Banco de energía',
      fr: 'Batterie externe',
    },
    price: 44.99,
    currency: { en: 'NGN', es: 'EUR', fr: 'EUR' },
  },
  {
    id: 15,
    names: {
      en: 'Cable Organizer',
      es: 'Organizador de cables',
      fr: 'Organisateur de câbles',
    },
    price: 9.99,
    currency: { en: 'NGN', es: 'EUR', fr: 'EUR' },
  },
  {
    id: 16,
    names: {
      en: 'Monitor Stand',
      es: 'Soporte para monitor',
      fr: 'Support pour moniteur',
    },
    price: 34.99,
    discount: 15,
    currency: { en: 'NGN', es: 'EUR', fr: 'EUR' },
  },
  {
    id: 17,
    names: {
      en: 'Wireless Mouse',
      es: 'Ratón inalámbrico',
      fr: 'Souris sans fil',
    },
    price: 29.99,
    currency: { en: 'NGN', es: 'EUR', fr: 'EUR' },
  },
  {
    id: 18,
    names: {
      en: 'Desk Mat',
      es: 'Alfombrilla de escritorio',
      fr: 'Tapis de bureau',
    },
    price: 19.99,
    discount: 5,
    currency: { en: 'NGN', es: 'EUR', fr: 'EUR' },
  },
  {
    id: 19,
    names: {
      en: 'Laptop Cooling Pad',
      es: 'Base de refrigeración para portátil',
      fr: 'Support de refroidissement pour ordinateur portable',
    },
    price: 39.99,
    currency: { en: 'NGN', es: 'EUR', fr: 'EUR' },
  },
  {
    id: 20,
    names: {
      en: 'Keyboard Wrist Rest',
      es: 'Reposamuñecas para teclado',
      fr: 'Repose-poignet pour clavier',
    },
    price: 15.99,
    discount: 3,
    currency: { en: 'NGN', es: 'EUR', fr: 'EUR' },
  },
];
