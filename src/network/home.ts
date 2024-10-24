import axiosInstance from "./axiosInstance";

export const getUnits = (lang: string) =>
  axiosInstance.get(`home`, {
    headers: {
      "accept-language": lang ?? "ar",
    },
  });
export const getSelectedUnitTypes = (unitId: string, lang: string) =>
  axiosInstance.post(
    `users/get-unit-types
`,
    {
      unitId: unitId,
    },
    {
      headers: {
        "accept-language": lang ?? "ar",
      },
    }
  );

export const getUserDetails = (mobileNumber: string) =>
  axiosInstance.post(
    `staff/get-user-details
`,
    {
      mobile: { countryCode: "EG", number: mobileNumber?.replace("+20", "") },
    },
    {
      headers: {
        "accept-language": "ar",
      },
    }
  );
