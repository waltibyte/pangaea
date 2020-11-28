import { gql } from '@apollo/client';

// Query for retrieving currency
export const GET_CURRENCY = gql`
{
    currency    
}
`;

// Query for retrieving products
export const GET_PRODUCTS = gql`
query products($takenCurrency: Currency!) {
    products {
        id
        title
        image_url
        price(currency: $takenCurrency)
    }
}
`;