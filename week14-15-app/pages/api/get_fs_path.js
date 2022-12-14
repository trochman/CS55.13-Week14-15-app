import fs from 'fs'
import path from 'path'

const getData = path.join(process.cwd(), 'jsondata');

//console.log(getData);
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  const fspath = path.join(getData, "data.json");
  const jsonData = fs.readFileSync(fspath, "utf8");
  const jsonObject = JSON.parse(jsonData);
  jsonObject.sort(
    function(x, y){
      return x.name.localeCompare(y.name)
    }
  );
  
  res.status(200).json(jsonObject)
}
