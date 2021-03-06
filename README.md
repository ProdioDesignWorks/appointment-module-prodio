
# appointment-module-prodio

`appointment-module-prodio` is an  node js client for the  `appointment-services-prodio API`. 


# Prerequisite (Things to do before installing this module):
 * Clone its dependency repository first on your server git clone https://github.com/ProdioDesignWorks/appointment-services-prodio.git
 * Navigate to your repo cd appointment-services-prodio
 * Install dependencies npm install
 * Start service node . or npm start or node server/server.js
 * Open http://localhost:3030/explorer/ in your browser
 * If you've pm2 installed then use this pm2 start server/server.js --name="APPOINTMENT_SERVICE"
 * When you install `appointment-module-prodio`, it will ask question for the BASE_URL of this `APPOINTMENT_SERVICE` - eventually.



# Features!
  
### Functions

* Add/Edit Business Site

* Add/Edit Services

* Add/Edit Service Providers

* Add/Edit Clients

* Book Appointment

* Reschedule Appointment

* Cancel Appointment

* Edit Appointment

* List Appointments

* Get Appointment Details

* Search/Filter Appointments

* TimeSlot Settings
 

# Installation

$ npm install appointment-module-prodio@latest --save

  
# Initialization 
Require the appointment-module-prodio module and initialize the appointment npm module client.
```JSX

 const appointmentClass = require('appointment-module-prodio');
 const appointmentObj = new appointmentClass(BASE_URL); //BASE_URL => is the url where its loopback apis are running. eg.
 ``` 


### Method

`1. ADD BUSINESS SITE:`

 	This will create new business site.


### Payload

| Key | Type | Value | Description | Required |
| --- | ---- | ----- | ----------- | -------- |
| `action` | string | `ADD_BIZ_SITE` | key which defines the type of action to be performed | YES |
| `meta` | json | [SAMPLE_META_INFO](/jsons/add_business_site.json) | Json having business details. | YES |


#### Example

```JSX
	const payload = {
	    "action": "ADD_BUSINESS_SITE",
	    "meta": SAMPLE_META_INFO
	};
	//create business in appointment module
	paymentObj.execute(payload, function(response) {
	    if (typeof response == "string" || typeof response === "string") {
	        response = JSON.parse(response);
	    }

	    if (!isNull(response.data)) {
	        let serverResponse = response["data"];
	        if (typeof serverResponse == "string" || typeof serverResponse === "string") {
	            serverResponse = JSON.parse(response["data"]);
	        }

	        if (!isNull(serverResponse.error)) {
	            //Error Response
	            return cb(new HttpErrors.InternalServerError(response.data.error.message, {
	                expose: false
	            }));
	        } else {
	            // HTTP : 200 , Success Response , Merchant Successfully Created!!
	            return cb(null, response.data);
	        }
	    } else {
	        if (!isNull(response["response"])) {
	            let serverResponse = response["response"]["data"];
	            if (typeof serverResponse == "string" || typeof serverResponse === "string") {
	                serverResponse = JSON.parse(response["response"]["data"]);
	            }

	            let serverResponseError = serverResponse["error"];
	            if (typeof serverResponseError == "string" || typeof serverResponseError === "string") {
	                serverResponseError = JSON.parse(serverResponseError["error"]);
	            }

	            let _msg = isNull(serverResponseError["message"]) ? 'Internal Server Error' : serverResponseError["message"];

	            //Error Response
	            return cb(new HttpErrors.InternalServerError(_msg, {
	                expose: false
	            }));
	        } else {
	            let _msg = isNull(response["data"]["message"]) ? 'Internal Server Error' : response["data"]["message"];

	            //Error Response
	            return cb(new HttpErrors.InternalServerError(_msg, {
	                expose: false
	            }));
	        }
	    }
	});
```

`2. EDIT BUSINESS SITE:`

 	This will edit the business site.


### Payload

| Key | Type | Value | Description | Required |
| --- | ---- | ----- | ----------- | -------- |
| `action` | string | `EDIT_BIZ_SITE` | key which defines the type of action to be performed | YES |
| `meta` | json | [SAMPLE_META_INFO](/jsons/edit_business_site.json) | Json having business details. | YES |


`3. ADD BUSINESS SERVICE:`

 	This will create new service provided by business site.


### Payload

| Key | Type | Value | Description | Required |
| --- | ---- | ----- | ----------- | -------- |
| `action` | string | `ADD_BIZ_SERVICE` | key which defines the type of action to be performed | YES |
| `meta` | json | [SAMPLE_META_INFO](/jsons/add_business_service.json) | Json having business details. | YES |


