import { basicInfo } from './basicInfo';
import { servers } from './servers';
import { tags } from './tags';
import { components } from './components';
import { balances } from './balances';

export const docs = {
    ...basicInfo,
    ...servers,
    ...components,
    ...tags,
    ...balances,
};
