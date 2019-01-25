/** 
 * By Shashikant Sharma 
 * 
 * This code will take the user action and based on the user action and payload it will call the respective payment service.
 *  
 */ 
// eslint-disable-next-line import/prefer-default-export
const axios = require('axios');
//const CircularJSON = require('circular-json');
//import {parse, stringify} from 'flatted/esm';
const {parse, stringify} = require('flatted/cjs');

//const BASE_URL = `https://5m4hb8aet1.execute-api.us-west-2.amazonaws.com/prod/`;
const HttpErrors = require('http-errors');

const isNull = function (val) {
  if (typeof val === 'string') { val = val.trim(); }
  if (val === undefined || val === null || typeof val === 'undefined' || val === '' || val === 'undefined') {
    return true;
  }
  return false;
};

const isJson = function (str) {
  try {
    var obj = JSON.parse(JSON.stringify(str));
    if (obj && typeof obj === 'object' && obj !== null) {
      return true;
    }
  } catch (err) {
    return false;
  }
  return false;
}

function appointmentServices(BASE_URL) {
  this.execute = function (payload,callback) {
    // action key calls api.
    if(payload.action){
      switch(payload.action){
        case "ADD_BIZ_SITE":
        case "EDIT_BIZ_SITE":
          return funAddEditBizSite(BASE_URL,payload,callback);
        break;
        case "ADD_BIZ_SERVICE":
        case "EDIT_BIZ_SERVICE":
          return funAddEditBizService(BASE_URL,payload,callback);
        break;
        case "ADD_BIZ_SERVICEPROVIDER":
        case "EDIT_BIZ_SERVICEPROVIDER":
          return funAddEditBizServiceProvider(BASE_URL,payload,callback);
        break;
        case "ADD_BIZ_CLIENT":
        case "EDIT_BIZ_CLIENT":
          return funAddEditBizClient(BASE_URL,payload,callback);
        break;
        case "LIST_BIZ_CLIENTS":
          return funListBizClients(BASE_URL,payload,callback);
        break;
        case "REMOVE_BIZ_CLIENTS":
          return funRemoveBizClients(BASE_URL,payload,callback);
        break;
        case "LIST_BIZ_SERVICEPROVIDERS":
          return funListBizServiceProviders(BASE_URL,payload,callback);
        break;
        case "REMOVE_BIZ_SERVICEPROVIDERS":
          return funRemoveBizServiceProviders(BASE_URL,payload,callback);
        break;
        default:
          let errorMessage = `Please add BaseUrl.`;
          return errorMessage;
        break;
      }
    }else{
      return "Please provide valid action";
    }

  };
}


/**
* This function will call create merchant Site.
* @param BASE_URL - the initial host url for the service apis.
* @param payload - the required payload JSON to perform the operations.
* @param callback - to send the response back to the requester.
*/
const funAddEditBizSite = function (BASE_URL,payload,callback) {
  let bizSiteId = payload["bizSiteId"];
  if (isNull(bizSiteId)) {
    return callback(new HttpErrors.BadRequest('bizSiteId is mandatory.', { expose: false }));
  }

  let url = `${BASE_URL}BizSites/createUpdateBusinessSite`;
  axios.post(url, payload).then(response => {
    console.log(response)
    return callback(response);
  })
  .catch((error) => {
    let json = stringify(error);
    return callback(json);
  });
}


/**
* This function will call create merchant Service.
* @param BASE_URL - the initial host url for the service apis.
* @param payload - the required payload JSON to perform the operations.
* @param callback - to send the response back to the requester.
*/
const funAddEditBizService = function (BASE_URL,payload,callback) {
  let bizSiteId = payload["bizSiteId"];
  if (isNull(bizSiteId)) {
    return callback(new HttpErrors.BadRequest('bizSiteId is mandatory.', { expose: false }));
  }

  let bizServiceId = payload["bizServiceId"];
  if (isNull(bizServiceId)) {
    return callback(new HttpErrors.BadRequest('bizServiceId is mandatory.', { expose: false }));
  }

  let url = `${BASE_URL}BizServices/addEditService?businessSiteId=${bizSiteId}`;
  axios.post(url, payload).then(response => {
    console.log(response)
    return callback(response);
  })
  .catch((error) => {
    let json = stringify(error);
    return callback(json);
  });
}


/**
* This function will call create merchant Service.
* @param BASE_URL - the initial host url for the service apis.
* @param payload - the required payload JSON to perform the operations.
* @param callback - to send the response back to the requester.
*/
const funAddEditBizServiceProvider = function (BASE_URL,payload,callback) {
  let bizSiteId = payload["bizSiteId"];
  if (isNull(bizSiteId)) {
    return callback(new HttpErrors.BadRequest('bizSiteId is mandatory.', { expose: false }));
  }

  let bizServiceProviderId = payload["bizServiceProviderId"];
  if (isNull(bizServiceProviderId)) {
    return callback(new HttpErrors.BadRequest('bizServiceProviderId is mandatory.', { expose: false }));
  }

  let url = `${BASE_URL}BizServiceProviders/addEditServiceProvider?businessSiteId=${bizSiteId}`;
  axios.post(url, payload).then(response => {
    console.log(response)
    return callback(response);
  })
  .catch((error) => {
    let json = stringify(error);
    return callback(json);
  });
}


