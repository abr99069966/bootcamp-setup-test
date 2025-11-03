import {
  ClientSideRowModelApiModule,
  ClientSideRowModelModule,
  GridApi,
  GridOptions,
  ModuleRegistry,
  NumberEditorModule,
  RenderApiModule,
  RowApiModule,
  RowSelectionMode,
  RowSelectionModule,
  ValidationModule,
  createGrid,
} from "ag-grid-community";
import {
  ColumnMenuModule,
  ColumnsToolPanelModule,
  ContextMenuModule,
  RowGroupingModule,
  SelectEditorModule,
  TextEditorModule,
  RowStyleModule
} from "ag-grid-enterprise";

import { IOlympicData } from "./interfaces";
import { CustomEditButtonComponent } from "./customEditButton";
import { CustomDeleteButtonComponent } from "./customDeleteButton";

ModuleRegistry.registerModules([
  ClientSideRowModelApiModule,
  ClientSideRowModelModule,
  ColumnsToolPanelModule,
  ColumnMenuModule,
  ContextMenuModule,
  NumberEditorModule,
  RenderApiModule,
  RowApiModule,
  RowSelectionModule,
  RowGroupingModule,
  RowStyleModule,
  SelectEditorModule,
  TextEditorModule,
  ...(process.env.NODE_ENV !== "production" ? [ValidationModule] : []),
]);

let gridApi: GridApi<IOlympicData>;

const gridOptions: GridOptions<IOlympicData> = {
  columnDefs: [
    { field: "athlete", minWidth: 150 },
    { field: "age", maxWidth: 90 },
    // { field: "country", minWidth: 150 },
    // { field: "year", maxWidth: 90 },
    { field: "date", minWidth: 150 },
    // { field: "sport", minWidth: 150 },
    { field:"edit", cellRenderer: CustomEditButtonComponent, editable: false },
    { field:"delete", cellRenderer: CustomDeleteButtonComponent, editable: false }
    // { field: "gold" },
    // { field: "silver" },
    // { field: "bronze" },
    // { field: "total" },
  ],
  defaultColDef: {
    flex: 1,
    minWidth: 100,
    editable: (params) => isEditable(params)
  },
  // rowSelection: {
  //   mode: "singleRow",
  //   checkboxes: (params) => {
  //     return params.data['age'] && params.data['age'] >20
  //   },
  //   hideDisabledCheckboxes: true
  // },
  editType: "fullRow",
  suppressClickEdit: true,
  getRowStyle: params => {
        if (!isEditable(params)) {
            return { background: 'lightgray' };
        }
    },
  onCellEditingStopped: params => {
    params.api.redrawRows();
  }
};

const gridDiv = document.querySelector<HTMLElement>("#myGrid")!;
gridApi = createGrid(gridDiv, gridOptions);

fetch("https://www.ag-grid.com/example-assets/small-olympic-winners.json")
  .then((response) => response.json())
  .then((data: IOlympicData[]) => gridApi.setGridOption("rowData", data));

function getSelectValue(id: string): RowSelectionMode {
  return (
    (document.querySelector<HTMLSelectElement>(id)
      ?.value as RowSelectionMode) ?? "singleRow"
  );
}

function isEditable(params) {
  return params.data['editable'] === undefined || params.data['editable'] === true;
}

function addSingleRow(editable: boolean, val?: string) {
  gridApi.applyTransaction({
    add: [{
            "athlete": val ?? null,
            "age": null,
            "date":null,
            "editable": editable
          }],
    addIndex: 0
  });
}

function addMultipleRow() {
  addSingleRow(true);
  addSingleRow(true);
  addSingleRow(false, "Example- uneditable row");
}

function updateSelectionOptions() {
  gridApi.setGridOption("rowSelection", {
    mode: getSelectValue("#input-selection-mode"),
  });
}

if (typeof window !== "undefined") {
  // Attach external event handlers to window so they can be called from index.html
  (<any>window).updateSelectionOptions = updateSelectionOptions;
  (<any>window).addSingleRow = addSingleRow;
  (<any>window).addMultipleRow = addMultipleRow;
}
