import got from 'got';

const dataURL = "https://dev-srjc-cs55-13-fall-2023.pantheonsite.io/wp-json/twentytwentytwo-child/v1/product";

export async function getIDs(){
  let jsonString;
  try {
    jsonString = await got(dataURL);
  } catch(error) {
    jsonString.body = [];
    console.log(error);
  }
  const jsonObject = JSON.parse(jsonString.body);
  return jsonObject.map(item => {
      return {
        params: {
          id: item.ID.toString()
        }
      }
    }
  );
}

export async function getList(){
  let jsonString;
  try {
    jsonString = await got(dataURL);
  } catch(error) {
    jsonString.body = [];
    console.log(error);
  }
  const jsonObject = JSON.parse(jsonString.body);
  jsonObject.sort(function(x, y) {
      return x.post_title.localeCompare(y.post_title);
    }                 
  );

  return jsonObject.map(item => {
      return {
        id: item.ID.toString(),
        name: item.post_title
      }
    }
  );
}

export async function getDynamicData(idRequest){
  let jsonString;
  try {
    jsonString = await got(dataURL);
  } catch(error) {
    jsonString.body = [];
    console.log(error);
  }
  const jsonObject = JSON.parse(jsonString.body);
  console.log(jsonObject);

  jsonObject.forEach(
    function(item) {
      // reformat string contained in delimited acf field data, add curlies and quotes
      let x = '{"' + item.acf_fields + '"}';
      // https://www.w3schools.com/jsref/jsref_replace.asp
      // x = x.replace(/,/g,'","');
      x = x.replaceAll(',','","');
      // x = x.replace(/:/g,'":"');
      x = x.replaceAll(':','":"');
      // now that we have a string that is in valid json format, convert it to json
      // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse
      let y = JSON.parse(x);
      console.log(y);
      //console.log(y.first_name);
      item.acf_fields = y;
    }
  );

  const objectFilter = jsonObject.filter( object => {
      return object.ID.toString() === idRequest;
    }    
  );

  let objectReturn;
  if(objectFilter.length > 0) {
    objectReturn = objectFilter[0];
  }
  else {
    objectReturn = {};
  }

  return objectReturn;
}