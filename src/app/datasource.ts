import {IServerSideDatasource, IServerSideGetRowsParams, ISetFilter} from "ag-grid-community";
import {ITestTData} from "./interfaces";

export function createDataSource(): IServerSideDatasource {
  return {
    getRows(params: IServerSideGetRowsParams<ITestTData>) {

      const dummyFilterValues = [
        {
          id: 1,
          name: 'filter one'
        },
        {
          id: 2,
          name: 'filter two'
        }
      ]

      params.api.getColumnFilterInstance('type').then(
        (filter: any) => {
          const typedFilter = filter as ISetFilter;
          typedFilter.setFilterValues(dummyFilterValues as any);
        }
      )

      params.success({
        rowData: [
          {
            id: 1,
            type: 'A'
          }
        ],
        rowCount: 1
      })

    }
  }
}
