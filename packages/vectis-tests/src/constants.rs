use cosmwasm_std::{coin, Binary, CanonicalAddr};
use vectis_wallet::types::{
    plugin::{PluginCodeData, PluginMetadataData},
    plugin_registry::TierDetails,
};

// Plugins for testing
// (code_id, hash, registry_id)
pub struct TestPlugins {
    pub pre_tx: (u64, &'static str, u64),
    pub post_tx: (u64, &'static str, u64),
    pub exec: (u64, &'static str, u64),
}

pub fn test_plugin_code_data(code_id: u64, code_hash: &'static str) -> PluginCodeData {
    PluginCodeData {
        latest_contract_version: VECTIS_VERSION.into(),
        new_code_id: code_id,
        new_code_hash: code_hash.into(),
    }
}

pub fn test_plugin_metadata() -> PluginMetadataData {
    PluginMetadataData {
        creator: VALID_OSMO_ADDR.into(),
        display_name: "Some-display-name".into(),
        ipfs_hash: "Some-ipfs_hash".into(),
    }
}

pub fn tier_0() -> TierDetails {
    TierDetails {
        max_plugins: 2,
        duration: None,
        fee: coin(0u128, DENOM),
    }
}

pub fn tier_1() -> TierDetails {
    TierDetails {
        max_plugins: 12,
        duration: Some(cw_utils::HOUR),
        fee: coin(TIER_1_FEE, DENOM),
    }
}

pub fn canonical_valid_osmo() -> CanonicalAddr {
    CanonicalAddr(Binary::from(
        hex::decode(HEX_CANONICAL_VALID_OSMO_ADDR)
            .unwrap()
            .as_slice(),
    ))
}

pub const VALID_OSMO_ADDR: &str = "osmo1pkf6nuq8whw5ta5537c3uqrep0yzcwkrw82n95";
pub const HEX_CANONICAL_VALID_OSMO_ADDR: &str = "0d93a9f00775dd45f6948fb11e00790bc82c3ac3";

/// Version of vectis
pub const VECTIS_VERSION: &str = "v1.0.0-rc1";
/// the proxy code_hash for this vectis version
pub const PROXY_CODE_HASH: &str =
    "7f4223db17bbc06ecfa8b3b9384c3ed52e424f8605874c5cec5d175164a7e035";
pub const PLUGIN_EXEC_HASH: &str =
    "55d76db604a5a191f94877273255503bd563263fbebc3cf83141010d5fa16c92";
pub const POST_TX_HASH: &str = "f6eb9e54070ba0cd14933a12bd122267ae318b9aefdd0e48b7aec51d90d29c37";
pub const PRE_TX_HASH: &str = "96c9f0f98163a8946d4d4f041a0c3125649513c1b62ac85836927e7e71b932b0";

pub const CW4_CODE_PATH: &str = "./artifacts/cw4_group.wasm";
pub const CW3FLEX_CODE_PATH: &str = "./artifacts/cw3_flex_multisig.wasm";
pub const FACTORY_CODE_PATH: &str = "./../../artifacts/vectis_factory.wasm";
pub const PROXY_CODE_PATH: &str = "../../artifacts/vectis_proxy.wasm";
pub const REGISTRY_CODE_PATH: &str = "./../../artifacts/vectis_plugin_registry.wasm";
pub const AUTH_CODE_PATH: &str = "./../../artifacts/vectis_webauthn_authenticator.wasm";
pub const PRE_TX_CODE_PATH: &str = "./../../artifacts/test_vectis_pre_tx.wasm";
pub const POST_TX_CODE_PATH: &str = "./../../artifacts/test_vectis_post_tx_exec.wasm";
pub const PLUGIN_EXEC_CODE_PATH: &str = "./../../artifacts/test_vectis_plugin_exec.wasm";

pub const DENOM: &str = "uosmo";
pub const WALLET_FEE: u128 = 10u128;
pub const REGISTRY_FEE: u128 = 11u128;
pub const INIT_BALANCE: u128 = 12u128;
pub const TIER_1_FEE: u128 = 5u128;

// Indexes for test_env
pub const IDEPLOYER: usize = 0;
pub const ICOMMITTEE: usize = 1;
pub const IRELAYER: usize = 2;

// storage const
pub const IBC_CHAIN_NAME: &str = "ibc-chain-1";
pub const IBC_CHAIN_CONN: &str = "connection-1";
pub const NON_IBC_CHAIN_NAME: &str = "non-ibc-chain-1";
pub const NON_IBC_CHAIN_CONN: &str = "some-url";
pub const NON_IBC_CHAIN_ADDR: &str = "0x123";
