import { EthereumIds } from '../enums/EthereumIds';
import { EthereumNetworks } from '../enums/EthereumNetworks';

export const networkCorrespondenceMap = Object.freeze({
    [EthereumIds.ETH]: EthereumNetworks.ETHEREUM,
    [EthereumIds.ARBITRUM]: EthereumNetworks.ARBITRUM,
    [EthereumIds.OPTIMISM]: EthereumNetworks.OPTIMISM,
    [EthereumIds.GNOSIS]: EthereumNetworks.GNOSISXDAI,
});
