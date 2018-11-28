import { Router } from 'express';
import * as textdata from '../data/lorem.json';
import * as peopledata from '../data/people.json';

export default() => {
  let api = Router();
  
  api.get('/', (req, res) => {
    
 let count = req.query.count;
    var messageObject = {};
 
      for (let i = 0; i < 50; i++) {
        var randomMessage = Math.round(Math.random()*47);
        var randomPerson = Math.round(Math.random()*20);
         messageObject[i] =  {};
         messageObject[i]['author'] = {};
         messageObject[i]['text'] = textdata[randomMessage].text;
         messageObject[i]['author']['name'] =  peopledata[randomPerson].name;
         messageObject[i]['author']['photoUrl'] = '/assets/'+ randomPerson + '.png';
         messageObject[i]['updated'] = Date.now() - count*1000*60*60*24 - i*1000*5*60;
      }
    
      res.json(messageObject);
  });

  return api;
}
