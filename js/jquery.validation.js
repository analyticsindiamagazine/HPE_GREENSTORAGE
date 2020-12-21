function checkfeild(id,message,blank,type,defaultv)
{
	
var extravalue=type.split('|');
	if(extravalue[1]!="")
	{
		type = extravalue[0];
		extravalue = extravalue[1];
			
	}
var checkvalue =  jQuery("#"+id).val();
		 
	if(blank=="1" && type!="checkbox" && type!="radio")
	{
		if(isEmpty(checkvalue)||checkvalue==defaultv) {		
			jQuery("#"+id).addClass('error');
			jQuery("#error_"+id).addClass('validation-advice');
			jQuery("#error_"+id).html(message);
			return false;
			 
			 
		} else {
			jQuery("#error_"+id).html('');
			jQuery("#"+id).removeClass('error'); 
			jQuery("#error_"+id).removeClass('validation-advice'); 
						 
		}
	}
	else
	{
		jQuery("#"+id).removeClass('error'); 
		jQuery("#error_"+id).html('');
		jQuery("#error_"+id).removeClass('validation-advice'); 
	}
	if(type=="email")
	{
 
		if(!isEmpty(checkvalue)) {	
		
			if (emailcheck(checkvalue)==false)
               {
				 
			jQuery("#"+id).addClass('error');
			jQuery("#error_"+id).addClass('validation-advice');
			jQuery("#error_"+id).html('Invalid email address');
			return false;
			   }
			   else
			   {
			jQuery("#error_"+id).html('');
			jQuery("#"+id).removeClass('error'); 
			jQuery("#error_"+id).removeClass('validation-advice'); 
			return true;
	 
			   }
		}  
	}
	else if(type=="phone")
	{
 
		if(!isEmpty(checkvalue)) {
		
		if(checkInternationalPhone(checkvalue)==false)
               {
				 
			jQuery("#"+id).addClass('error');
			jQuery("#error_"+id).addClass('validation-advice');
			jQuery("#error_"+id).html('Invalid number');
			return false;
			   }
			   else
			   {
		
			jQuery("#error_"+id).html('');
			jQuery("#"+id).removeClass('error'); 
			jQuery("#error_"+id).removeClass('validation-advice'); 
			return true;
	 
			   }
	 
		} 
	}
		else if(type=="number")
	{
 
		if(!isEmpty(checkvalue)) {
		
		if(isInteger(checkvalue)==false)
               {
				 
			jQuery("#"+id).addClass('error');
			jQuery("#error_"+id).addClass('validation-advice');
			jQuery("#error_"+id).html('Invalid number');
			return false;
			   }
			   else
			   {
		
			jQuery("#error_"+id).html('');
			jQuery("#"+id).removeClass('error'); 
			jQuery("#error_"+id).removeClass('validation-advice'); 
			return true;
	 
			   }
	 
		} 
	}
	else if(type=="weburl")
	{
 
		if(!isEmpty(checkvalue)) {
		
		if(isValidURL(checkvalue)==false)
               {
				 
			jQuery("#"+id).addClass('error');
			jQuery("#error_"+id).addClass('validation-advice');
			jQuery("#error_"+id).html('Please enter url with http://');
			return false;
			   }
			   else
			   {
		
			jQuery("#error_"+id).html('');
			jQuery("#"+id).removeClass('error'); 
			jQuery("#error_"+id).removeClass('validation-advice'); 
			return true;
	 
			   }
	 
		} 
	}
	else if(type=="match")
	{
 
		if(checkvalue!=jQuery("#"+extravalue).val()) {		
			jQuery("#"+id).addClass('error');
			jQuery("#error_"+id).addClass('validation-advice');
			jQuery("#error_"+id).html("Does not match");
			return false;
			 
			 
		} else {
			jQuery("#error_"+id).html('');
			jQuery("#"+id).removeClass('error'); 
			jQuery("#error_"+id).removeClass('validation-advice'); 
						 
		}
	}
	else if(type=="date")
	{
 
		if(!isEmpty(checkvalue)) {
		
		if(isDate(checkvalue)==false)
           {
			jQuery("#"+id).addClass('error');
			jQuery("#error_"+id).addClass('validation-advice');
			jQuery("#error_"+id).html('The date format should be : mm/dd/yyyy');
			return false;
			   }
			   else
			   {
		
			jQuery("#error_"+id).html('');
			jQuery("#"+id).removeClass('error'); 
			jQuery("#error_"+id).removeClass('validation-advice'); 
			return true;
	 
			   }
	 
		} 
	}
	else if(type=="minimum")
	{
 
		 
		
		if(checkvalue.length<extravalue)
               {
				 
			jQuery("#"+id).addClass('error');
			jQuery("#error_"+id).addClass('validation-advice');
			jQuery("#error_"+id).html('Minimum '+extravalue+' character');
			return false;
			   }
			   else
			   {
		
			jQuery("#error_"+id).html('');
			jQuery("#"+id).removeClass('error'); 
			jQuery("#error_"+id).removeClass('validation-advice'); 
			return true;
	 
			   }
	   
	}
	else if(type=="checkbox" || type=="radio")
	{
 
		 
		
		if(jQuery('input[name='+id+']').is(':checked')==false) {	
           
				 
			jQuery("#"+id).addClass('error');
			jQuery("#error_"+id).addClass('validation-advice');
			jQuery("#error_"+id).html(message);
			return false;
			   }
			   else
			   {
		
			jQuery("#error_"+id).html('');
			jQuery("#"+id).removeClass('error'); 
			jQuery("#error_"+id).removeClass('validation-advice'); 
			return true;
	 
			   }
	   
	}
	
	

	
	
return true;
}
function isValidURL(url) 
{
	var urlRegxp = /^(http:\/\/|https:\/\/){1}/;
//		var urlRegxp = /^(http:\/\/www.|https:\/\/www.){1}([\w]+)(.[\w]+){1,2}$/;
	if (urlRegxp.test(url) != true)
		 {
		return false;
		} else {
			return true;
			}
	}  
	
