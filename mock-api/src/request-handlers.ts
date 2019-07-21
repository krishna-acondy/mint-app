import {Request, Response} from 'express';

export function authenticate(request: Request, response: Response) {
  const pin = request.body['pin'];
  if (pin === 1111) {
    return response.contentType('application/json')
      .status(200)
      .json({currentBalance: 200});
  } else {
    return response.contentType('application/json')
      .status(403)
      .json({error: 'Invalid PIN'});
  }
}