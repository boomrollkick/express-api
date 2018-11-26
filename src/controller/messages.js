import { Router } from 'express';
import * as textdata from '../data/lorem.json';

export default() => {
  let api = Router();
  
  api.get('/', (req, res) => {
    let dataout = JSON.stringify(textdata);
      res.json(textdata);
  });

  return api;
}