function emailcheck(str)
       {
               var at="@"
               var dot="."
               var lat=str.indexOf(at)
               var lstr=str.length
               var ldot=str.indexOf(dot)
 
               if (str.indexOf(at)==-1){
               
                  return false
               }
               if (str.indexOf(at)==-1 || str.indexOf(at)==0 || str.indexOf(at)==lstr){
               
                  return false
               }
			  
               if (str.indexOf(dot)==-1 || str.indexOf(dot)==0 || str.indexOf(dot)==lstr){
               
                   return false
               }
                if (str.indexOf(at,(lat+1))!=-1){
               
                   return false
                }
                if (str.substring(lat-1,lat)==dot || str.substring(lat+1,lat+2)==dot){
               
                   return false
                }
                if (str.indexOf(dot,(lat+2))==-1){
               
                   return false
                }
                if (str.indexOf(" ")!=-1){
					
                   return false
                }
				
       }
// Declaring required variables
var digits = "0123456789";
// non-digit characters which are allowed in phone numbers
var phoneNumberDelimiters = "()- ";
// characters which are allowed in international phone numbers
// (a leading + is OK)
var validWorldPhoneChars = phoneNumberDelimiters + "+";
// Minimum no of digits in an international phone no.
var minDigitsInIPhoneNumber = 8;

function isInteger(s)
{   var i;
    for (i = 0; i < s.length; i++)
    {   
        // Check that current character is number.
        var c = s.charAt(i);
        if (((c < "0") || (c > "9"))) return false;
    }
    // All characters are numbers.
    return true;
}
function trim(s)
{   var i;
    var returnString = "";
    // Search through string's characters one by one.
    // If character is not a whitespace, append to returnString.
    for (i = 0; i < s.length; i++)
    {   
        // Check that current character isn't whitespace.
        var c = s.charAt(i);
        if (c != " ") returnString += c;
    }
    return returnString;
}
function stripCharsInBag(s, bag)
{   var i;
    var returnString = "";
    // Search through string's characters one by one.
    // If character is not in bag, append to returnString.
    for (i = 0; i < s.length; i++)
    {   
        // Check that current character isn't whitespace.
        var c = s.charAt(i);
        if (bag.indexOf(c) == -1) returnString += c;
    }
    return returnString;
}

