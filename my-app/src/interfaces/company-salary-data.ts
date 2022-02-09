import { SalaryDataPoint } from "./salary-data-point";

export interface CompanySalaryData {
    tierOneData: SalaryDataPoint[],
    tierTwoData: SalaryDataPoint[],
    tierThreeData: SalaryDataPoint[]
}