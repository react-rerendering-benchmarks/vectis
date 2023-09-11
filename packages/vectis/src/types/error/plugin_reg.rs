use super::*;

#[derive(Error, Debug, PartialEq)]
pub enum PluginRegError {
    #[error("{0}")]
    Std(#[from] StdError),
    #[error("{0}")]
    DeployerItemsQueryError(#[from] DeployerItemsQueryError),
    #[error("Unauthorized")]
    Unauthorized,
    #[error("Plugin Approval Committee Not Found")]
    PluginCommitteeNotFound,
    #[error("Checksum Verification Failed")]
    ChecksumVerificationFailed,
    #[error("Insufficient Fee Amount: Expected: {0}, Got: {1}")]
    InsufficientFee(Uint128, Uint128),
    #[error("Plugin Version Not Found for {0}")]
    PluginVersionNotFound(String),
    #[error("Plugin Version already registered {0}")]
    VersionExists(String),
    #[error("Incorrect Fees: Expects {0}")]
    IncorrectFees(Coin),
    #[error("Plugin Not found on registry {0}")]
    PluginNotFoundOnRegistry(u64),
    #[error("Unsupported Wallet")]
    UnsupportedWallet,
    #[error("Fees should be only 1 coin")]
    TooManyCoins,
    #[error("Too many installed plugins")]
    TooManyInstalledPlugins,
    #[error("Expired")]
    Expired,
    #[error("Not a subscriber")]
    NotASubscriber,
    #[error("Plugin Not installed")]
    NotInstalled,
    #[error("Invalid Checksum")]
    InvalidChecksum,
    #[error("Tier Exists")]
    TierExists,
}
