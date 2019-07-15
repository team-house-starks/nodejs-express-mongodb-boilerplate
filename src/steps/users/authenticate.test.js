// Externals
import validator from 'validator';

// Internals
import authenticate from './authenticate';
import {
  AUTHENTICATE_REQUEST,
  AUTHENTICATE_RESPONSE,
  AUTHENTICATION_FAILURE,
  SUCCESS,
  VALIDATIONS_ERROR
} from '../../constants';

describe('Tests suite for authenticate step', () => {

  let context = null;

  beforeEach(() => {
    context = {};
    context[AUTHENTICATE_REQUEST] = {
      email: 'gwinton0@unc.edu',
      password: 'WpwWZq60Qb5S'
    };
  });

  it('Should return VALIDATIONS_ERROR JSON if email or password not passed in', async () => {
    context[AUTHENTICATE_REQUEST] = {};
    await authenticate(context);
    const response = context[AUTHENTICATE_RESPONSE];
    expect(response.status).to.eq(VALIDATIONS_ERROR);
  });

  it('Should return AUTHENTICATION_FAILURE JSON if email or password is wrong', async () => {
    context[AUTHENTICATE_REQUEST].email = '1gwinton0@unc.edu';
    await authenticate(context);
    const response = context[AUTHENTICATE_RESPONSE];
    expect(response.status).to.eq(AUTHENTICATION_FAILURE);
  });

  it('Should return SUCCESS JSON with JWT token if authenticated', async () => {
    await authenticate(context);
    const response = context[AUTHENTICATE_RESPONSE];
    expect(response).to.not.undefined;
    expect(response.status).to.eq(SUCCESS);
    expect(validator.isJWT(response.token)).to.eq(true);
  });


});
