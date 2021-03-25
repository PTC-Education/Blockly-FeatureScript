var xml2js = require('xml2js');
var parser = new xml2js.Parser(/* options */);


async function parseWorkspace() {
    var xml = Blockly.Xml.workspaceToDom(Blockly.mainWorkspace)
    console.log(xml)
    
    // Format the body of the POST request
    raw = JSON.stringify({
      "contents": xml, 
    })
   
    // Define Content-Type for correct body parsing
    header =  {'Content-Type':'application/json'}
  
    try {
          const response = await fetch(`/api/convertToJSON`, {method: 'POST', body: raw, headers: header});
          const testFour = await response.json();
          return testFour;
      } catch (error) {
          console.error(error);
      }
  };
  