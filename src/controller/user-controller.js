import {authenticateStep} from '../steps';
import {AUTHENTICATE_REQUEST, AUTHENTICATE_RESPONSE} from "../constants";

export default class UserController {

  constructor() {
    this.context = {};
  }

  async authenticateUser(request) {
    this.context[AUTHENTICATE_REQUEST] = request;
    await authenticateStep(this.context);
    return this.context[AUTHENTICATE_RESPONSE];
  }

}
