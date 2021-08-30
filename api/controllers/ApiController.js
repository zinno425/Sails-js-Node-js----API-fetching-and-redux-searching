/**
 * ApiController
 *
 * @description :: Server-side logic for managing apis
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
const request = require("request");
module.exports = {
    index: async function (req, res) {
        try {
            request('https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a',async function(req, respond,body) {
       var data = JSON.parse(body);
      return res.view('cocktail/index',{
          data : data.drinks
      })
    })
        } catch (error) {
            console.log(error);
        }
    },

detail: async function(req, res) {
    
    try {
console.log('re.',req.params);
console.log('query',req.query);
console.log('query',req.param);


        const id = req.param('id')
        
        request('https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a',async function(req, respond,body) {
            var data = JSON.parse(body);
            for (i in data.drinks) {
                if (data.drinks[i].idDrink === id) {
                    var details = data.drinks[i];
                    return res.view('cocktail/details',{
                        data : details
                    })
                }
            }
             });
    } catch (error) {
        console.log(error);
    }
}


};
