import React from "react";

const Changekeyvalue = () => {
  const mockdata = [
    {
      id: 1,
      name: "Mehmet",
      surname: "Baran",
      birthYear: 1987,
      birthCity: 63,
    },
    {
      id: 2,
      name: "SFA",
      surname: "Baran",
      birthYear: 2001,
      birthCity: 34,
    },
    {
      id: 3,
      name: "jay",
      surname: "Baran",
      birthYear: 2002,
      birthCity: 63,
    },
    {
      id: 4,
      name: "Zerya",
      surname: "Baran",
      birthYear: 2003,
      birthCity: 34,
    },
    {
      id: 5,
      name: "raj",
      surname: "Baran",
      birthYear: 2004,
      birthCity: 63,
    },
    {
      id: 6,
      name: "darshan",
      surname: "Baran",
      birthYear: 2005,
      birthCity: 34,
    },
    {
      id: 7,
      name: "lname",
      surname: "Baran",
      birthYear: 2006,
      birthCity: 63,
    },
    {
      id: 8,
      name: "Betül",
      surname: "Baran",
      birthYear: 2017,
      birthCity: 34,
    },
    {
      id: 9,
      name: "Mehmet john",
      surname: "Baran",
      birthYear: 2019,
      birthCity: 63,
    },
    {
      id: 10,
      name: "tül",
      surname: "Baran",
      birthYear: 2020,
      birthCity: 34,
    },
  ];
  const ArrData = [
    {
      title: "Home & Utilities",
      list: [
        {
          SubCategoryID: 1,
          SubCategoryName: "Mortgage & rent",
        },
        {
          SubCategoryID: 2,
          SubCategoryName: "Body corporate fees",
        },
      ],
    },
    {
      title: "Groceries",
      list: [
        {
          SubCategoryID: 26,
          SubCategoryName: "Supermarket",
        },
        {
          SubCategoryID: 27,
          SubCategoryName: "Butcher",
        },
      ],
    },
    {
      title: "Personal & Medical",
      list: [
        {
          SubCategoryID: 33,
          SubCategoryName: "Cosmetics & toiletries",
        },
        {
          SubCategoryID: 34,
          SubCategoryName: "Hair & beauty",
        },
      ],
    },
    {
      title: "Entertainment & Eat-out",
      list: [
        {
          SubCategoryID: 47,
          SubCategoryName: "Coffee & tea",
        },
        {
          SubCategoryID: 48,
          SubCategoryName: "Lunches - bought",
        },
      ],
    },
    {
      title: "Transport & Auto",
      list: [
        {
          SubCategoryID: 60,
          SubCategoryName: "Bus & train & ferry",
        },
        {
          SubCategoryID: 61,
          SubCategoryName: "Petrol",
        },
      ],
    },
  ];
  const transformed = mockdata.map(
    ({ id, name, surname, birthYear, birthCity }) => ({
      label: id,
      value: name,
      surname: surname,
      birthYear: birthYear,
      birthCity: birthCity,
    })
  );
  console.log(transformed);

  const showbirthcity = mockdata.filter((item) => item.birthCity === 63);
  console.log(showbirthcity);

  const showAge = mockdata.filter((item) => item.birthYear > 2003);
  console.log(showAge);

  const showSubCategoryName = ArrData.map((item) =>
    item.list.map((subItem) => subItem.SubCategoryName)
  );
  console.log(showSubCategoryName);

  const Changekey2darray = ArrData.map((item) =>
    item.list.map(({ SubCategoryID, SubCategoryName }) => {
      return {
        SubId: SubCategoryID,
        SubName: SubCategoryName,
      };
    })
  );
  console.log("change of key of 2D array is :", Changekey2darray);
  return <></>;
};

export default Changekeyvalue;
