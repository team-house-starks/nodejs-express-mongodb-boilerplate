// Externals
import validator from 'validator';
import jwt from 'jsonwebtoken';

// Internals
import {usersDao} from '../../application-context';
import config from '../../config';
import {
  AUTHENTICATE_REQUEST,
  AUTHENTICATE_RESPONSE, AUTHENTICATION_FAILURE,
  FAILURE_RESPONSE,
  SUCCESS,
  VALIDATIONS_ERROR
} from "../../constants";

export default async (context) => {
  let response;
  const {
    email = '',
    password = ''
  } = context[AUTHENTICATE_REQUEST];
  if (!validator.isEmail(email) || validator.isEmpty(password)) {
    response = {
      status: VALIDATIONS_ERROR
    }
  } else {
    const user = await usersDao.getUserByEmailAndPassword(email, password);
    if (!user) {
      response = {
        status: AUTHENTICATION_FAILURE
      }
    } else {
      const token = jwt.sign({userId: user._id}, config.jwtSecret);
      response = {
        status: SUCCESS,
        token
      }
    }
  }
  context[AUTHENTICATE_RESPONSE] = response;
}
