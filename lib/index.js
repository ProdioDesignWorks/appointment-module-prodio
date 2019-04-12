'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/** 
 * By Shashikant Sharma 
 * 
 * This code will take the user action and based on the user action and payload it will call the respective payment service.
 *  
 */
// eslint-disable-next-line import/prefer-default-export
var axios = require('axios');
//const CircularJSON = require('circular-json');
//import {parse, stringify} from 'flatted/esm';

var _require = require('flatted/cjs'),
    parse = _require.parse,
    stringify = _require.stringify;

//const BASE_URL = `https://5m4hb8aet1.execute-api.us-west-2.amazonaws.com/prod/`;


var HttpErrors = require('http-errors');

var isNull = function isNull(val) {
  if (typeof val === 'string') {
    val = val.trim();
  }
  if (val === undefined || val === null || typeof val === 'undefined' || val === '' || val === 'undefined') {
    return true;
  }
  return false;
};

var isJson = function isJson(str) {
  try {
    var obj = JSON.parse(JSON.stringify(str));
    if (obj && (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) === 'object' && obj !== null) {
      return true;
    }
  } catch (err) {
    return false;
  }
  return false;
};

function appointmentServices(BASE_URL) {
  this.execute = function (payload, callback) {
    // action key calls api.
    if (payload.action) {
      switch (payload.action) {
        case "ADD_BIZ_SITE":
        case "EDIT_BIZ_SITE":
          return funAddEditBizSite(BASE_URL, payload, callback);
          break;
        case "ADD_BIZ_SERVICE":
        case "EDIT_BIZ_SERVICE":
          return funAddEditBizService(BASE_URL, payload, callback);
          break;
        case "ADD_BIZ_SERVICEPROVIDER":
        case "EDIT_BIZ_SERVICEPROVIDER":
          return funAddEditBizServiceProvider(BASE_URL, payload, callback);
          break;
        case "ADD_BIZ_CLIENT":
        case "EDIT_BIZ_CLIENT":
          return funAddEditBizClient(BASE_URL, payload, callback);
          break;
        case "LIST_BIZ_CLIENTS":
          return funListBizClients(BASE_URL, payload, callback);
          break;
        case "REMOVE_BIZ_CLIENTS":
          return funRemoveBizClients(BASE_URL, payload, callback);
          break;
        case "LIST_BIZ_SERVICEPROVIDERS":
          return funListBizServiceProviders(BASE_URL, payload, callback);
          break;
        case "REMOVE_BIZ_SERVICEPROVIDERS":
          return funRemoveBizServiceProviders(BASE_URL, payload, callback);
          break;
        case "BOOK_APPOINTMENT":
          return funBookAppointment(BASE_URL, payload, callback);
          break;
        case "EDIT_APPOINTMENT":
          return funEditAppointment(BASE_URL, payload, callback);
          break;
        case "RESCHEDULE_APPOINTMENT":
          return funRescheuldeAppointment(BASE_URL, payload, callback);
          break;
        case "CANCEL_APPOINTMENT":
          return funCancelAppointment(BASE_URL, payload, callback);
          break;
        case "DELETE_APPOINTMENT":
          return funDeleteAppointment(BASE_URL, payload, callback);
          break;
        case "CONFIRM_APPOINTMENT":
          return funConfirmAppointment(BASE_URL, payload, callback);
          break;
        case "LIST_APPOINTMENTS":
          return funListAppointments(BASE_URL, payload, callback);
          break;
        case "GET_SERVICEPROVIDERS_CALENDAR":
          return funGetServiceProvidersCalendar(BASE_URL, payload, callback);
          break;
        case "GET_APPOINTMENTS_CALENDAR":
          return funGetAppointmentsCalendar(BASE_URL, payload, callback);
          break;
        default:
          var errorMessage = 'Please add BaseUrl.';
          return errorMessage;
          break;
      }
    } else {
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
var funAddEditBizSite = function funAddEditBizSite(BASE_URL, payload, callback) {
  var bizSiteId = payload["meta"]["bizSiteId"];
  if (isNull(bizSiteId)) {
    return callback(new HttpErrors.BadRequest('bizSiteId is mandatory.', { expose: false }));
  }

  var url = BASE_URL + 'BizSites/createUpdateBusinessSite';
  axios.post(url, payload).then(function (response) {
    //console.log(response)
    return callback(response);
  }).catch(function (error) {
    var json = stringify(error);
    return callback(json);
  });
};

/**
* This function will call create merchant Service.
* @param BASE_URL - the initial host url for the service apis.
* @param payload - the required payload JSON to perform the operations.
* @param callback - to send the response back to the requester.
*/
var funAddEditBizService = function funAddEditBizService(BASE_URL, payload, callback) {
  var bizSiteId = payload["meta"]["bizSiteId"];
  if (isNull(bizSiteId)) {
    return callback(new HttpErrors.BadRequest('bizSiteId is mandatory.', { expose: false }));
  }

  var bizServiceId = payload["meta"]["bizServiceId"];
  if (isNull(bizServiceId)) {
    return callback(new HttpErrors.BadRequest('bizServiceId is mandatory.', { expose: false }));
  }

  var url = BASE_URL + 'BizServices/addEditService?businessSiteId=' + bizSiteId;
  axios.post(url, payload).then(function (response) {
    return callback(response);
  }).catch(function (error) {
    var json = stringify(error);
    return callback(json);
  });
};

/**
* This function will call create merchant Service.
* @param BASE_URL - the initial host url for the service apis.
* @param payload - the required payload JSON to perform the operations.
* @param callback - to send the response back to the requester.
*/
var funAddEditBizServiceProvider = function funAddEditBizServiceProvider(BASE_URL, payload, callback) {
  var bizSiteId = payload["meta"]["bizSiteId"];
  if (isNull(bizSiteId)) {
    return callback(new HttpErrors.BadRequest('bizSiteId is mandatory.', { expose: false }));
  }

  var bizServiceProviderId = payload["meta"]["bizServiceProviderId"];
  if (isNull(bizServiceProviderId)) {
    return callback(new HttpErrors.BadRequest('bizServiceProviderId is mandatory.', { expose: false }));
  }

  var url = BASE_URL + 'BizServiceProviders/addEditServiceProvider?businessSiteId=' + bizSiteId;
  axios.post(url, payload).then(function (response) {
    return callback(response);
  }).catch(function (error) {
    var json = stringify(error);
    return callback(json);
  });
};

/**
* This function will call create merchant Service.
* @param BASE_URL - the initial host url for the service apis.
* @param payload - the required payload JSON to perform the operations.
* @param callback - to send the response back to the requester.
*/
var funAddEditBizClient = function funAddEditBizClient(BASE_URL, payload, callback) {
  var bizSiteId = payload["meta"]["bizSiteId"];
  if (isNull(bizSiteId)) {
    return callback(new HttpErrors.BadRequest('bizSiteId is mandatory.', { expose: false }));
  }

  var bizClientId = payload["meta"]["bizClientId"];
  if (isNull(bizClientId)) {
    return callback(new HttpErrors.BadRequest('bizClientId is mandatory.', { expose: false }));
  }

  var url = BASE_URL + 'BizClients/addEditClient?businessSiteId=' + bizSiteId;
  axios.post(url, payload).then(function (response) {
    return callback(response);
  }).catch(function (error) {
    var json = stringify(error);
    return callback(json);
  });
};

/**
* This function will call create merchant Service.
* @param BASE_URL - the initial host url for the service apis.
* @param payload - the required payload JSON to perform the operations.
* @param callback - to send the response back to the requester.
*/
var funListBizClients = function funListBizClients(BASE_URL, payload, callback) {
  var bizSiteId = payload["meta"]["bizSiteId"];
  if (isNull(bizSiteId)) {
    return callback(new HttpErrors.BadRequest('bizSiteId is mandatory.', { expose: false }));
  }

  var pageNo = 0;
  if (!isNull(bizClientId)) {
    pageNo = payload["meta"]["pageNo"];
  }

  var url = BASE_URL + 'BizClients/listClients?businessSiteId=' + bizSiteId + '&pageNo=' + pageNo;
  axios.post(url, payload).then(function (response) {
    return callback(response);
  }).catch(function (error) {
    var json = stringify(error);
    return callback(json);
  });
};

/**
* This function will call create merchant Service.
* @param BASE_URL - the initial host url for the service apis.
* @param payload - the required payload JSON to perform the operations.
* @param callback - to send the response back to the requester.
*/
var funRemoveBizClients = function funRemoveBizClients(BASE_URL, payload, callback) {
  var bizSiteId = payload["meta"]["bizSiteId"];
  if (isNull(bizSiteId)) {
    return callback(new HttpErrors.BadRequest('bizSiteId is mandatory.', { expose: false }));
  }

  var businessClientIds = payload["meta"]["businessClientIds"];
  if (isNull(businessClientIds)) {
    return callback(new HttpErrors.BadRequest('businessClientIds is mandatory.', { expose: false }));
  }

  var url = BASE_URL + 'BizClients/removeClientFromSite?businessSiteId=' + bizSiteId + '&businessClientIds=' + businessClientIds;
  axios.post(url, payload).then(function (response) {
    return callback(response);
  }).catch(function (error) {
    var json = stringify(error);
    return callback(json);
  });
};

/**
* This function will call create merchant Service.
* @param BASE_URL - the initial host url for the service apis.
* @param payload - the required payload JSON to perform the operations.
* @param callback - to send the response back to the requester.
*/
var funListBizServiceProviders = function funListBizServiceProviders(BASE_URL, payload, callback) {
  var bizSiteId = payload["meta"]["bizSiteId"];
  if (isNull(bizSiteId)) {
    return callback(new HttpErrors.BadRequest('bizSiteId is mandatory.', { expose: false }));
  }

  var pageNo = 0;
  if (!isNull(bizClientId)) {
    pageNo = payload["meta"]["pageNo"];
  }

  var url = BASE_URL + 'BizServiceProviders/listServiceProviders?businessSiteId=' + bizSiteId + '&pageNo=' + pageNo;
  axios.post(url, payload).then(function (response) {
    return callback(response);
  }).catch(function (error) {
    var json = stringify(error);
    return callback(json);
  });
};

/**
* This function will call create merchant Service.
* @param BASE_URL - the initial host url for the service apis.
* @param payload - the required payload JSON to perform the operations.
* @param callback - to send the response back to the requester.
*/
var funRemoveBizServiceProviders = function funRemoveBizServiceProviders(BASE_URL, payload, callback) {
  var bizSiteId = payload["meta"]["bizSiteId"];
  if (isNull(bizSiteId)) {
    return callback(new HttpErrors.BadRequest('bizSiteId is mandatory.', { expose: false }));
  }

  var businessProviderIds = payload["meta"]["businessProviderIds"];
  if (isNull(businessProviderIds)) {
    return callback(new HttpErrors.BadRequest('businessProviderIds is mandatory.', { expose: false }));
  }

  var url = BASE_URL + 'BizServiceProviders/removeServiceProviderFromSite?businessSiteId=' + bizSiteId + '&businessProviderIds=' + businessProviderIds;
  axios.post(url, payload).then(function (response) {
    return callback(response);
  }).catch(function (error) {
    var json = stringify(error);
    return callback(json);
  });
};

var funBookAppointment = function funBookAppointment(BASE_URL, payload, callback) {
  var bizSiteId = payload["meta"]["bizSiteId"];
  if (isNull(bizSiteId)) {
    return callback(new HttpErrors.BadRequest('bizSiteId is mandatory.', { expose: false }));
  }

  var bizClientId = payload["meta"]["bizClientId"];
  if (isNull(bizClientId)) {
    return callback(new HttpErrors.BadRequest('bizClientId is mandatory.', { expose: false }));
  }

  var url = BASE_URL + 'BizAppointments/createAppointment?businessSiteId=' + bizSiteId;
  axios.post(url, payload).then(function (response) {
    return callback(response);
  }).catch(function (error) {
    var json = stringify(error);
    return callback(json);
  });
};

var funEditAppointment = function funEditAppointment(BASE_URL, payload, callback) {
  var bizSiteId = payload["meta"]["bizSiteId"];
  if (isNull(bizSiteId)) {
    return callback(new HttpErrors.BadRequest('bizSiteId is mandatory.', { expose: false }));
  }

  var appointmentId = payload["meta"]["appointmentId"];
  if (isNull(appointmentId)) {
    return callback(new HttpErrors.BadRequest('appointmentId is mandatory.', { expose: false }));
  }

  var url = BASE_URL + 'BizAppointments/editAppointment?appointmentId=' + appointmentId;
  axios.post(url, payload).then(function (response) {
    return callback(response);
  }).catch(function (error) {
    var json = stringify(error);
    return callback(json);
  });
};

var funRescheuldeAppointment = function funRescheuldeAppointment(BASE_URL, payload, callback) {
  var bizSiteId = payload["meta"]["bizSiteId"];
  if (isNull(bizSiteId)) {
    return callback(new HttpErrors.BadRequest('bizSiteId is mandatory.', { expose: false }));
  }

  var appointmentId = payload["meta"]["appointmentId"];
  if (isNull(appointmentId)) {
    return callback(new HttpErrors.BadRequest('appointmentId is mandatory.', { expose: false }));
  }

  var url = BASE_URL + 'BizAppointments/rescheduleAppointment?appointmentId=' + appointmentId;
  axios.post(url, payload).then(function (response) {
    return callback(response);
  }).catch(function (error) {
    var json = stringify(error);
    return callback(json);
  });
};

var funCancelAppointment = function funCancelAppointment(BASE_URL, payload, callback) {

  var appointmentId = payload["meta"]["appointmentId"];
  if (isNull(appointmentId)) {
    return callback(new HttpErrors.BadRequest('appointmentId is mandatory.', { expose: false }));
  }

  var url = BASE_URL + 'BizAppointments/cancelAppointment?appointmentId=' + appointmentId;
  axios.post(url, payload).then(function (response) {
    return callback(response);
  }).catch(function (error) {
    var json = stringify(error);
    return callback(json);
  });
};

var funDeleteAppointment = function funDeleteAppointment(BASE_URL, payload, callback) {

  var appointmentId = payload["meta"]["appointmentId"];
  if (isNull(appointmentId)) {
    return callback(new HttpErrors.BadRequest('appointmentId is mandatory.', { expose: false }));
  }

  var url = BASE_URL + 'BizAppointments/deleteAppointment?appointmentId=' + appointmentId;
  axios.post(url, payload).then(function (response) {
    return callback(response);
  }).catch(function (error) {
    var json = stringify(error);
    return callback(json);
  });
};

var funConfirmAppointment = function funConfirmAppointment(BASE_URL, payload, callback) {

  var appointmentId = payload["meta"]["appointmentId"];
  if (isNull(appointmentId)) {
    return callback(new HttpErrors.BadRequest('appointmentId is mandatory.', { expose: false }));
  }

  var url = BASE_URL + 'BizAppointments/confirmAppointment?appointmentId=' + appointmentId;
  axios.post(url, payload).then(function (response) {
    return callback(response);
  }).catch(function (error) {
    var json = stringify(error);
    return callback(json);
  });
};

var funListAppointments = function funListAppointments(BASE_URL, payload, callback) {

  var bizSiteId = payload["meta"]["bizSiteId"];
  if (isNull(bizSiteId)) {
    return callback(new HttpErrors.BadRequest('bizSiteId is mandatory.', { expose: false }));
  }

  var bizClientId = "";
  if (!isNull(payload["meta"]["bizClientId"])) {
    bizClientId = payload["meta"]["bizClientId"];
  }

  var pageNo = 0;
  if (!isNull(payload["meta"]["pageNo"])) {
    pageNo = payload["meta"]["pageNo"];
  }

  var url = BASE_URL + 'BizAppointments/listAppointments?businessSiteId=' + bizSiteId + '&bizClientId=' + bizClientId + '&pageNo=' + pageNo;
  axios.post(url, payload).then(function (response) {
    return callback(response);
  }).catch(function (error) {
    var json = stringify(error);
    return callback(json);
  });
};

var funGetServiceProvidersCalendar = function funGetServiceProvidersCalendar(BASE_URL, payload, callback) {

  var bizSiteId = payload["meta"]["bizSiteId"];
  if (isNull(bizSiteId)) {
    return callback(new HttpErrors.BadRequest('bizSiteId is mandatory.', { expose: false }));
  }

  var bizServiceProviderId = payload["meta"]["bizServiceProviderId"];
  if (isNull(bizServiceProviderId)) {
    return callback(new HttpErrors.BadRequest('bizServiceProviderId is mandatory.', { expose: false }));
  }

  var url = BASE_URL + 'BizAppointments/getServiceProviderCalender?businessSiteId=' + bizSiteId + '&bizServiceProviderId=' + bizServiceProviderId;
  axios.post(url, payload).then(function (response) {
    return callback(response);
  }).catch(function (error) {
    var json = stringify(error);
    return callback(json);
  });
};

var funGetAppointmentsCalendar = function funGetAppointmentsCalendar(BASE_URL, payload, callback) {

  var bizSiteId = payload["meta"]["bizSiteId"];
  if (isNull(bizSiteId)) {
    return callback(new HttpErrors.BadRequest('bizSiteId is mandatory.', { expose: false }));
  }

  var url = BASE_URL + 'BizAppointments/getAppointmentsCalender?businessSiteId=' + bizSiteId;
  axios.post(url, payload).then(function (response) {
    return callback(response);
  }).catch(function (error) {
    var json = stringify(error);
    return callback(json);
  });
};

module.exports = appointmentServices;