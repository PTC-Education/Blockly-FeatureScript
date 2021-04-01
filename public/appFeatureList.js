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