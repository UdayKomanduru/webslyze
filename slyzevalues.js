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
    let formattedDate = dd + '-' + mmm + '-' + yyyy;
    // Display Date in Delivery Slot label
    var slot = document.getElementById("slot");
    datemessage = "Delivery on " + formattedDate + " by:";
    slot.innerHTML = datemessage;
}

function assignvalues() {

   //     getExcelValues();


    //define variables
    var weight_elemnt_id, weight_value;
    var price_element_id, price_value;
    var vegetablename;
    const defaultweight = 250;

    const vegetables = [
        {
            vegname: "tomato",
            vegtitle: "Tomato", imagename: "Tomato.png",
            weight: defaultweight,
            price: 47,
            quantity: ["-", "1", "2"],
            style: ["Sliced", "Diced"]
        },
        {
            vegname: "potato",
            vegtitle: "Potato - Peeled", imagename: "Potato.png",
            weight: defaultweight,
            price: 42,
            quantity: ["-", "1", "2"],
            style: ["Sliced", "Diced", "Julienne"]
        },
        {
            vegname: "onion",
            vegtitle: "Onion - Peeled", imagename: "Onion.png",
            weight: defaultweight,
            price: 42,
            quantity: ["-", "1", "2"],
            style: ["Sliced", "Diced", "Fine Chopped Granules"]
        },
        {
            vegname: "ladiesfinger",
            vegtitle: "Ladies Finger", imagename: "Ladies_Finger.png",
            weight: defaultweight,
            price: 47,
            quantity: ["-", "1", "2"],
            style: ["Fry Cut", "Julienne"]
        },
        {
            vegname: "ivygourd",
            vegtitle: "Ivy Gourd", imagename: "Ivy_Gourd.png",
            weight: defaultweight,
            price: 48,
            quantity: ["-", "1", "2"],
            style: ["Sliced", "Diced", "Julienne"]
        },
        {
            vegname: "carrot",
            vegtitle: "Carrot - Peeled", imagename: "Carrot.png",
            weight: defaultweight,
            price: 46,
            quantity: ["-", "1", "2"],
            style: ["Sliced", "Diced", "Grated", "Julienne"]
        },
        {
            vegname: "cabbage",
            vegtitle: "Cabbage", imagename: "Cabbage.png",
            weight: defaultweight,
            price: 47,
            quantity: ["-", "1", "2"],
            style: ["Grated"]
        },
        {
            vegname: "drumstick",
            vegtitle: "Drumstick", imagename: "Drumstick.png",
            weight: defaultweight,
            price: 45,
            quantity: ["-", "1", "2"],
            style: ["Julienne"]
        },
        // {
        //     vegname: "greenbeans",
        //     vegtitle: "Green Beans", imagename: "Green_Beans.png",
        //     weight: defaultweight,
        //     price: 40,
        //     quantity: ["-", "1", "2"],
        //     style: ["Diced", "Julienne"]
        // },
         {
            vegname: "braodbeans",
            vegtitle: "Broad Beans", imagename: "Broad_Beans.png",
            weight: defaultweight,
            price: 66,
            quantity: ["-", "1", "2"],
            style: ["Sliced", "Diced", "Julienne"]
        },
        {
            vegname: "beetroot",
            vegtitle: "Beetroot - Peeled", imagename: "Beetroot.png",
            weight: defaultweight,
            price: 39,
            quantity: ["-", "1", "2"],
            style: ["Sliced", "Diced", "Julienne", "Grated"]
        },
        {
            vegname: "capsicum",
            vegtitle: "Capsicum", imagename: "Capsicum.png",
            weight: defaultweight,
            price: 56,
            quantity: ["-", "1", "2"],
            style: ["Diced", "Julienne"]
        },
        {
            vegname: "ridgegourd",
            vegtitle: "Ridge Gourd - Peeled", imagename: "Ridge_Gourd.png",
            weight: defaultweight,
            price: 73,
            quantity: ["-", "1", "2"],
            style: ["Diced"]
        },        
        {
            vegname: "cucumber",
            vegtitle: "Cucumber - Peeled", imagename: "Cucumber.png",
            weight: defaultweight,
            price: 37,
            quantity: ["-", "1", "2"],
            style: ["Sliced", "Diced", "Julienne"]
        },
        {
            vegname: "bottlegourd",
            vegtitle: "Bottle Gourd", imagename: "Bottle_Gourd.png",
            weight: defaultweight,
            price: 45,
            quantity: ["-", "1", "2"],
            style: ["Diced"]
        },
        {
            vegname: "bittergourd",
            vegtitle: "Bitter Gourd", imagename: "Bitter_Gourd.png",
            weight: defaultweight,
            price: 57,
            quantity: ["-", "1", "2"],
            style: ["Sliced", "Diced"]
        },              
 
        // {
        //     vegname: "snakegourd",
        //     vegtitle: "Snake Gourd", imagename: "Snake_Gourd.png",
        //     weight: defaultweight,
        //     price: 32,
        //     quantity: ["-", "1", "2"],
        //     style: ["Diced"]
        // },
        {
            vegname: "chowchow",
            vegtitle: "Chow Chow - Peeled", imagename: "Chow_Chow.png",
            weight: defaultweight,
            price: 45,
            quantity: ["-", "1", "2"],
            style: ["Diced"]
        },
        {
            vegname: "yellowcucumber",
            vegtitle: "Yellow Cucumber - Peeled", imagename: "Yellow_Cucumber.png",
            weight: defaultweight,
            price: 35,
            quantity: ["-", "1", "2"],
            style: ["Diced"]
        },
        {
            vegname: "currycoriander",
            vegtitle: "Curry + Coriander Leaves", imagename: "Curry_Coriander.png",
            weight: 50,
            price: 20,
            quantity: ["-", "1", "2"],
            style: ["Leaves"]
        }
        // {
        //     vegname: "friedrice",
        //     vegtitle: "Fried Rice Combo", imagename: "Fried_Rice.png",
        //     weight: defaultweight,
        //     price: 34,
        //     quantity: ["-", "1", "2"],
        //     style: ["Mixed Cuts"]
        // },
        // {
        //     vegname: "vegsalad",
        //     vegtitle: "Veg Salad Pack", imagename: "Veg_Salad.png",
        //     weight: defaultweight,
        //     price: 50,
        //     quantity: ["-", "1", "2"],
        //     style: ["Sliced"]
        // }
    ]
    // Get the reference of Vegetable table
    const vegtable = document.getElementById("veglist");
    if (vegtable) {
        for (i = 0; i < vegetables.length; i++) {
            // create row            
            const row = vegtable.insertRow();
            // Cell 1
            // create cell for name and image
            const namecell = row.insertCell();
            namecell.style.textAlign = "left";
            // create label element for vegtitle
            const namelabel = document.createElement("label");
            namelabel.innerHTML = vegetables[i].vegtitle;
            // create image element for vegetable
            const vegimage = document.createElement("img");
            // var imgsrc = "images/" + vegetables[i].vegtitle + ".png";
            var imgsrc = "images/" + vegetables[i].imagename;
            vegimage.src = imgsrc;
            vegimage.width = 40;
            //append namelabel and image to cell
            namecell.appendChild(namelabel);
            namecell.appendChild(vegimage);

            //Cell 2
            const weightcell = row.insertCell();
            // create weight element for vegetable
            const weightlabel = document.createElement("label");
            weightlabel.innerHTML = vegetables[i].weight;
            // append weightlabel to cell
            weightcell.appendChild(weightlabel);

            //cell3
            const pricecell = row.insertCell();
            // create weight element for vegetable
            const pricelabel = document.createElement("label");
            pricelabel.innerHTML = vegetables[i].price;
            // append weightlabel to cell
            pricecell.appendChild(pricelabel);

            //cell 4
            const qtycell = row.insertCell();;
            const qtyselect = document.createElement("select");
            for (val = 0; val < vegetables[i].quantity.length; val++) {
                const qtyoption = document.createElement('option');
                qtyoption.textContent = vegetables[i].quantity[val];
                if (qtyoption.textContent == "-") {
                    qtyoption.value = "0";
                }
                else {
                    qtyoption.value = qtyoption.textContent;
                }
                qtyselect.appendChild(qtyoption);
            }
            qtycell.appendChild(qtyselect);

            //cell 5
            const stylecell = row.insertCell();
            const styleselect = document.createElement("select");
            for (val = 0; val < vegetables[i].style.length; val++) {
                const styleoption = document.createElement('option');
                styleoption.textContent = vegetables[i].style[val];
                styleoption.value = vegetables[i].style[val];
                styleselect.appendChild(styleoption);
            }
            stylecell.appendChild(styleselect);

            //cell 6

            const buttoncell = row.insertCell();
            const cartbutton = document.createElement('button');
            cartbutton.innerHTML = "Add to Cart";
            cartbutton.addEventListener('click', () => { addVegetable(cartbutton) });
            buttoncell.appendChild(cartbutton);


        }
    }
}


function calcTime(offset) {
    // create Date object for current location
    var d = new Date();

    // convert to msec
    // subtract local time zone offset
    // get UTC time in msec
    var utc = d.getTime() + (d.getTimezoneOffset() * 60000);

    // create new Date object for different city
    // using supplied offset
    var nd = new Date(utc + (3600000*offset));

    // return time as a string
    return nd.toLocaleString();
}


/*function getExcelValues() {
    const Excel = require('exceljs');
    const workbook = new Excel.Workbook();
    workbook.xlsx.readFile('vegetables.xlsx').then(() => {
        const worksheet = workbook.getWorksheet('todaylist');
        const array = [];
        for (var i = 0; i < worksheet.rowCount; i++) {
            const row = worksheet.getRow(i);
            array.push({
                name: row.getCell(1).value,
                age: row.getCell(2).value
            });
        }c
        console.log(array);
    });
}*/

/* Template
    //assign values for --   
    weight_element_id = "--weight";
    weight_value = "250";
    assignweight(weight_element_id, weight_value);
    price_element_id = "--price";
    price_value = ;
    assignprice(price_element_id, price_value);
  */
