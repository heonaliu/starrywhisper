const { queryRef, executeQuery, validateArgsWithOptions, mutationRef, executeMutation, validateArgs, makeMemoryCacheProvider } = require('firebase/data-connect');

const connectorConfig = {
  connector: 'example',
  service: 'starrywhisper',
  location: 'us-east4'
};
exports.connectorConfig = connectorConfig;
const dataConnectSettings = {
  cacheSettings: {
    cacheProvider: makeMemoryCacheProvider()
  }
};
exports.dataConnectSettings = dataConnectSettings;

const allDreamsRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'AllDreams');
}
allDreamsRef.operationName = 'AllDreams';
exports.allDreamsRef = allDreamsRef;

exports.allDreams = function allDreams(dcOrOptions, options) {
  
  const { dc: dcInstance, vars: inputVars, options: inputOpts } = validateArgsWithOptions(connectorConfig, dcOrOptions, options, undefined,false, false);
  return executeQuery(allDreamsRef(dcInstance, inputVars), inputOpts && inputOpts.fetchPolicy);
}
;

const createMyDreamRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'CreateMyDream', inputVars);
}
createMyDreamRef.operationName = 'CreateMyDream';
exports.createMyDreamRef = createMyDreamRef;

exports.createMyDream = function createMyDream(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars } = validateArgs(connectorConfig, dcOrVars, vars, true);
  return executeMutation(createMyDreamRef(dcInstance, inputVars));
}
;

const starADreamRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'StarADream', inputVars);
}
starADreamRef.operationName = 'StarADream';
exports.starADreamRef = starADreamRef;

exports.starADream = function starADream(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars } = validateArgs(connectorConfig, dcOrVars, vars, true);
  return executeMutation(starADreamRef(dcInstance, inputVars));
}
;

const myDreamsRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'MyDreams');
}
myDreamsRef.operationName = 'MyDreams';
exports.myDreamsRef = myDreamsRef;

exports.myDreams = function myDreams(dcOrOptions, options) {
  
  const { dc: dcInstance, vars: inputVars, options: inputOpts } = validateArgsWithOptions(connectorConfig, dcOrOptions, options, undefined,false, false);
  return executeQuery(myDreamsRef(dcInstance, inputVars), inputOpts && inputOpts.fetchPolicy);
}
;
