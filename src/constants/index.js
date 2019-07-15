export const SUCCESS = 'SUCCESS';
export const FAILURE = 'FAILURE';
export const API_ERROR = 'API_ERROR';
export const VALIDATIONS_ERROR = 'VALIDATIONS_ERROR';
export const AUTHENTICATION_FAILURE = 'AUTHENTICATION_FAILURE';

export const FAILURE_RESPONSE = {
  status: FAILURE,
  errorCode: API_ERROR
};

// Requests and responses context keys
export const AUTHENTICATE_REQUEST = 'authenticate-request';
export const AUTHENTICATE_RESPONSE = 'authenticate-response';
