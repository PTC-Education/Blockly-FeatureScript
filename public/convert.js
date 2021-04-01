async function createNewAppElement(fSId, sourceMicroversion, fsCode) {

    // Format the body of the POST request
    raw = JSON.stringify({
      "formatId": "com.owens-gltf-viewer",
      "name": "blockly-storage",
      "description": "String",
      "jsonTree": {
        "blockly":"empty"
      }
    })
    
    // Define Content-Type for correct body parsing
    header =  {'Content-Type':'application/json'}
    
    try {
          const response = await fetch(`/api/createAppElement${window.location.search}`, {method: 'POST', body: raw, headers: header});
          const testFour = await response.json();
          return testFour;
      } catch (error) {
          console.error(error);
      }
    };