`4. EDIT BUSINESS SERVICE:`

 	This will create new service provided by business site.


### Payload

| Key | Type | Value | Description | Required |
| --- | ---- | ----- | ----------- | -------- |
| `action` | string | `EDIT_BIZ_SERVICE` | key which defines the type of action to be performed | YES |
| `meta` | json | [SAMPLE_META_INFO](/jsons/edit_business_service.json) | Json having business details. | YES |


`5. ADD BUSINESS SERVICE PROVIDER:`

 	This will create new service provided by business site.


### Payload

| Key | Type | Value | Description | Required |
| --- | ---- | ----- | ----------- | -------- |
| `action` | string | `ADD_BIZ_SERVICEPROVIDER` | key which defines the type of action to be performed | YES |
| `meta` | json | [SAMPLE_META_INFO](/jsons/add_business_serviceprovider.json) | Json having business details. | YES |


`6. EDIT BUSINESS SERVICE PROVIDER:`

 	This will create new service provided by business site.


### Payload

| Key | Type | Value | Description | Required |
| --- | ---- | ----- | ----------- | -------- |
| `action` | string | `EDIT_BIZ_SERVICEPROVIDER` | key which defines the type of action to be performed | YES |
| `meta` | json | [SAMPLE_META_INFO](/jsons/edit_business_serviceprovider.json) | Json having business details. | YES |


`7. ADD BUSINESS CLIENT:`

 	This will create new client for business site.


### Payload

| Key | Type | Value | Description | Required |
| --- | ---- | ----- | ----------- | -------- |
| `action` | string | `ADD_BIZ_CLIENT` | key which defines the type of action to be performed | YES |
| `meta` | json | [SAMPLE_META_INFO](/jsons/add_business_client.json) | Json having business details. | YES |


`8. EDIT BUSINESS CLIENT:`

 	This will create new client for business site.


### Payload

| Key | Type | Value | Description | Required |
| --- | ---- | ----- | ----------- | -------- |
| `action` | string | `EDIT_BIZ_CLIENT` | key which defines the type of action to be performed | YES |
| `meta` | json | [SAMPLE_META_INFO](/jsons/edit_business_client.json) | Json having business details. | YES |


`9. LIST CLIENTS:`

 	This will create new client for business site.


### Payload

| Key | Type | Value | Description | Required |
| --- | ---- | ----- | ----------- | -------- |
| `action` | string | `LIST_BIZ_CLIENTS` | key which defines the type of action to be performed | YES |
| `meta` | json | [SAMPLE_META_INFO](/jsons/list_business_clients.json) | Json having business details. | YES |


`10. REMOVE CLIENTS FROM SITE:`

 	This will create new client for business site.


### Payload

| Key | Type | Value | Description | Required |
| --- | ---- | ----- | ----------- | -------- |
| `action` | string | `REMOVE_BIZ_CLIENTS` | key which defines the type of action to be performed | YES |
| `meta` | json | [SAMPLE_META_INFO](/jsons/remove_business_clients.json) | Json having business details. | YES |


`11. LIST SERVICE PROVIDERS:`

 	This will create new client for business site.


### Payload

| Key | Type | Value | Description | Required |
| --- | ---- | ----- | ----------- | -------- |
| `action` | string | `LIST_BIZ_SERVICEPROVIDERS` | key which defines the type of action to be performed | YES |
| `meta` | json | [SAMPLE_META_INFO](/jsons/list_business_clients.json) | Json having business details. | YES |


`12. REMOVE SERVICE PROVIDERS FROM SITE:`

 	This will create new client for business site.


### Payload

| Key | Type | Value | Description | Required |
| --- | ---- | ----- | ----------- | -------- |
| `action` | string | `REMOVE_BIZ_SERVICEPROVIDERS` | key which defines the type of action to be performed | YES |
| `meta` | json | [SAMPLE_META_INFO](/jsons/remove_business_clients.json) | Json having business details. | YES |


`13. BOOK APPOINTMENT:`

 	This will create new appointment for business site.


### Payload

| Key | Type | Value | Description | Required |
| --- | ---- | ----- | ----------- | -------- |
| `action` | string | `BOOK_APPOINTMENT` | key which defines the type of action to be performed | YES |
| `meta` | json | [SAMPLE_META_INFO](/jsons/book_appointment.json) | Json having business details. | YES |


`14. EDIT APPOINTMENT:`

 	This will edit appointment for business site.


### Payload

