import got from 'got';

const dataURL = "https://dev-srjc-cs55-13-fall-2023.pantheonsite.io/wp-json/twentytwentytwo-child/v1/contact";

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