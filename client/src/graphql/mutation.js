import { gql } from '@apollo/client';

export const SIGNUP_MUTATION = gql`
  mutation SignupMutation(
    $email: String!
    $password: String!
    $confirmPassword: String!
  ) {
    signup(
      email: $email
      password: $password
      confirmPassword: $confirmPassword
    ) {
      token
    }
  }
`;

export const LOGIN_MUTATION = gql`
  mutation LoginMutation(
    $email: String!
    $password: String!
  ) {
    login(email: $email, password: $password) {
      token
    }
  }
`;