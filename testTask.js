var obj = JSON.parse(`{
  "displayedName": {
      "displayedName": {
          "value": [
              "Профиль маячковый ПВХ 10 мм L3м"
          ],
          "description": "Полное наименование товара для клиента"
          }
      },
  "stock": {
      "stocks": {
              "34": {
              "2": "35",
              "3": "42",
              "4": "58",
              "5": "57",
              "6": "112",
              "20": "51",
              "22": "78",
              "26": "34",
              "32": "22",
              "35": "358",
              "40": "28",
              "43": "68",
              "45": "58",
              "49": "31",
              "51": "29",
              "56": "42",
              "62": "26",
              "64": "0",
              "65": "57",
              "86": "15",
              "114": "41",
              "117": "46",
              "143": "46",
              "162": "4",
              "171": "0",
              "176": "12"
          }
      }
  }
}`);

function getValueOfDisplayedName(SomeObj) {
  return SomeObj.displayedName.displayedName.value[0]
}

function getArrayOfShopNumbers(SomeObj, region) {
  let result = []
  const objOfShops = SomeObj.stock.stocks[region]
  for (key in objOfShops) {
    if (objOfShops[key] > 0) {
      result.push(key)
    }
  }
  return result
}


function getMaxOfStocksAt(SomeObj, region) {
  const objOfShops = SomeObj.stock.stocks[region]
  let maxVal = -1
  let resultKey = -1
  for(key in objOfShops) {
    maxVal = Math.max(objOfShops[key], maxVal)
    if( maxVal != objOfShops[resultKey]) {
      resultKey = key
    }
  }
  return {maxVal, resultKey}
}