function checkInternationalPhone(strPhone){
var bracket=3
strPhone=trim(strPhone)
if(strPhone.indexOf("+")>1) return false
if(strPhone.indexOf("-")!=-1)bracket=bracket+1
if(strPhone.indexOf("(")!=-1 && strPhone.indexOf("(")>bracket)return false
var brchr=strPhone.indexOf("(")
if(strPhone.indexOf("(")!=-1 && strPhone.charAt(brchr+2)!=")")return true
if(strPhone.indexOf("(")==-1 && strPhone.indexOf(")")!=-1)return true
s=stripCharsInBag(strPhone,validWorldPhoneChars);
return (isInteger(s) && s.length >= minDigitsInIPhoneNumber);
}
function isEmpty(s)
{
return((s==null)||(s.length==0));	
}

var dtCh= "-";
var minYear=2016;
var maxYear=2100;
 
function daysInFebruary (year){
	// February has 29 days in any year evenly divisible by four,
    // EXCEPT for centurial years which are not also divisible by 400.
    return (((year % 4 == 0) && ( (!(year % 100 == 0)) || (year % 400 == 0))) ? 29 : 28 );
}
function DaysArray(n) {
	for (var i = 1; i <= n; i++) {
		this[i] = 31
		if (i==4 || i==6 || i==9 || i==11) {this[i] = 30}
		if (i==2) {this[i] = 29}
   } 
   return this
}
var monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];


// Declaring valid date character, minimum year and maximum year
var dtCh= "/";
var minYear=2016;
var maxYear=2100;

function isInteger(s){
	var i;
    for (i = 0; i < s.length; i++){   
        // Check that current character is number.
        var c = s.charAt(i);
        if (((c < "0") || (c > "9"))) return false;
    }
    // All characters are numbers.
    return true;
}

function stripCharsInBag(s, bag){
	var i;
    var returnString = "";
    // Search through string's characters one by one.
    // If character is not in bag, append to returnString.
    for (i = 0; i < s.length; i++){   
        var c = s.charAt(i);
        if (bag.indexOf(c) == -1) returnString += c;
    }
    return returnString;
}

function daysInFebruary (year){
	// February has 29 days in any year evenly divisible by four,
    // EXCEPT for centurial years which are not also divisible by 400.
    return (((year % 4 == 0) && ( (!(year % 100 == 0)) || (year % 400 == 0))) ? 29 : 28 );
}
function DaysArray(n) {
	for (var i = 1; i <= n; i++) {
		this[i] = 31
		if (i==4 || i==6 || i==9 || i==11) {this[i] = 30}
		if (i==2) {this[i] = 29}
   } 
   return this
}

function isDate(dtStr){
	var daysInMonth = DaysArray(12)
	var pos1=dtStr.indexOf(dtCh)
	var pos2=dtStr.indexOf(dtCh,pos1+1)
	var strDay=dtStr.substring(0,pos1)
	var strMonth=dtStr.substring(pos1+1,pos2)
	var strYear=dtStr.substring(pos2+1)
	strYr=strYear
	if (strDay.charAt(0)=="0" && strDay.length>1) strDay=strDay.substring(1)
	if (strMonth.charAt(0)=="0" && strMonth.length>1) strMonth=strMonth.substring(1)
	for (var i = 1; i <= 3; i++) {
		if (strYr.charAt(0)=="0" && strYr.length>1) strYr=strYr.substring(1)
	}
	day=parseInt(strMonth)
	month=parseInt(strDay)
	year=parseInt(strYr)
	if (pos1==-1 || pos2==-1){
		//alert("The date format should be : mm/dd/yyyy")
		return false
	}
//	if (strMonth.length<1 || month<1 || month>12){
		//alert("Please enter a valid month")
//		return false
	//}
	//if (strDay.length<1 || day<1 || day>31 || (month==2 && day>daysInFebruary(year)) || day > daysInMonth[month]){
		//alert("Please enter a valid day")
	//	return false
	//}
	if (strYear.length != 4 || year==0 || year<minYear || year>maxYear){
		//alert("Please enter a valid 4 digit year between "+minYear+" and "+maxYear)
		return false
	}
	if (dtStr.indexOf(dtCh,pos2+1)!=-1 || isInteger(stripCharsInBag(dtStr, dtCh))==false){
		//alert("Please enter a valid date")
		return false
	}
return true
}

function change(arr,id) {
var el = document.getElementById(id);
var val = "";
el.options.length = 0;
for(var i = 0; i< arr.length; i++ ) {
	if(arr[i]=="")
	{
			val = "Select"
	}
	else
	{
			val = arr[i];
	}
	
el.options[el.options.length] = new Option( val , arr[i] );
}
}