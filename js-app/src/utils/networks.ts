import { Network } from "../interfaces/network";

const juno_testnet: Network = {
    chainId: "uni-2",
    chainName: "Juno (uni-2)",
    addressPrefix: "juno",
    rpcUrl: "https://rpc.uni.junonetwork.io/",
    httpUrl: "https://api.uni.junonetwork.io/",
    feeToken: "ujunox",
    stakingToken: "ujunox",
    coinMap: {
        ujunox: { denom: "JUNOX", fractionalDigits: 6 },
    },
    gasPrice: 0.025,
};

const juno_local: Network = {
    chainId: "testing",
    chainName: "Juno Local",
    addressPrefix: "juno",
    rpcUrl: "http://localhost:26657",
    httpUrl: "http://localhost:1317",
    feeToken: "ujunox",
    stakingToken: "ujunox",
    coinMap: {
        ujunox: { denom: "JUNOX", fractionalDigits: 6 },
    },
    gasPrice: 0.025,
};

const wasmd_testnet: Network = {
    chainId: "testing",
    chainName: "Wasmd Testnet",
    addressPrefix: "wasm",
    rpcUrl: "https://rpc.cliffnet.cosmwasm.com/",
    httpUrl: "https://lcd.cliffnet.cosmwasm.com/",
    feeToken: "upebble",
    stakingToken: "urock",
    coinMap: {
        upebble: { denom: "PEBBLE", fractionalDigits: 6 },
        urock: { denom: "ROCK", fractionalDigits: 6 },
    },
    gasPrice: 0.025,
};

const wasmd_local: Network = {
    chainId: "cliffnet-1",
    chainName: "Wasmd Local",
    addressPrefix: "wasm",
    rpcUrl: "http://localhost:26657",
    httpUrl: "http://localhost:1317",
    feeToken: "ucosm",
    stakingToken: "ustake",
    coinMap: {
        ustake: { denom: "STAKE", fractionalDigits: 6 },
        ucosm: { denom: "COSM", fractionalDigits: 6 },
    },
    gasPrice: 0.025,
};

const networks = {
    juno_testnet,
    juno_local,
    wasmd_testnet,
    wasmd_local,
};

export default networks;
