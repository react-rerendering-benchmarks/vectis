use crate::{
    authenticator::{Authenticator, AuthenticatorType},
    entity::Entity,
    ProxyAddrErr, RelayTxError,
};
use cosmwasm_schema::cw_serde;
use cosmwasm_std::{Addr, Binary, CanonicalAddr, Coin, CosmosMsg};
use cw_utils::Threshold;

/// The main controller of the account
pub type Controller = Entity;

/// Struct for representing a CosmosEOA as an authenticator
#[cw_serde]
pub struct CosmosEOA {
    pub addr: CanonicalAddr,
}

impl CosmosEOA {
    /// Set new controller address
    pub fn set_address(&mut self, address: CanonicalAddr) {
        self.addr = address;
    }

    /// Ensure provided address is different from current.
    pub fn ensure_addresses_are_not_equal(
        &self,
        address: &CanonicalAddr,
    ) -> Result<(), ProxyAddrErr> {
        if self.addr.ne(address) {
            Ok(())
        } else {
            Err(ProxyAddrErr::AddressesAreEqual {})
        }
    }
}

impl Controller {
    /// Increase nonce by 1
    pub fn increment_nonce(&mut self) {
        self.nonce += 1;
    }

    /// Ensure nonces are equal
    pub fn ensure_nonces_are_equal(&self, nonce: &Nonce) -> Result<(), RelayTxError> {
        if self.nonce.eq(nonce) {
            Ok(())
        } else {
            Err(RelayTxError::NoncesAreNotEqual {})
        }
    }

    /// Returns the AuthenicatorType
    pub fn auth_type(&self) -> &AuthenticatorType {
        &self.auth.ty()
    }

    /// Returns the Authenicator
    pub fn authenticator(&self) -> &Authenticator {
        &self.auth
    }
}

/// Controller nonce
pub type Nonce = u64;

/// Representation of the wallet address in both form used in migration
#[cw_serde]
pub enum WalletAddr {
    /// CanonicalAddr
    Canonical(CanonicalAddr),
    /// Addr
    Addr(Addr),
}

#[cw_serde]
pub struct WalletInfo {
    pub controller: Controller,
    pub deployer: Addr,
    pub version: cw2::ContractVersion,
    pub code_id: u64,
    pub guardians: Vec<Addr>,
    pub relayers: Vec<Addr>,
    pub is_frozen: bool,
    pub created_at: u64,
    pub nonce: Nonce,
    pub multisig_address: Option<Addr>,
    pub multisig_threshold: Option<Threshold>,
    pub label: String,
}

#[cw_serde]
pub struct RelayTransaction {
    /// Message to verify,
    /// Encoding depends on the authenticator,
    /// but must contain the actual Vec<CosmosMsg> to execute
    /// e.g. the structure of CosmosRelayedTxMsg or WebauthnRelayedTxMsg
    pub message: Binary,
    /// Serialized signature (message + nonce).
    /// If authenticator is CosmosEOA: 64 bytes - secp256k1 verification scheme
    /// See `AuthenticatorType` for more info
    pub signature: Binary,
}

/// Data to be signed by the controlling entity
#[cw_serde]
pub struct VectisRelayedTx {
    /// messages to be executed on the entity's behalf
    pub messages: Vec<CosmosMsg>,
    /// nonce of the entity for relayed tx
    pub nonce: Nonce,
    /// fee for the relaying party
    pub sponsor_fee: Option<Coin>,
}

/// The struct that RelayTransaction.message should decode to
/// for CosmosEOA
#[cw_serde]
pub struct CosmosRelayedTxMsg {
    pub signed_data: VectisRelayedTx,
}

/// The struct that RelayTransaction.message should decode to
/// for Webauthn
#[cw_serde]
pub struct WebauthnRelayedTxMsg {
    /// the data to be signed, aka, the challenge
    pub signed_data: VectisRelayedTx,
    pub auth_data: Binary,
    pub client_data: Binary,
}

#[cw_serde]
pub struct PluginListResponse {
    pub exec_plugins: Vec<Addr>,
    pub query_plugins: Vec<Addr>,
    pub pre_tx_plugins: Vec<Addr>,
    pub multisig_override: Option<Addr>,
}

/// Permission of the plugin on the proxy
#[cw_serde]
pub enum PluginPermissions {
    /// Can Exec through Proxy
    Exec,
    /// Addr can be queried through proxy
    Query(String),
    /// Is used to check tx before execution
    PreTxCheck,
    /// Is a multisig contract, ignore controller
    MultiSigOverride,
}
