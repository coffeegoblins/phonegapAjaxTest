var testRequest = new XMLHttpRequest();
testRequest.open('GET', "https://nodejs-coffeegoblins.rhcloud.com");
testRequest.onreadystatechange = function ()
{
    if (testRequest.readyState === 4)
    {
        console.log("4");
        if (testRequest.status === 200)
        {
            console.log("200");
        }
    }
};

testRequest.send();
