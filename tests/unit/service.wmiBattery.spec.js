import API from "@/services/mocks/wmiBattery.js";
//import API from "@/services/wmiBattery.js";
describe("/services/wmiBattery.js", () => {
  it('Should contain an array of objects matching the intended shape.', () => {
    return API.fetchWMI().then(data => {
      expect(Array.isArray(data)).toEqual(true);

      data.forEach((dataPoint) => {
        // Ensure each data point is an object with an exact set of keys.
        expect(typeof dataPoint).toEqual('object');
        expect(Object.keys(dataPoint).sort()).toEqual([
          "Availability", "BatteryStatus", "Caption", "Chemistry", "ConfigManagerErrorCode", "ConfigManagerUserConfig", "CreationClassName", "Description", "DesignCapacity", "DesignVoltage", "DeviceID", "ErrorCleared", "ErrorDescription", "EstimatedChargeRemaining", "EstimatedRunTime", "ExpectedLife", "FullChargeCapacity", "InstallDate", "LastErrorCode", "MaxRechargeTime", "Name", "PNPDeviceID", "PowerManagementCapabilities", "PowerManagementSupported", "SmartBatteryVersion", "Status", "StatusInfo", "SystemCreationClassName", "SystemName", "TimeOnBattery", "TimeToFullCharge"
        ]);
   
        // Validate simple property types.
        expect(typeof dataPoint.Availability).toEqual("string");
        expect(typeof dataPoint.BatteryStatus).toEqual("string");
        expect(typeof dataPoint.Chemistry).toEqual("string");
      });
    });
  });
});