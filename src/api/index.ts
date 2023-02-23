import { fetchApi } from './utils';
import { translateCoffee, translatePicture } from '@/translators';

import type { FormattedCoffee } from '@/types';

export async function fetchKindOfCoffee(): Promise<FormattedCoffee> {
  const coffee = await fetchApi('https://random-data-api.com/api/coffee/random_coffee');

  return translateCoffee(coffee);
}

export async function fetchPicture(): Promise<string> {
  const picture = await fetchApi('https://loremflickr.com/500/500/coffee%20bean')

  return translatePicture(picture);
}