| Key | Type | Value | Description | Required |
| --- | ---- | ----- | ----------- | -------- |
| `action` | string | `EDIT_APPOINTMENT` | key which defines the type of action to be performed | YES |
| `meta` | json | [SAMPLE_META_INFO](/jsons/edit_appointment.json) | Json having business details. | YES |


`15. RESCHEDULE APPOINTMENT:`

 	This will edit appointment for business site.


### Payload

| Key | Type | Value | Description | Required |
| --- | ---- | ----- | ----------- | -------- |
| `action` | string | `RESCHEDULE_APPOINTMENT` | key which defines the type of action to be performed | YES |
| `meta` | json | [SAMPLE_META_INFO](/jsons/reschedule_appointment.json) | Json having business details. | YES |


`16. CANCEL APPOINTMENT:`

 	This will edit appointment for business site.


### Payload

| Key | Type | Value | Description | Required |
| --- | ---- | ----- | ----------- | -------- |
| `action` | string | `CANCEL_APPOINTMENT` | key which defines the type of action to be performed | YES |
| `meta` | json | [SAMPLE_META_INFO](/jsons/cancel_appointment.json) | Json having business details. | YES |


`17. DELETE APPOINTMENT:`

 	This will edit appointment for business site.


### Payload

| Key | Type | Value | Description | Required |
| --- | ---- | ----- | ----------- | -------- |
| `action` | string | `DELETE_APPOINTMENT` | key which defines the type of action to be performed | YES |
| `meta` | json | [SAMPLE_META_INFO](/jsons/delete_appointment.json) | Json having business details. | YES |


`18. CONFIRM APPOINTMENT:`

 	This will mark confirm the appointment for business site.


### Payload

| Key | Type | Value | Description | Required |
| --- | ---- | ----- | ----------- | -------- |
| `action` | string | `CONFIRM_APPOINTMENT` | key which defines the type of action to be performed | YES |
| `meta` | json | [SAMPLE_META_INFO](/jsons/confirm_appointment.json) | Json having business details. | YES |


`19. LIST APPOINTMENTS:`

 	This will list appointment for business site.


### Payload

| Key | Type | Value | Description | Required |
| --- | ---- | ----- | ----------- | -------- |
| `action` | string | `LIST_APPOINTMENTS` | key which defines the type of action to be performed | YES |
| `meta` | json | [SAMPLE_META_INFO](/jsons/list_appointments.json) | Json having business details. | YES |


`20. LIST APPOINTMENTS BY SERVICE:`

 	This will list appointment for business site of particular service.


### Payload

| Key | Type | Value | Description | Required |
| --- | ---- | ----- | ----------- | -------- |
| `action` | string | `LIST_APPOINTMENTS_BY_SERVICE` | key which defines the type of action to be performed | YES |
| `meta` | json | [SAMPLE_META_INFO](/jsons/list_appointments_by_service.json) | Json having business details. | YES |



`21. GET SERVICE PROVIDER CALENDAR:`

 	This will edit appointment for business site.


### Payload

| Key | Type | Value | Description | Required |
| --- | ---- | ----- | ----------- | -------- |
| `action` | string | `GET_SERVICEPROVIDERS_CALENDAR` | key which defines the type of action to be performed | YES |
| `meta` | json | [SAMPLE_META_INFO](/jsons/get_serviceproviders_calendar.json) | Json having business details. | YES |


`22. GET APPOINTMENTS CALENDAR:`

 	This will edit appointment for business site.


### Payload

| Key | Type | Value | Description | Required |
| --- | ---- | ----- | ----------- | -------- |
| `action` | string | `GET_APPOINTMENTS_CALENDAR` | key which defines the type of action to be performed | YES |
| `meta` | json | [SAMPLE_META_INFO](/jsons/get_appointments_calendar.json) | Json having business details. | YES |



`23. GET APPOINTMENT DETAILS:`

 	This will give a appointment details for business site.


### Payload

| Key | Type | Value | Description | Required |
| --- | ---- | ----- | ----------- | -------- |
| `action` | string | `GET_APPOINTMENT_DETAILS` | key which defines the type of action to be performed | YES |
| `meta` | json | [SAMPLE_META_INFO](/jsons/get_appointment_profile.json) | Json having business details. | YES |


`24. COMPLETE APPOINTMENT:`

 	This will mark complete appointment for business site.


### Payload

| Key | Type | Value | Description | Required |
| --- | ---- | ----- | ----------- | -------- |
| `action` | string | `COMPLETE_APPOINTMENT` | key which defines the type of action to be performed | YES |
| `meta` | json | [SAMPLE_META_INFO](/jsons/complete_appointment.json) | Json having business details. | YES |


