let StartFunc = ({ inDataToShow }) => {
   let jVarLocalData = inDataToShow;

   jFLocalToInputFarmerNameId({ inFarmerNameId: jVarLocalData.FARMERNAME });
   jFLocalToInputFarmerMobileId({ inFarmerMobileId: jVarLocalData.FARMERMOBILE });
   jFLocalToInputFarmerCityId({ inFarmerCityId: jVarLocalData.FARMERCITY });
   jFLocalToInputFarmerFieldId({ inFarmerFieldId: jVarLocalData.FARMERFIELD })

};

let jFLocalToInputFarmerNameId = ({ inFarmerNameId }) => {
   let jVarLocalHtmlId = 'FarmerNameId';
   let jVarLocalFarmerNameId = document.getElementById(jVarLocalHtmlId);

   if (jVarLocalFarmerNameId === null === false) {
      jVarLocalFarmerNameId.value = inFarmerNameId;
   };
};

let jFLocalToInputFarmerMobileId = ({ inFarmerMobileId }) => {
   let jVarLocalHtmlId = 'FarmerMobileId';
   let jVarLocalFarmerMobileId = document.getElementById(jVarLocalHtmlId);

   if (jVarLocalFarmerMobileId === null === false) {
      jVarLocalFarmerMobileId.value = inFarmerMobileId;
   };
};

let jFLocalToInputFarmerCityId = ({ inFarmerCityId }) => {
   let jVarLocalHtmlId = 'FarmerCityId';
   let jVarLocalFarmerCityId = document.getElementById(jVarLocalHtmlId);

   if (jVarLocalFarmerCityId === null === false) {
      jVarLocalFarmerCityId.value = inFarmerCityId;
   };
};

let jFLocalToInputFarmerFieldId = ({ inFarmerFieldId }) => {
   let jVarLocalHtmlId = 'FarmerFieldId';
   let jVarLocalFarmerFieldId = document.getElementById(jVarLocalHtmlId);

   if (jVarLocalFarmerFieldId === null === false) {
      jVarLocalFarmerFieldId.value = inFarmerFieldId;
   };
};
export { StartFunc };