/**
* This function will call create merchant Service.
* @param BASE_URL - the initial host url for the service apis.
* @param payload - the required payload JSON to perform the operations.
* @param callback - to send the response back to the requester.
*/
const funAddEditBizClient = function (BASE_URL,payload,callback) {
  let bizSiteId = payload["bizSiteId"];
  if (isNull(bizSiteId)) {
    return callback(new HttpErrors.BadRequest('bizSiteId is mandatory.', { expose: false }));
  }

  let bizClientId = payload["bizClientId"];
  if (isNull(bizClientId)) {
    return callback(new HttpErrors.BadRequest('bizClientId is mandatory.', { expose: false }));
  }

  let url = `${BASE_URL}BizServiceProviders/addEditServiceProvider?businessSiteId=${bizSiteId}`;
  axios.post(url, payload).then(response => {
    console.log(response)
    return callback(response);
  })
  .catch((error) => {
    let json = stringify(error);
    return callback(json);
  });
}

/**
* This function will call create merchant Service.
* @param BASE_URL - the initial host url for the service apis.
* @param payload - the required payload JSON to perform the operations.
* @param callback - to send the response back to the requester.
*/
const funListBizClients = function (BASE_URL,payload,callback) {
  let bizSiteId = payload["bizSiteId"];
  if (isNull(bizSiteId)) {
    return callback(new HttpErrors.BadRequest('bizSiteId is mandatory.', { expose: false }));
  }

  let pageNo =0;
  if (!isNull(bizClientId)) {
    pageNo = payload["pageNo"];
  }

  let url = `${BASE_URL}BizClients/listClients?businessSiteId=${bizSiteId}&pageNo=${pageNo}`;
  axios.post(url, payload).then(response => {
    console.log(response)
    return callback(response);
  })
  .catch((error) => {
    let json = stringify(error);
    return callback(json);
  });
}


/**
* This function will call create merchant Service.
* @param BASE_URL - the initial host url for the service apis.
* @param payload - the required payload JSON to perform the operations.
* @param callback - to send the response back to the requester.
*/
const funRemoveBizClients = function (BASE_URL,payload,callback) {
  let bizSiteId = payload["bizSiteId"];
  if (isNull(bizSiteId)) {
    return callback(new HttpErrors.BadRequest('bizSiteId is mandatory.', { expose: false }));
  }

  let businessClientIds = payload["businessClientIds"];
  if (isNull(businessClientIds)) {
    return callback(new HttpErrors.BadRequest('businessClientIds is mandatory.', { expose: false }));
  }


  let url = `${BASE_URL}BizClients/removeClientFromSite?businessSiteId=${bizSiteId}&businessClientIds=${businessClientIds}`;
  axios.post(url, payload).then(response => {
    console.log(response)
    return callback(response);
  })
  .catch((error) => {
    let json = stringify(error);
    return callback(json);
  });
}


/**
* This function will call create merchant Service.
* @param BASE_URL - the initial host url for the service apis.
* @param payload - the required payload JSON to perform the operations.
* @param callback - to send the response back to the requester.
*/
const funListBizServiceProviders = function (BASE_URL,payload,callback) {
  let bizSiteId = payload["bizSiteId"];
  if (isNull(bizSiteId)) {
    return callback(new HttpErrors.BadRequest('bizSiteId is mandatory.', { expose: false }));
  }

  let pageNo =0;
  if (!isNull(bizClientId)) {
    pageNo = payload["pageNo"];
  }

  let url = `${BASE_URL}BizServiceProviders/listServiceProviders?businessSiteId=${bizSiteId}&pageNo=${pageNo}`;
  axios.post(url, payload).then(response => {
    console.log(response)
    return callback(response);
  })
  .catch((error) => {
    let json = stringify(error);
    return callback(json);
  });
}


/**
* This function will call create merchant Service.
* @param BASE_URL - the initial host url for the service apis.
* @param payload - the required payload JSON to perform the operations.
* @param callback - to send the response back to the requester.
*/
const funRemoveBizServiceProviders = function (BASE_URL,payload,callback) {
  let bizSiteId = payload["bizSiteId"];
  if (isNull(bizSiteId)) {
    return callback(new HttpErrors.BadRequest('bizSiteId is mandatory.', { expose: false }));
  }

  let businessProviderIds = payload["businessProviderIds"];
  if (isNull(businessProviderIds)) {
    return callback(new HttpErrors.BadRequest('businessProviderIds is mandatory.', { expose: false }));
  }


  let url = `${BASE_URL}BizServiceProviders/removeServiceProviderFromSite?businessSiteId=${bizSiteId}&businessProviderIds=${businessProviderIds}`;
  axios.post(url, payload).then(response => {
    console.log(response)
    return callback(response);
  })
  .catch((error) => {
    let json = stringify(error);
    return callback(json);
  });
}


module.exports = appointmentServices;
