function check() {


    var init = document.getElementById("password").value;
    var sec = document.getElementById("password2").value;
    var pass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,50}$/;
    var address1 = document.getElementById("address1").value;
    var username = document.getElementById("username").value;
    var firn = document.getElementById("name").value;
    var lasn = document.getElementById("lastName").value;
    var emm=document.getElementById("email").value;
    var city = document.getElementById("city").value;
    var zipCode = document.getElementById("zip").value;
    var phone = /^\+?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    var iphone = document.getElementById("tel").value;
    var zip = document.getElementById("zip").value;
    var state = document.getElementById("state").value;
    var birthday = document.getElementById("birthDay").value;

    if (init== "")
    {
        var initDiv = document.getElementById("passDiv");
        if (initDiv) {
            initDiv.classList.add("has-error");
            initDiv.classList.remove("has-success");
        }
        window.alert("Please enter the password");
        return false;
    }
    else
    {
        var initDiv = document.getElementById("passDiv");
        if (initDiv) {
            initDiv.classList.remove("has-error");
            initDiv.classList.add("has-success");
        }

    }

    if (init != sec)
    {
        var secDiv = document.getElementById("verPassDiv");
        if (secDiv) {
            secDiv.classList.add("has-error");
            secDiv.classList.remove("has-success");
        }
        window.alert("Two passwords not same");
        return false;
    }
    else
    {
        var secDiv = document.getElementById("verPassDiv");
        if (secDiv) {
            secDiv.classList.remove("has-error");
            secDiv.classList.add("has-success");
        }


    }

    if (init.length < 8 || init.length > 50)
    {
        var initDiv = document.getElementById("passDiv");
        if (initDiv) {
            initDiv.classList.add("has-error");
            initDiv.classList.remove("has-success");
        }
        window.alert("Your password should at least 8 and at most 50");

        return false;
    }
    if (!(init.match(pass)))
    {
        var initDiv = document.getElementById("passDiv");
        if (initDiv) {
            initDiv.classList.add("has-error");
            initDiv.classList.remove("has-success");
        }

        window.alert("Change the pattern of your password");

        return false;

    }
    if(address1=="")
    {
        var initDiv = document.getElementById("ADD1");
        if (initDiv) {
            initDiv.classList.add("has-error");
            initDiv.classList.remove("has-success");
        }
        window.alert("Please enter a address");
        return false;
    }
    else
    {
        var initDiv = document.getElementById("ADD1");
        if (initDiv) {
            initDiv.classList.remove("has-error");
            initDiv.classList.add("has-success");
        }

    }









        if( username.length < 6 || username.length > 50 || username =="")
        {
            var initDiv = document.getElementById("user");
            if (initDiv) {
                initDiv.classList.add("has-error");
                initDiv.classList.remove("has-success");
            }
            window.alert("Please enter a valid username");
            return false;
        }
        else
        {
            var initDiv = document.getElementById("user");
            if (initDiv) {
                initDiv.classList.remove("has-error");
                initDiv.classList.add("has-success");
            }
        }

    if(firn.length > 50 || firn == "")
    {
        var initDiv = document.getElementById("firn");
        if (initDiv) {
            initDiv.classList.add("has-error");
            initDiv.classList.remove("has-success");
        }
        window.alert("Please enter a valid first name");
        return false;
    }
    else
    {
        var initDiv = document.getElementById("firn");
        if (initDiv) {
            initDiv.classList.remove("has-error");
            initDiv.classList.add("has-success");
        }
    }
    if(lasn.length > 50 || lasn == "")
    {
        var initDiv = document.getElementById("lasn");
        if (initDiv) {
            initDiv.classList.add("has-error");
            initDiv.classList.remove("has-success");
        }
        window.alert("Please enter a valid last name");
        return false;
    }
    else
    {
        var initDiv = document.getElementById("lasn");
        if (initDiv) {
            initDiv.classList.remove("has-error");
            initDiv.classList.add("has-success");
        }
    }



    var index = emm.search(
        /^\S+\@\S+\.\S+$/
    );

    if (index > -1)
    {
        var initDiv = document.getElementById("emm");
        if (initDiv)
        {
            initDiv.classList.remove("has-error");
            initDiv.classList.add("has-success");
        }
    }
    else
    {
        var initDiv = document.getElementById("lasn");
        if (initDiv)
        {
            initDiv.classList.add("has-error");
            initDiv.classList.remove("has-success");
        }
        window.alert("Please enter a valid email name");
        return false;

    }




    if(city == "" || city>50)
    {
        var initDiv = document.getElementById("CITT");
        if (initDiv) {
            initDiv.classList.add("has-error");
            initDiv.classList.remove("has-success");
        }
        window.alert("Please enter a VAILD city");
        return false;
    }
    else
    {
        var initDiv = document.getElementById("CITT");
        if (initDiv) {
            initDiv.classList.remove("has-error");
            initDiv.classList.add("has-success");
        }

    }

    if (isUSAZipCode(zipCode))
    {
        var initDiv = document.getElementById("zz");
        if (initDiv)
        {
            initDiv.classList.remove("has-error");
            initDiv.classList.add("has-success");
        }
    }
    else
    {
        var initDiv = document.getElementById("zz");
        if (initDiv)
        {
            initDiv.classList.add("has-error");
            initDiv.classList.remove("has-success");
        }
        window.alert("Please enter a VAILD zipcode");
        return false;
    }


    if(!(iphone.match(phone)))
    {
        var initDiv = document.getElementById("lalala");
        if (initDiv)
        {
            initDiv.classList.add("has-error");
            initDiv.classList.remove("has-success");
        }
        window.alert("Please enter a VAILD phone");
        return false;
    }
    else
    {
        var initDiv = document.getElementById("lalala");
        if (initDiv)
        {
            initDiv.classList.remove("has-error");
            initDiv.classList.add("has-success");
        }
    }



        window.alert("You are done!!!");


}

function registerHandlers() {
    document.getElementById("myForm").onsubmit = check;


}
function isUSAZipCode(str)
{
    return /^\d{5}(-\d{4})?$/.test(str);
}