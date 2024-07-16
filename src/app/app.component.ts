import { Component } from '@angular/core';
import {ColDef, GridReadyEvent} from "ag-grid-community";
import {ITestTData} from "./interfaces";
import {createDataSource} from "./datasource";
import 'ag-grid-enterprise';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'filter-model-issue';

  // Column Definitions: Defines the columns to be displayed.
  colDefs: ColDef<ITestTData>[] = [
    {
      headerName: 'Type',
      field: 'type',
      colId: 'type',
      flex: 1,
      filter: 'agSetColumnFilter',
      filterParams: {
        keyCreator: (params: any) => params.value.id,
        valueFormatter: (params: any) => params.value.name,
        suppressSelectAll: true,
        defaultToNothingSelected: true,
        buttons: ['reset'],
        values: [],
      },
    },
  ];

  onGridReady($event: GridReadyEvent<any>) {
    const dataSource = createDataSource();
    $event.api.setFilterModel(
      {
        type: {
          "values": [
            1,
            2
          ],
          "filterType": "set"
        }
      })
    $event.api.setGridOption('serverSideDatasource', dataSource);
  }
}
