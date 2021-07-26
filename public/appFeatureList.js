/*

    appFeatureList.js

    hasExportFeature() : Checks to see if there is already a Blockly feature
                         in the Part Studio Feature List

    getFeatureList(): gets the contents of the feature list in the Part Studio

    createBlocklyFeature(): Adds a new blockly feature to the feature list

*/

/*
   Boolean function that indicates if there is a feature for the Blockly code
   in the Feature List of the Part Studio workspace.
*/

async function hasExportFeature(){
    var featureList = await getFeatureList();
    console.log(featureList)
    try{
    for (var i = 0; i < featureList.features.length; i++) {
      if (featureList.features[i].message.name == "Blockly Created Feature") {
          var hasStudio = true
          return hasStudio
      }
    }
    var hasStudio = false
    return hasStudio
    } catch (error) {
      console.error(error);
    }

  }


/*
   Gets the Feature List for the Part Studio in which the user is Blockly coding 
*/

async function getFeatureList() {
    try {
        const response = await fetch(`/api/getFeatureList${window.location.search}`, { headers: { 'Accept': 'application/json' } })
        const featurestudios = await response.json();
        return featurestudios;
    } catch (error) {
        console.error(error);
    }
};



/*
   Adds the Blocky custom feature to the Part Studio Feature List 

   Input:
  
      namespace: e{elementId}::m{microversionID}, element id and microversion id
                This is obtained from the GET FeatureStudiosSpecs endpoint 

      sourceMicroversion: The current source microversion of the document

      fsID: This is the element id of the blockly export feature studio
*/


async function createBlocklyFeature(namespace, sourceMicroversion, fSId) {
  
    raw = JSON.stringify({
      "feature": {
        "type" : 134,
        "typeName": "BTMFeature",
        "message" : {
          "featureType" : "myFeature",
          "name" : "Blockly Created Feature",
          "parameters" : [],
          "namespace" : `${namespace}`
        }
      },
      "serializationVersion": "1.1.20",
      "sourceMicroversion": `${sourceMicroversion}`
    })
   
    header =  {'Content-Type':'application/json'}
    
    try {
          const response = await fetch(`/api/addFeatureToList${window.location.search}&blockly=${fSId}`, {method: 'POST', body: raw, headers: header})
          const featurestudios = await response.json();
          return featurestudios;
      } catch (error) {
          console.error(error);
      }
  };