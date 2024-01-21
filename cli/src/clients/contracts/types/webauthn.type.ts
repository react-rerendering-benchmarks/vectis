/**
* This file was automatically generated by @cosmwasm/ts-codegen@0.35.3.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/

export interface InstantiateMsg {
  [k: string]: unknown;
}
export type ExecuteMsg = AuthenticatorTraitExecMsg | ExecMsg;
export type AuthenticatorTraitExecMsg = string;
export type ExecMsg = string;
export type QueryMsg = AuthenticatorTraitQueryMsg | QueryMsg1;
export type AuthenticatorTraitQueryMsg = {
  authenticate: {
    controller_data: number[];
    metadata: number[][];
    signature: number[];
    signed_data: number[];
    [k: string]: unknown;
  };
} | {
  contract_version: {
    [k: string]: unknown;
  };
};
export type QueryMsg1 = string;
export type Boolean = boolean;
export interface ContractVersion {
  contract: string;
  version: string;
}