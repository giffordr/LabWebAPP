"use strict";


/* jshint node: true */
/*
 * Model data musicmakingcents blog.
 * This module returns an object called articleModels with the following functions:
 *
 * articleModels.articleListModel - A function that returns the list of users on the system. The
 * list is returned as an array of objects containing:
 *   _id  (string) - The ID of the user.
 *   first_name (string) - The first name of the user.
 *   last_name (string) - The last name of the user.
 *   location (string) - The location of the user.
 *   description (string) - A brief user description.
 *   occupation (string) - The occupation of the user.
 *
 * articleModels.Model - A function that returns the info of the specified user. Called
 * with an user ID (id), the function returns n object containing:
 *   _id  (string) - The ID of the user.
 *   first_name (string) - The first name of the user.
 *   last_name (string) - The last name of the user.
 *   location (string) - The location of the user.
 *   description (string) - A brief user description.
 *   occupation (string) - The occupation of the user.
 */

 

(function() {
   

   // Instantiate 'articles' list.

  
 
   
   var presentation = '';
   var people = '';
   var reagents = '';

   var presentationURL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vSMqDeQj_YXSyMoVxK_wk1Iw3fyvRDHFvEfXJJzozvdLT17iCS6Yg29vts86fWcmdbv5rfpV0WcDcTo/pub?gid=1810366854&single=true&output=csv";
   var peopleURL = "";
   var reagentsURL = "";

   const CSVToArray = (data, delimiter = ',', omitFirstRow = false) =>
  data
    .slice(omitFirstRow ? data.indexOf('\n') + 1 : 0)
    .split('\n')
    .map(v => v.split(delimiter));

   // Fetch data from published CSV file
   var downloadCsv = async (url) => {
    
    try {
        const target = url; //file
        //const target = `https://SOME_DOMAIN.com/api/data/log_csv?$"queryString"`; //target can also be api with req.query
        
        const res = await fetch(target, {
            method: 'get',
            headers: {
                'content-type': 'text/csv;charset=UTF-8',
                //'Authorization': //in case you need authorisation
            }
        });

        if (res.status === 200) {

            const data = await res.text();
            //console.log(data);
            let dataOut = CSVToArray(data);
          
            return dataOut;
            
            

        } else {
            console.log(`Error code ${res.status}`);
        }
    } catch (err) {
        console.log(err)
    }
}
   
   // Download published CSV File
   var addData = (fileName, urlData) => {

    var aLink = document.createElement('a');
    var evt = document.createEvent("HTMLEvents");
    evt.initEvent("click");
    aLink.download = fileName;
    aLink.href = urlData;
    aLink.click(evt);
}

   // Create function to create datasets
   var addDataSet = (url) => {
  
     
       //let data = $.csv.toObjects(csvFile);
       
       
    
};
window.loaded = false;
// Add all articles here   
//addData('Test.csv', 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSMqDeQj_YXSyMoVxK_wk1Iw3fyvRDHFvEfXJJzozvdLT17iCS6Yg29vts86fWcmdbv5rfpV0WcDcTo/pub?gid=1810366854&single=true&output=csv');
presentation = downloadCsv('https://docs.google.com/spreadsheets/d/e/2PACX-1vSMqDeQj_YXSyMoVxK_wk1Iw3fyvRDHFvEfXJJzozvdLT17iCS6Yg29vts86fWcmdbv5rfpV0WcDcTo/pub?gid=1810366854&single=true&output=csv');




   var presentationModel = function() {
                     const presentationCopy = presentation;
                     return presentationCopy;
                  };
                     
                     
   

   var userModel = function(userId) {
      for (var i = 0; i < users.length; i++) {
         if (users[i]._id === userId) {
            return users[i];
         }
      }
      return null;
   };

   var photoOfUserModel = function(userId) {
      return photos.filter(function (photo) {
         return (photo.user_id === userId);
      });
   };
   
   var specificArticleModel = function(articleTitle) {
      return articles.filter(function (article) {
         
         let newArticleTitle = article.title.replace(/[.,\/#$%\?^&\*;{}=\-_`~()]/g,"");
      
         return (newArticleTitle === articleTitle);
      });
   };
   
   var kosikModels =  {
                     presentationModel: presentationModel,
                     //specificArticleModel: specificArticleModel,
   
         
                   };

   if( typeof exports !== 'undefined' ) {
         // We're being loaded by the Node.js module loader ('require') so we use its
         // conventions of returning the object in exports.
         exports.kosikModels = kosikModels;
      } else {
         // We're not in the Note.js module loader so we assume we're being loaded
         // by the browser into the DOM.
         window.kosikModels = kosikModels;
      }

  

   
   
})();
