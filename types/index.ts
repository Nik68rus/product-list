export enum BadgeType {
  NEW = 'new',
  TOP = 'top',
}

export enum Variant {
  DEFAULT = 'default',
  SUCCESS = 'success',
  DANGER = 'danger',
}

export enum Size {
  L = 'l',
}

export interface IProduct {
  id: string;
  title: string;
  brand: string;
  imageUrl: string;
  badge: BadgeType;
}
