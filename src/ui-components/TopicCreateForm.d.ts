/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type TopicCreateFormInputValues = {
    name?: string;
    slug?: string;
    description?: string;
    content?: string;
    createdAt?: string;
};
export declare type TopicCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    slug?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
    content?: ValidationFunction<string>;
    createdAt?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TopicCreateFormOverridesProps = {
    TopicCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    slug?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
    content?: PrimitiveOverrideProps<TextFieldProps>;
    createdAt?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type TopicCreateFormProps = React.PropsWithChildren<{
    overrides?: TopicCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: TopicCreateFormInputValues) => TopicCreateFormInputValues;
    onSuccess?: (fields: TopicCreateFormInputValues) => void;
    onError?: (fields: TopicCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: TopicCreateFormInputValues) => TopicCreateFormInputValues;
    onValidate?: TopicCreateFormValidationValues;
} & React.CSSProperties>;
export default function TopicCreateForm(props: TopicCreateFormProps): React.ReactElement;
