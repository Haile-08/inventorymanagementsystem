import React from "react";
import ExcelJs from "exceljs";
import { useSelector } from "react-redux";

const ExportStoreToExcel = () => {
  const exportToExcel = (data) => {
    let sheetName = "invocatoryStoreExport.xlsx";
    let headerName = "OrderList";

    let workbook = new ExcelJs.Workbook();
    let sheet = workbook.addWorksheet(sheetName, {
      views: [{ showGridLines: false }],
    });

    let columnArr = [];
    for (let i in data[0]) {
      let tempObj = { name: "" };
      tempObj.name = i;
      columnArr.push(tempObj);
    }

    sheet.addTable({
      name: `Header`,
      ref: "A1",
      headerRow: true,
      totalsRow: false,
      style: {
        theme: "",
        showRowStripes: false,
        showFirstColumn: true,
        width: 200,
      },
      columns: [{ name: "Store Report" }, { name: "Store" }],
      rows: [[`As of: 07/09/2021`], [`inventory`]],
    });

    sheet.addTable({
      name: headerName,
      ref: "A5",
      headerRow: true,
      totalsRow: false,
      style: {
        theme: "TableStyleMedium2",
        showRowStripes: false,
        width: 200,
      },
      columns: columnArr ? columnArr : [{ name: "" }],
      rows: data.map((e) => {
        let arr = [];
        for (let i in e) {
          arr.push(e[i]);
        }
        return arr;
      }),
    });

    sheet.getCell("A1").font = { size: 20, bold: true };
    sheet.columns = sheet.columns.map((e) => {
      const expr = e.values[5];
      switch (expr) {
        case "storeName":
          return { width: 50 };
        case "status":
          return { width: 40 };
        default:
          return { width: 20 };
      }
    });

    const table = sheet.getTable(headerName);
    for (let i = 0; i < table.table.columns.length; i++) {
      sheet.getCell(`${String.fromCharCode(65 + i)}5`).font = { size: 12 };
      sheet.getCell(`${String.fromCharCode(65 + i)}5`).fill = {
        type: "pattern",
        pattern: "solid",
        fgColor: { argb: "c5d9f1" },
      };

      for (let j = 0; j < table.table.rows.length; j++) {
        let rowCell = sheet.getCell(`${String.fromCharCode(65 + i)}${j + 6}`);
        rowCell.alignment = { wrapText: true };
        rowCell.border = {
          bottom: {
            style: "thin",
            color: { argb: "a6a6a6" },
          },
        };
      }
    }
    table.commit();

    const writeFile = (fileName, content) => {
      const link = document.createElement("a");
      const blob = new Blob([content], {
        type: "application/vnd.ms-excel;charset=utf-8;",
      });
      link.download = fileName;
      link.href = URL.createObjectURL(blob);
      link.click();
    };

    workbook.xlsx.writeBuffer().then((buffer) => {
      writeFile(sheetName, buffer);
    });
  };
  const store = useSelector((state) => state.auth.storeData);
  if (store.length === 0) {
    return <button> Excel</button>;
  } else {
    return (
      <button
        onClick={() => {
          exportToExcel(store);
        }}
      >
        Excel
      </button>
    );
  }
};

export default ExportStoreToExcel;
