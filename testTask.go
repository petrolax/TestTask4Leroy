package main

import (
	"encoding/json"
	"fmt"
	"io/ioutil"
	"strconv"
)

type Product struct {
	DisplayedName struct {
		DisplayedName struct {
			Value       []string `json: "value"`
			Description string `json: "description"`
		} `json: "displayedName"`
	} `json: "displayedName"`
	Stock struct {
		Stocks map[string]map[string]string `json:"stocks"`
	} `json: "stock"`
}

func (p Product) getValueOfDisplayedName() string {
	return p.DisplayedName.DisplayedName.Value[0]
}

func (p Product) getArrayOfShopNumbers(region string) []string {
	result := make([]string, 0)
	for key, val := range p.Stock.Stocks[region] {
		cmpVal, _ := strconv.Atoi(val)
		if cmpVal > 0 {
			result = append(result, key)
		}
	}
	return result
}

func (p Product) getMaxOfStocksAt(region string) (maxVal int, resultKey string) {
	for key, val := range p.Stock.Stocks[region] {
		cmpVal, _ := strconv.Atoi(val)
		if cmpVal > maxVal {
			maxVal = cmpVal
			resultKey = key
		}
	}
	return
}

func main() {
	data, err := ioutil.ReadFile("file.json")
	if err != nil {
		fmt.Print(err)
	}

	var prod Product//map[string]interface{}//Product

	_ = json.Unmarshal(data, &prod)

	fmt.Println(prod.getValueOfDisplayedName())
	fmt.Println(prod.getArrayOfShopNumbers("34"))
	fmt.Println(prod.getMaxOfStocksAt("34"))

}