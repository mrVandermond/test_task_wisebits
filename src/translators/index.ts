import type { Coffee, FormattedCoffee } from '@/types';

export function translateCoffee(value: Coffee): FormattedCoffee {
  return {
    ...value,
    notes: value.notes.split(', '),
  };
}
