"use strict";
var csv = require('jquery-csv');
var FileReader = require('filereader')
  , fileReader = new FileReader()
  ;

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

  
 
   
   var presentation = [];
   var people = [];
   var reagents = [];

   var presentationURL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vSMqDeQj_YXSyMoVxK_wk1Iw3fyvRDHFvEfXJJzozvdLT17iCS6Yg29vts86fWcmdbv5rfpV0WcDcTo/pub?gid=1810366854&single=true&output=csv";
   var peopleURL = "";
   var reagentsURL = "";
   
   
   // Create function to add updated datasets
   var addData = (fileName, urlData) => {

    var aLink = document.createElement('a');
    var evt = document.createEvent("HTMLEvents");
    evt.initEvent("click");
    aLink.download = fileName;
    aLink.href = urlData;
    aLink.click(evt);
}

   // Create function to create datasets
   var addDataSet = (URL) => {
  
       let URL = URL;
       let csvFile = File
       let data = $.csv.toObjects(csvFile):
       
       tempData.map((item,idx) => {
         
         if (item.completed >= 15){
           item.bgcolor = colors.green;
           pieAmount[0] = pieAmount[0]+20;
           barColor[0] =colors.green;
           labelColor[idx] =colors.green;
           hoverColor[0] = colorsHover.green;
         }; 
         
         if (item.completed >= 10  && item.completed< 15){
           item.bgcolor = colors.yellow;
           pieAmount[1] = pieAmount[1]+20;
           barColor[1] =colors.yellow;
           labelColor[idx] =colors.yellow;
           hoverColor[1] = colorsHover.yellow;
         }; 
         
         if (item.completed >= 5  && item.completed< 10){
           item.bgcolor = colors.orange;
           pieAmount[2] = pieAmount[2]+20;
           barColor[2] =colors.orange;
           labelColor[idx] =colors.orange;
           hoverColor[2] = colorsHover.orange;
         };
         
         if (item.completed >= 0  && item.completed< 5){
           item.bgcolor = colors.red;
           pieAmount[3] = pieAmount[3]+20;
           barColor[3] =colors.red;
           labelColor[idx] =colors.red;
           hoverColor[3] = colorsHover.red;
         };
       });
       
       articles.push({title: ArticleTitle, header: Header, subHeader: SubHeader, 
                      author: Author, dateCreated: DateCreated, category: Category, typeOf: TypeOf, id: ID,
                      score: score, TTP: TTP, difficulty: Difficulty,
                      reach: Exposure, cost: Cost, profit: Profit,
                      data: tempData, datastuff: {
             labels: chartLabels,
             datasets: [
               {
                 data: pieAmount,
                 backgroundColor: barColor,
                 borderColor: barColor,
                 hoverBackgroundColor: hoverColor,
                 borderWidth: 0.4,
                 weight: 0.1,
                 
               },
             ],
           },
            options: {
               cutout: "90%",
               responsive: true,
               maintainAspectRatio: false,
               centerText: {
                       color: "black",
                       value: score,
                       fontSizeAdjust: 1 // increase font size 20% based on default font size
                     },
               
               plugins: {
                   legend: {
                       display: false,
                       
                   },
                 tooltip: {
                   enabled: false,
                    callbacks: {
                     label: function(context) { 
                       var label = chartLabels[context.dataIndex];
                       return label;
                                              },
                               }
                           },
                         },
                  
               
                     
                     },
                           
     });
    
};

// Add all articles here   
downloadFile('Test.csv', 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSMqDeQj_YXSyMoVxK_wk1Iw3fyvRDHFvEfXJJzozvdLT17iCS6Yg29vts86fWcmdbv5rfpV0WcDcTo/pub?gid=1810366854&single=true&output=csv');




   
   var articleListModel = function() {
      const articlesCopy = articles;
      return articlesCopy;
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


   var articleModels =  {
      articleListModel: articleListModel,
      specificArticleModel: specificArticleModel,

      
   };

   if( typeof exports !== 'undefined' ) {
      // We're being loaded by the Node.js module loader ('require') so we use its
      // conventions of returning the object in exports.
      exports.articleModels = articleModels;
   } else {
      // We're not in the Note.js module loader so we assume we're being loaded
      // by the browser into the DOM.
      window.articleModels = articleModels;
   }
   
})();
