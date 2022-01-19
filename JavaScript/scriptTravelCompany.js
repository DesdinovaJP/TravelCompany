//Validate email address on contact page
function validateEmail(email)
{	
	if (email == ""){
		return;
	}
	//Email format validation
	var emailPattern = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

	if (!emailPattern.test(email))  
	{  
		alert('Invalid email format. Please enter valid email');  
		return false;
	}  
}

//Booking page validation
function dateFill(date)
{
	if (date == ""){
		alert('Please fill in the date');
		return false;
	}
}

//Name fields validation
function validateName(firstName, lastName)
{
	if (firstName == "" || firstName == null)
	{
		alert('First name must be filled');
		return false;
	}

	if(lastName == "" || lastName == null)
	{
		alert('Last name cannot be empty');
		return false;
	}
	
}

//Only accept alphabetical for name
function nameIsAlphabetical (firstName, lastName)
{
	var alphabet = /^[a-zA-Z]+$/;
	if (firstName.match(alphabet))
	{	if (lastName.match(alphabet))
		{
			return true;
		}
		else 
		{
			alert('Names must be alphabetical only');
			return false;
		}
	}
}


//Zipcode validation (USA standard) still not working
function validadePostalCode(postalCode)
{
	var numericExpression = /^[0-9]+$/;
	if (postalCode.match(numericExpression))
	{
		return true;
	} 
	else 
	{
		alert('Postal code uses Numbers only');
		return false;
		
	}
}

//Adress validator for alphaNumeric still not working
function validateAddress (address)
{
	var alphaNum = /^[0-9a-zA-Z]+$/;
	if (address.match(alphaNum))
	{
		return true;
	} 
	else 
	{
		alert('Address not valid');
		return false;
	}

}

//Submit bookr function
function validateForm(){
	//add any logic to validate before submitting
	return true;
}
