import fs from 'fs';
import path from 'path';

const getData = path.join(process.cwd(), 'jsondata');

export function getIDs(){
  const fspath = path.join(getData, 'data.json');
  const jsonStringData = fs.readFileSync(fspath, 'utf8');
  const jsonObject = JSON.parse(jsonStringData);
  const returnData = jsonObject.map(item => {
      return {
        params: {
          id: item.id.toString()
        }
      }
    }
  );
  return returnData;
}

export function getList(){
  const fspath = path.join(getData, 'data.json');
  const jsonStringData = fs.readFileSync(fspath, 'utf8');
  const jsonObject = JSON.parse(jsonStringData);
  jsonObject.sort(function(x, y) {
      return x.name.localeCompare(y.name);
    }                 
  );

  return jsonObject.map(item => {
      return {
        id: item.id.toString(),
        name: item.name
      }
    }
  );
}

export async function getOneData(idRequest){
  const fspath = path.join(getData, 'data.json');
  const fs2path = path.join(getData, 'relativesData.json');
  const jsonStringData = fs.readFileSync(fspath, 'utf8');
  const jsonString2Data = fs.readFileSync(fs2path, 'utf8');
  const jsonObject = JSON.parse(jsonStringData);
  const json2Object = JSON.parse(jsonString2Data);
  const objectFilter = jsonObject.filter( object => {
      return object.id.toString() === idRequest;
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