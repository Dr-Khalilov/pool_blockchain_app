import { basicInfo } from './basicInfo';
import { servers } from './servers';
import { tags } from './tags';
import { components } from './components';
import { paths } from './paths';

export const docs = {
    ...basicInfo,
    ...servers,
    ...components,
    ...tags,
    ...paths,
};
