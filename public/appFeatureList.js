/*
   Boolean function that indicates if there is a feature for the Blockly code
   in the Feature List of the Part Studio workspace.
*/

async function hasExportFeature(){
    var featureList = await getFeatureList();
    for (var i = 0; i < featureList.features.length; i++) {
      if (featureList.features[i].message.name == "Blockly Created Feature") {
          var hasStudio = true
          return hasStudio
      }
    }
    var hasStudio = false
    return hasStudio
  }


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