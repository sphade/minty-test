import React from "react";

const Table = () => {
  const list = [
    {
      type: "Apple Mac Book 15” 250 SSD 12GB",
      price: "$73430",
      transNo: "1234567890",
      time: "12:30",
      status: "Reconcilled",
    },
    {
      type: "Apple Mac Book 15” 250 SSD 12GB",
      price: "$73430",
      transNo: "1234567890",
      time: "12:30",
      status: "Reconcilled",
    },
    {
      type: "Apple Mac Book 15” 250 SSD 12GB",
      price: "$73430",
      transNo: "1234567890",
      time: "12:30",
      status: "Reconcilled",
    },
    {
      type: "Apple Mac Book 15” 250 SSD 12GB",
      price: "$73430",
      transNo: "1234567890",
      time: "12:30",
      status: "Reconcilled",
    },
    {
      type: "Apple Mac Book 15” 250 SSD 12GB",
      price: "$73430",
      transNo: "1234567890",
      time: "12:30",
      status: "Reconcilled",
    },
    {
      type: "Apple Mac Book 15” 250 SSD 12GB",
      price: "$73430",
      transNo: "1234567890",
      time: "12:30",
      status: "Reconcilled",
    },
  ];
  return (
    <table className="w-full table-auto bg-white mt-10 text-[14px] ">
      <thead className="text-left bg-[#EAEEF0] text-primary  capitalize h-[42px] ">
        <tr className="[&_th]:font-medium">
          <th className="font-normal  pl-[30px]">item type</th>
          <th>price</th>
          <th>transaction no</th>
          <th>time</th>
          <th>status</th>
        </tr>
      </thead>
      <tbody className="border [&_tr]:border-b-4 [&_tr]:border-[#F7F8FA] [&_tr]:h-[76px] px-[100px] ">
        {
          list.map(({ price, status, time, transNo, type }) => (
            <tr className="text-primary">
              <td className=" pl-[30px] text-[#414042]">{type}</td>
              <td>{price} </td>
              <td>{transNo}</td>
              <td>{time}</td>
              <td>{status}</td>
            </tr>
          ))

          //       list.map(({price,status,time,transNo,type})=>(
          //         <tr className=" px-[100px]">
          //         <td className="">{type }</td>
          //   <td>{price} </td>
          //   <td>{transNo}</td>
          //         <td>{ time}</td>
          //         <td>{status }</td>
          // </tr>
          //       ))
        }

        {/* <tr className=" px-[100px]">
          <td className="">Apple Mac Book 15” 250 SSD 12GB</td>
          <td>$73430</td>
          <td>1234567890</td>
          <td>12:30</td>
          <td>Reconcilled</td>
        </tr>
        <tr>
          <td>Apple Mac Book 15” 250 SSD 12GB</td>
          <td>$73430</td>
          <td>1234567890</td>
          <td>12:30</td>
          <td>Reconcilled</td>
        </tr>
        <tr>
          <td>Apple Mac Book 15” 250 SSD 12GB</td>
          <td>$73430</td>
          <td>1234567890</td>
          <td>12:30</td>
          <td>Reconcilled</td>
        </tr>
        <tr>
          <td>Apple Mac Book 15” 250 SSD 12GB</td>
          <td>$73430</td>
          <td>1234567890</td>
          <td>12:30</td>
          <td>Reconcilled</td>
        </tr>
        <tr>
          <td>Apple Mac Book 15” 250 SSD 12GB</td>
          <td>$73430</td>
          <td>1234567890</td>
          <td>12:30</td>
          <td>Reconcilled</td>
        </tr>
        <tr>
          <td>Apple Mac Book 15” 250 SSD 12GB</td>
          <td>$73430</td>
          <td>1234567890</td>
          <td>12:30</td>
          <td>Reconcilled</td>
        </tr>
        <tr>
          <td>Apple Mac Book 15” 250 SSD 12GB</td>
          <td>$73430</td>
          <td>1234567890</td>
          <td>12:30</td>
          <td>Reconcilled</td>
        </tr> */}
      </tbody>
    </table>
  );
};

export default Table;
