import Web3 from 'web3';
import { BadRequestException } from '../exceptions/bad-request-exception';

class EthereumService {
    private readonly web3: Web3;
    private readonly rpcUrl: string;

    constructor() {
        this.rpcUrl = process.env.INFURA_URL_RPC;
        this.web3 = new Web3(this.rpcUrl);
    }

    public async getBalance(): Promise<object> {
        const address = '0xe2211d98f0f89a9c5b61e39fc80fde9056d8e2c0';
        const weiBalance = await this.web3.utils.toBN(
            await this.web3.eth.getBalance(address),
        );
        const convertedToEthereumBalance = this.web3.utils.fromWei(
            weiBalance,
            'ether',
        );
        if (!convertedToEthereumBalance) {
            throw new BadRequestException();
        }
        return { balance: `${convertedToEthereumBalance} ETH` };
    }

    public async getBalanceInNetwork(): Promise<object> {
        const address = '0xe2211d98f0f89a9c5b61e39fc80fde9056d8e2c0';
        const tokenAddress = '0x0d8775f648430679a709e98d2b0cb6250d2887ef';
        const walletAddress = '0x1cf56Fd8e1567f8d663e54050d7e44643aF';

        //index.js

        // The minimum ABI to get ERC20 Token balance

        const minABI = [
            // balanceOf
            {
                constant: true,

                inputs: [{ name: '_owner', type: 'address' }],

                name: 'balanceOf',

                outputs: [{ name: 'balance', type: 'uint256' }],

                type: 'function',
            },
        ];

        const contract = new this.web3.eth.Contract(minABI, tokenAddress);
        const result = await contract.methods.balanceOf(address).call();
        const format = this.web3.utils.fromWei(result, 'ether');
        console.log(format);
        // const apiKey = 'EK-kbBqw-DZhX39o-3bjfq';
        // const some = `https://api.ethplorer.io/getAddressInfo/${address}?apiKey=${apiKey}`;
        //
        // const res = request.get(some, (err, response, body) => {
        //     if (err) return res.status(500).send({ message: err });
        //     console.log(body);
        // });
        // for (const acctNum in ) {
        //     console.log(acctNum);
        //     const acct = this.web3.eth.accounts[acctNum];
        //     const acctBal = this.web3.utils.fromWei(
        //         await this.web3.eth.getBalance(acct),
        //         'ether',
        //     );
        //     totalBal += parseFloat(acctBal);
        //     console.log(
        //         '  eth.accounts[' +
        //             acctNum +
        //             ']: \t' +
        //             acct +
        //             ' \tbalance: ' +
        //             acctBal +
        //             ' ether',
        //     );
        // }
        // console.log('  Total balance: ' + totalBal + ' ether');
        return { address };
    }
}

export default new EthereumService();
