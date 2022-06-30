import { IRowReport } from "./rowReport.types";
import { IStatus } from "./status.types";

export interface IReportGenerator {
    generateRowReports: (statuses: IStatus[]) => Promise<IRowReport[]>
}