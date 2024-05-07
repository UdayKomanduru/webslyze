        
        //  Global Variable Decleration
        var userdetails, orderdetails, messagetext, itemcount, total, datemessage;
        //Function to set initial values on document load. 
        document.addEventListener("DOMContentLoaded", function () {
            // Setting Initial values for variables;
            itemcount = 0;
            total = 0;
            userdetails = "";
            orderdetails = "";
            messagetext = "";        
            //testing
            assignvalues();            
            // Get Current Date details   
            assigndate();                
            // assign vegetable prices
            assignpriceandweight();

        });

        // Function to value User Details
        function validate_input() {
            // Get the value from field Name.
            var name = document.getElementById('name').value.trim();
            // Validate user name
            if (name == "") { alert("Please enter your name"); return false; }
            // Get the value of user phone number
            var phonecell = document.getElementById('phone');
            if(validateField(phonecell)==false){ return false; }
            var phoneNumber = document.getElementById('phone').value.trim();
            // validate user phone number
            if (phoneNumber == "") { alert("Please enter your Mobile Number"); return false; }
            //Get Address field details and validate each field.
            var flatNumber = document.getElementById('flat').value.trim();
            if (flatNumber == "") { alert("Please enter your Flat Details"); return false; }
            var building = document.getElementById('building').value.trim();
            if (building == "") { alert("Please enter your Apartment/Building Details"); return false; }
            var streetAddress = document.getElementById('street-address').value.trim();
            if (streetAddress == "") { alert("Please enter your Street Details"); return false; }
            var landmark = document.getElementById('landmark').value.trim();
            if (landmark == "") { alert("Please enter your Location Landmark"); return false; }
            userdetails = "";
            // Add User's Name and Mobile details to message
            userdetails += "Name: " + name + "\n";
            userdetails += "Mobile: " + phoneNumber + "\n";
            // Add User's address details to the message
            userdetails += "Address:\n";
            userdetails += flatNumber + "\n";
            userdetails += building + "\n";
            userdetails += streetAddress + "\n";
            userdetails += landmark + "\n";

        }
        // validate the cart if cart is empty
        function validate_cart() {
            // Validate if cart is empty
            if (itemcount == 0) {
                alert("Your Cart is Empty. Please add items to cart");
                return false;
            }
            // validate whether total amount is less than Rs.100 
            if (total < 100) {
                alert("Minimum order value is Rs.100");
                return false;
            }


        }
        // Function to Submit data to whatsapp
        function submitToWhatsApp() {
            // Validate User Details
            if(validate_input()==false){Return;}
            // Validate Cart Details
            if(validate_cart()==false){Return;}
            // Validating Order Details        
            if (orderdetails == "") {
                alert("Add Vegetables to cart and place the order");
                Return;
            }
            else {
                orderdetails.replace(/^\s*\n/gm, "");
            }


            // Get Delivery Slot details                        
            const deltab = document.getElementById("delslot");
            //Read Delivery Slot selected by User  
            const delcell = deltab.rows[0].cells[1];
            const delslot = delcell.childNodes[1].value;
            // Add Delivery Slot details to User Details
            userdetails += "\n" + datemessage + " " + delslot + "\n";
            // Add User Details and Delivery Slot details to Message            
            messagetext += userdetails + "\n";
            // Add Total Amout of the cart to Order Details
            orderdetails += "\n" + "Total Amount: " + total + "\n";
            // Add Total Item Count of the cart to Order details
            orderdetails += "\n" + "Total Items: " + itemcount + "\n";
            // Add Order Details to the Message
            messagetext += orderdetails + "\n";
            messagetext = messagetext.replace(/^\s*\n/gm, "");
            // URL Encode the final message text            
            messagetext = encodeURIComponent(messagetext);
            // Construct WhatsApp link with pre-filled message
            var whatsappLink = "https://wa.me/919176693332?text=" + messagetext; // Replace 'whatsappphonenumber' with actual phone number
            // Redirect to WhatsApp
            window.location.href = whatsappLink;
        }

        function resetcart() {
            // Read Vegetable Table
            const table = document.getElementById("veglist");
            //Reset Cart table
            for (i = 1; i < 23; i++) {
                // read Qty, Style cell, Add/Remove cart button from each row of the table   
                const qtycell = table.rows[i].cells[3];
                const stylecell = table.rows[i].cells[4];
                const buttoncell = table.rows[i].cells[5];

                // Resetting the dropdown values of quantity and style
                qtycell.childNodes[0].selectedIndex = 0;
                stylecell.childNodes[0].selectedIndex = 0;
                buttoncell.childNodes[0].innerText = "Add to Cart";

                //enable the quantity and style cells                                    
                qtycell.childNodes[0].disabled = false;
                stylecell.childNodes[0].disabled = false;


            }
            // Reset Cart Total and Cart Item Count
            itemcount = 0;
            total = 0.
            orderdetails = "";
            messagetext = "";

            // Display Cart details
            var cartcount = document.getElementById("itemcount");
            cartcount.innerHTML = itemcount;

            var carttotal = document.getElementById("itemtotal");
            carttotal.innerHTML = total;
        }

        function addVegetable(curbutton) {
            // Get Current Button Row ID in the table    
            var currow = curbutton.parentNode.parentNode.rowIndex;
            // Get Details from the table for the current row
            const table = document.getElementById("veglist");
            // Read Quanaity selected by the user   
            const qtycell = table.rows[currow].cells[3];
            //const qty = qtycell.childNodes[1].value;
            // changed in dynamic local version from 1 to 0
            const qty = qtycell.childNodes[0].value;
            // Add details to the order only when the quantity is non-zero   
            if (qty != "0") {
                //get vegetable name    
                const vegcell = table.rows[currow].cells[0];
                const vegname = vegcell.innerText.trim();
                //get style
                const stylecell = table.rows[currow].cells[4];
                //const vegstyle = stylecell.childNodes[1].value.trim();
                // changed in dynamic local version from 1 to 0
                const vegstyle = stylecell.childNodes[0].value.trim();
                //get Price
                const pricecell = table.rows[currow].cells[2];
                var itemprice = pricecell.innerText;
                itemprice = Number(itemprice);
                let itemqty = Number(qty);
                var itemtotal = itemprice * itemqty;

                // changed from 1 to 0 in dynamic
                // Disable Quantity and Style Cells
                qtycell.childNodes[0].disabled = true;
                stylecell.childNodes[0].disabled = true;


                // Check whether we need to add/remove from cart
                var title = curbutton.innerText;
                // when Item is being added
                if (title == "Add to Cart") {
                    // increment Item count
                    itemcount++;
                    //when first Item is being added, add header to the message
                    if (itemcount == 1) {
                        orderdetails = "Vegetable || Style || Qty || Total" + "\n" + "_______________________________" + "\n";
                    }
                    // concatenate the values and add it to final message
                    let curItem = vegname + " || " + vegstyle + " || " + qty + " || " + itemtotal;
                    orderdetails = orderdetails + "\n" + curItem;
                    curbutton.innerText = "Remove from Cart";
                    //alert(orderdetails);
                    total += itemtotal;
                }
                else if (title == "Remove from Cart") {
                    // concatenate the values and add it to final message
                    itemcount--;
                    // let remItem = vegname + " || " + vegstyle + " || " + qty + " || " + itemtotal;
                    let remItem = vegname + "||" + vegstyle + "||" + qty + "||" + itemtotal;
                    orderdetails = orderdetails.replace(remItem, "");
                    curbutton.innerText = "Add to Cart";
                    //alert(orderdetails);
                    total -= itemtotal;

                    // Enable Quantity and Style Cells
                    // Changed from 1 to 0 in dynamic
                    qtycell.childNodes[0].disabled = false;
                    stylecell.childNodes[0].disabled = false;

                    // Resetting the dropdown values of quantity and style
                    qtycell.childNodes[0].selectedIndex = 0;
                    stylecell.childNodes[0].selectedIndex = 0;

                }
                // Display Cart details
                var cartcount = document.getElementById("itemcount");
                cartcount.innerHTML = itemcount;

                var carttotal = document.getElementById("itemtotal");
                carttotal.innerHTML = total;

            }
            else {
                alert("Select required quantity and Add to cart");
            }
            curbutton.addEventListener('click', function (event) {
                // To Stop the page refresh after clikcing add to cart button
                event.preventDefault();
            });
        }

        // validate phone number entered
        function validateField(field) {
            // Regular expression to match 10 digits
            const numberPattern = /^\d{10}$/;

            // Get the field value
            const value = field.value;

            // Check if the value matches the pattern
            if (!numberPattern.test(value)) {
                alert("Please enter a 10-digit phone number.");
                return false; // Cancels form submission if validation fails (optional)
            }

            // If validation passes, return true (optional)
            return true;
        }

