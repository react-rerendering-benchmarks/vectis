import { Chains } from "./config/chains";
import { CWClient, ProxyClient, FactoryClient } from "./clients";
import { Logger } from "tslog";
import { getDeployPath } from "./utils/fs";
import { delay } from "./utils/promises";
import { OptionValues } from "commander";
import { VectisContractsAddrs } from "./interfaces";
import { CosmosMsgForEmpty } from "./interfaces/Proxy.types";

export async function test(network: Chains, opts: OptionValues) {
    const logger = new Logger();
    const uploadedContracts: VectisContractsAddrs = await import(getDeployPath(network));
    const client = await CWClient.connectHostWithAccount("admin", network);
    const factoryClient = new FactoryClient(client, client.sender, uploadedContracts.Factory);

    let res = await factoryClient.createWalletWebAuthn();
    let proxyAddr = CWClient.getEventAttrValue(res, "wasm-vectis.proxy.v1", "_contract_address");
    logger.info("proxy Addr: ", proxyAddr);

    let proxyClient = new ProxyClient(client, client.sender, proxyAddr);
    let info = await proxyClient.info();
    logger.info("\n\nproxy info: ", info);

    // Check current balance on the proxy
    let currentBalance = await proxyClient.client.getBalance(proxyAddr, "ujunox");
    logger.info("\n\ncurrentBalance: ", currentBalance);

    // Relay sending from the proxy
    let bankSendMsg: CosmosMsgForEmpty = {
        bank: { send: { amount: [{ denom: "ujunox", amount: "10" }], to_address: proxyClient.sender } },
    };
    let txRes = await proxyClient.relayTxFromSelf([bankSendMsg]);
    let action = CWClient.getEventAttrValue(txRes, "wasm-vectis.proxy.v1", "action");
    let relay = CWClient.getEventAttrValue(txRes, "wasm-vectis.proxy.v1", "msgs");
    logger.info("\n\nresult action: ", action, "\nresult msgs: ", relay);

    // wait for block
    await delay(8000);

    // Check current balance on the proxy
    let afterBalance = await proxyClient.client.getBalance(proxyAddr, "ujunox");
    logger.info("\n\nafterBalance: ", afterBalance);
}
