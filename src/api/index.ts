import { fetchApi } from './utils';
import { translateCoffee } from '@/translators';

import type { Coffee, FormattedCoffee } from '@/types';

export async function fetchKindOfCoffee(): Promise<FormattedCoffee> {
  const coffee = await fetchApi<Coffee>('https://random-data-api.com/api/coffee/random_coffee');

  return translateCoffee(coffee);
}
