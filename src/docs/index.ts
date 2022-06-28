import { basicInfo } from '@src/docs/basicInfo';
import { servers } from '@src/docs/servers';
import { components } from '@src/docs/components';
import { tags } from '@src/docs/tags';
import { balances } from '@src/docs/balances';

export const docs = {
    ...basicInfo,
    ...servers,
    ...components,
    ...tags,
    ...balances,
};
