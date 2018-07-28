"use strict";

var request = require("request").defaults({ encoding: null });
var fs = require("fs");

//Parameter Sent by the User
var requestType = process.argv.slice(2).toString();

// Replace <Subscription Key> with your valid subscription key.
const subscriptionKey = "<Subscription Key>";

const uriBaseGenerateThumbnail =
  "<Your Endpoint>/generateThumbnail";

const uriBaseAnalyzeImage =
  "<Your Endpoint>/analyze";

const uriBaseOCR =
  "<Your Endpoint>/ocr";

// Image URL For Analyze Image and Generate a Thumbnail
const imageUrl =
  "https://cokgezenadam.com/wp-content/uploads/2014/07/k%C4%B1z-kulesi.jpg";

//Image URL For Extract printed text (OCR)
const ocrImageUrl =
  "http://siirler.teokul.com/wp-content/uploads/2015/11/istiklal-marsi-2-kita-acik-yazili.png";

// Generate a Thumbnail Image Request parameters.
const paramsThumbnail = {
  width: "250",
  height: "250",
  smartCropping: "true"
};

// Analyze Image Request parameters.
const paramsAnalyzeImage = {
  visualFeatures: "Categories,Description,Color",
  details: "",
  language: "en"
};

// OCR Request parameters.
const paramsOCR = {
  language: "unk",
  detectOrientation: "true"
};

const options = {
  uri: null,
  qs: null,
  body: null,
  headers: {
    "Content-Type": "application/json",
    "Ocp-Apim-Subscription-Key": subscriptionKey
  }
};

if (requestType == "thumbnail") {
  options.uri = uriBaseGenerateThumbnail;
  options.qs = paramsThumbnail;
  (options.body = '{"url": ' + '"' + imageUrl + '"}'),
    requestPostService(options);
} else if (requestType == "analyze") {
  options.qs = paramsAnalyzeImage;
  options.uri = uriBaseAnalyzeImage;
  (options.body = '{"url": ' + '"' + imageUrl + '"}'),
    requestPostService(options);
} else if (requestType == "OCR") {
  options.qs = paramsOCR;
  options.uri = uriBaseOCR;
  (options.body = '{"url": ' + '"' + ocrImageUrl + '"}'),
    requestPostService(options);
}

function requestPostService(optionsType) {
  request.post(optionsType, (error, response, body) => {
    if (error) {
      console.log("Error: ", error);
      return;
    }

    if (requestType == "thumbnail") {
      fs.writeFile("./image.png", body, function(err) {
        if (err) throw err;
      });
    } else {
      let jsonResponse = JSON.stringify(JSON.parse(body), null, "  ");
      console.log("JSON Response\n");
      console.log(jsonResponse);
    }
  });
}
