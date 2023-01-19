/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { UsersModel } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type UsersModelUpdateFormInputValues = {
    user_name?: string;
    email?: string;
    password?: string;
    first_name?: string;
    last_name?: string;
    user_creation_date?: string;
    dahublink?: string;
    saved_posts?: string[];
    hide_posts?: string[];
};
export declare type UsersModelUpdateFormValidationValues = {
    user_name?: ValidationFunction<string>;
    email?: ValidationFunction<string>;
    password?: ValidationFunction<string>;
    first_name?: ValidationFunction<string>;
    last_name?: ValidationFunction<string>;
    user_creation_date?: ValidationFunction<string>;
    dahublink?: ValidationFunction<string>;
    saved_posts?: ValidationFunction<string>;
    hide_posts?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type UsersModelUpdateFormOverridesProps = {
    UsersModelUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    user_name?: PrimitiveOverrideProps<TextFieldProps>;
    email?: PrimitiveOverrideProps<TextFieldProps>;
    password?: PrimitiveOverrideProps<TextFieldProps>;
    first_name?: PrimitiveOverrideProps<TextFieldProps>;
    last_name?: PrimitiveOverrideProps<TextFieldProps>;
    user_creation_date?: PrimitiveOverrideProps<TextFieldProps>;
    dahublink?: PrimitiveOverrideProps<TextFieldProps>;
    saved_posts?: PrimitiveOverrideProps<TextFieldProps>;
    hide_posts?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type UsersModelUpdateFormProps = React.PropsWithChildren<{
    overrides?: UsersModelUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    usersModel?: UsersModel;
    onSubmit?: (fields: UsersModelUpdateFormInputValues) => UsersModelUpdateFormInputValues;
    onSuccess?: (fields: UsersModelUpdateFormInputValues) => void;
    onError?: (fields: UsersModelUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: UsersModelUpdateFormInputValues) => UsersModelUpdateFormInputValues;
    onValidate?: UsersModelUpdateFormValidationValues;
} & React.CSSProperties>;
export default function UsersModelUpdateForm(props: UsersModelUpdateFormProps): React.ReactElement;
