export interface TokenData {
  token_type: string;
  expires_in?: number;
  access_token: string;
  refresh_token?: string;
}
export interface User {
  sub?: string;
  name?: string;
  preferred_username?: string;
  email?: string;
  email_verified?: boolean;
  profile?: string;
  locale?: string;
  zoneinfo?: string;
  updated_at?: string;
  uuid?: string;
  uid?: string;
  field_name?: string;
  field_surname?: string;
  field_address?: FieldAddress;
  field_telephone?: string;
  user_picture?: string;
  preferred_langcode?: string;
  roles?: string[];
}

export interface FieldAddress {
  langcode?: string;
  country_code?: string;
  administrative_area?: string;
  locality?: string;
  dependent_locality?: null;
  postal_code?: string;
  sorting_code?: null;
  address_line1?: string;
  address_line2?: null;
  organization?: null;
  given_name?: null;
  additional_name?: null;
  family_name?: null;
}

export interface UserSession {
  user: User;
  token: TokenData;
}
