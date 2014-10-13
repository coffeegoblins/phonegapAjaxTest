var testRequest = new XMLHttpRequest();
testRequest.open('GET', "https://nodejs-coffeegoblins.rhcloud.com");
testRequest.onreadystatechange = function ()
{
    if (testRequest.readyState === 4)
    {
        document.body.innerHTML = "4";
        if (testRequest.status === 200)
        {
            console.log("200");
        }

        document.body.innerHTML = testRequest.status.toString();
        document.body.innerHTML += testRequest.responseText;
    }
};

testRequest.send();
