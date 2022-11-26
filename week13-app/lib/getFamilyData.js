import got from 'got';

const dataURL = "https://dev-srjc-cs55-13-fall-2023.pantheonsite.io/wp-json/twentytwentytwo-child/v1/latest-posts/1";

export async function getIDs(){
  //const fspath = path.join(getData, 'data.json');
  //const jsonStringData = fs.readFileSync(fspath, 'utf8');
  let jsonString;
  try {
    jsonString = await got(dataURL);
    console.log(jsonString.body);
  } catch(error) {
    jsonString.body = [];
    console.log(error);
  }
  const jsonObject = JSON.parse(jsonString.body);
  const returnData = jsonObject.map(item => {
      return {
        params: {
          id: item.ID.toString()
        }
      }
    }
  );
  return returnData;
}

export async function getList(){
  let jsonString;
  try {
    jsonString = await got(dataURL);
    console.log(jsonString.body);
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

export async function getOneData(idRequest){
  let jsonString;
  try {
    jsonString = await got(dataURL);
    console.log(jsonString.body);
  } catch(error) {
    jsonString.body = [];
    console.log(error);
  }
  const jsonObject = JSON.parse(jsonString.body);
  const objectFilter = jsonObject.filter( object => {
      return object.ID.toString() === idRequest;
    }    
  );

  let objectReturn;
  if(objectFilter.length > 0) {
    objectReturn = objectFilter[0];
    const objectFilter2 = json2Object.filter(object => {
      return object.related_persons.toString() === idRequest;
    }
  );
  if (objectFilter2.length > 0) {
    const objectFilter3 = jsonObject.filter(obj => {
        return objectFilter2[0].related_persons.includes( object.id );
      }
    );

    if (objectFilter3.length > 0) {
      objectReturn.related = objectFilter3;
    }
  }
  }
  else {
    objectReturn = {};
  }

  return objectReturn;
}