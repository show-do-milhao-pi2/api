import { FindOperator } from "typeorm";

export interface IFilterUserRequest {
    name?: any;
    nickname?: any;

}

export interface IFilterUserParamsRequest {
    name?: FindOperator<string>;
    nickname?: string;

}