function testing() {
  console.log('testing this may not work')
}


/*
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
*/

  
/*
   Boolean function that indicates if there is a Blockly app element for 
   persistent storage of the current blockly workspace.
*/
/*
async function hasApplicationStorage(featureStudios){
  for (var i = 0; i < featureStudios.length; i++) {
    if (featureStudios[i].name == "blockly-storage") {
      var hasStudio = true
      var index = i
      return {
        hasStudio,
        index
      }
    }
  }
  var hasStudio = false
  var index = null
  return {
        hasStudio,
        index
      }
}
*/

/*
 Gets the FeatureStudio ID of the FS in development document
*/

/*
async function getApplicationID() {
  try {
      const response = await fetch(`/api/getApplicationStorage${window.location.search}`, { headers: { 'Accept': 'application/json' } })
      const featurestudios = await response.json();
      return featurestudios;
  } catch (error) {
      console.error(error);
  }
};
*/

/*
 Gets the FeatureStudio ID of the FS in development document
*/

/*
async function getChangeID(elementId) {
  try {
      const response = await fetch(`/api/getElementChangeId${window.location.search}&storageId=${elementId}`, { headers: { 'Accept': 'application/json' } })
      const jsonTree = await response.json();
      return jsonTree;
  } catch (error) {
      console.error(error);
  }
};
*/

/*
async function getAppElementInfo() {
  var applications = await getApplicationID();

  // Check if there are none and if so, create the export a new application storage
  if (applications.length == 0) {
    var application = await createNewAppElement()
    var applicationID = application.elementId
    var changeID = application.changeId
  } else {

    // If there are FeatureStudios is there already an export FeatureStudio
    results = await hasApplicationStorage(applications)

    // If there is no export Feature Studio then create one
    if (!(results.hasStudio)) { 
      var application = await createNewAppElement()
      var applicationID = application.elementId
      var changeID = application.changeId
    } else {
      var application = applications[results.index]
      var applicationID = applications[results.index].id
      var changeID = (await getChangeID(applicationID)).changeId
    }
  }
  return {
    "application" : application,
    "applicationID" : applicationID,
    "changeID" : changeID
  }
}
*/