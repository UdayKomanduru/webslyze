function assignprice(price_elementid, price_value) {
    // Read Vegetable Price Element, assign value 
    var price_element = document.getElementById(price_elementid);
    price_element.innerHTML = price_value;
}

function assignweight(weight_elementid, weight_value) {
    // Read Vegetable weight Element, assign value
    var weight_element = document.getElementById(weight_elementid);
    weight_element.innerHTML = weight_value;
}

function assigndate() {
    let today = new Date();
    let dd = today.getDate() + 1;
    let mmm = today.toLocaleString('default', { month: 'short' });
    //let mm = today.getMonth() + 1; //January is 0!
    let yyyy = today.getFullYear();
    let formattedDate = dd + '/' + mmm + '/' + yyyy;
    // Display Date in Delivery Slot label
    var slot = document.getElementById("slot");
    datemessage = "Delivery on " + formattedDate + " by :";
    slot.innerHTML = datemessage;
}

function assignvalues() {
    //define variables
    /*var weight_elemnt_id, weight_value;
    var price_element_id, price_value;
    var vegetablename;
    const defaultweight = 250;

    const vegetables = [
        { vegname:"Tomato", weight:defaultweight, price:35},
        { vegname:"Potato", weight:defaultweight, price:35}
    ]

    for(i=0;i<vegetables.length;i++){
       const name =  vegteables[i].name;
    }*/

}


function assignpriceandweight() {
    //define variables
    var weight_elemnt_id, weight_value;
    var price_element_id, price_value;
    

    //assign values for tomato   
    weight_element_id = "tomatoweight";
    weight_value = "250";
    assignweight(weight_element_id, weight_value);
    price_element_id = "tomatoprice";
    price_value = 45;
    assignprice(price_element_id, price_value);


    //assign values for potato   
    weight_element_id = "potatoweight";
    weight_value = "250";
    assignweight(weight_element_id, weight_value);
    price_element_id = "potatoprice";
    price_value = 35;
    assignprice(price_element_id, price_value);


    //assign values for onion   
    weight_element_id = "onionweight";
    weight_value = "250";
    assignweight(weight_element_id, weight_value);
    price_element_id = "onionprice";
    price_value = 53;
    assignprice(price_element_id, price_value);

    //assign values for ladysfinger   
    weight_element_id = "ladysfingerweight";
    weight_value = "250";
    assignweight(weight_element_id, weight_value);
    price_element_id = "ladysfingerprice";
    price_value = 56;
    assignprice(price_element_id, price_value);

    //assign values for ivygourd   
    weight_element_id = "ivygourdweight";
    weight_value = "250";
    assignweight(weight_element_id, weight_value);
    price_element_id = "ivygourdprice";
    price_value = 35;
    assignprice(price_element_id, price_value);

    //assign values for carrot   
    weight_element_id = "carrotweight";
    weight_value = "250";
    assignweight(weight_element_id, weight_value);
    price_element_id = "carrotprice";
    price_value = 52;
    assignprice(price_element_id, price_value);

    //assign values for cabbage   
    weight_element_id = "cabbageweight";
    weight_value = "250";
    assignweight(weight_element_id, weight_value);
    price_element_id = "cabbageprice";
    price_value = 32;
    assignprice(price_element_id, price_value);

    //assign values for drumstick   
    weight_element_id = "drumstickweight";
    weight_value = "250";
    assignweight(weight_element_id, weight_value);
    price_element_id = "drumstickprice";
    price_value = 32;
    assignprice(price_element_id, price_value);


    //assign values for greanbeans   
    weight_element_id = "greenbeansweight";
    weight_value = "250";
    assignweight(weight_element_id, weight_value);
    price_element_id = "greenbeansprice";
    price_value = 32;
    assignprice(price_element_id, price_value);

    //assign values for broadbeans   
    weight_element_id = "broadbeansweight";
    weight_value = "250";
    assignweight(weight_element_id, weight_value);
    price_element_id = "broadbeansprice";
    price_value = 31;
    assignprice(price_element_id, price_value);

    //assign values for beetroot   
    weight_element_id = "beetrootweight";
    weight_value = "250";
    assignweight(weight_element_id, weight_value);
    price_element_id = "beetrootprice";
    price_value = 32;
    assignprice(price_element_id, price_value);

    //assign values for capsicum   
    weight_element_id = "capsicumweight";
    weight_value = "250";
    assignweight(weight_element_id, weight_value);
    price_element_id = "capsicumprice";
    price_value = 36;
    assignprice(price_element_id, price_value);

    //assign values for cucumber   
    weight_element_id = "cucumberweight";
    weight_value = "250";
    assignweight(weight_element_id, weight_value);
    price_element_id = "cucumberprice";
    price_value = 35;
    assignprice(price_element_id, price_value);

    //assign values for ridgegourd   
    weight_element_id = "ridgegourdweight";
    weight_value = "250";
    assignweight(weight_element_id, weight_value);
    price_element_id = "ridgegourdprice";
    price_value = 43;
    assignprice(price_element_id, price_value);

    //assign values for bittergourd   
    weight_element_id = "bittergourdweight";
    weight_value = "250";
    assignweight(weight_element_id, weight_value);
    price_element_id = "bittergourdprice";
    price_value = 35;
    assignprice(price_element_id, price_value);

    //assign values for bottlegourd   
    weight_element_id = "bottlegourdweight";
    weight_value = "250";
    assignweight(weight_element_id, weight_value);
    price_element_id = "bottlegourdprice";
    price_value = 32;
    assignprice(price_element_id, price_value);

    //assign values for snakegourd   
    weight_element_id = "snakegourdweight";
    weight_value = "250";
    assignweight(weight_element_id, weight_value);
    price_element_id = "snakegourdprice";
    price_value = 32;
    assignprice(price_element_id, price_value);

    //assign values for chowchow   
    weight_element_id = "chowchowweight";
    weight_value = "250";
    assignweight(weight_element_id, weight_value);
    price_element_id = "chowchowprice";
    price_value = 33;
    assignprice(price_element_id, price_value);

    //assign values for yelowcucumber   
    weight_element_id = "yellowcucumberweight";
    weight_value = "250";
    assignweight(weight_element_id, weight_value);
    price_element_id = "yellowcucumberprice";
    price_value = 34;
    assignprice(price_element_id, price_value);

      //assign values for currycoriander   
      weight_element_id = "currycorianderweight";
      weight_value = "250";
      assignweight(weight_element_id, weight_value);
      price_element_id = "currycorianderprice";
      price_value = 10;
      assignprice(price_element_id, price_value); 
      
     //assign values for friedricecombo   
     weight_element_id = "friedricecomboweight";
     weight_value = "250";
     assignweight(weight_element_id, weight_value);
     price_element_id = "friedricecomboprice";
     price_value = 54;
     assignprice(price_element_id, price_value);
     
     //assign values for vegsaladpack   
     weight_element_id = "vegsaladpackweight";
     weight_value = "250";
     assignweight(weight_element_id, weight_value);
     price_element_id = "vegsaladpackprice";
     price_value = 52;
     assignprice(price_element_id, price_value);
}

/* Template
    //assign values for --   
    weight_element_id = "--weight";
    weight_value = "250";
    assignweight(weight_element_id, weight_value);
    price_element_id = "--price";
    price_value = ;
    assignprice(price_element_id, price_value);
  */  