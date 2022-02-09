import { data as tierOneDataSource } from './data/tier-1-companies';
import { data as tierTwoDataSource } from './data/tier-2-companies';
import { data as tierThreeDataSource } from './data/tier-3-companies';
import { SeniorityLevels } from './enums/seniority-levels-enum';
import { CompanySalaryData } from "./interfaces/company-salary-data"
import { SalaryDataPoint } from './interfaces/salary-data-point';

interface KeywordFilter {
    keyword: string,
    avoidWords: string[]
}

export class DataService {
    loadData = (seniorityLevel: SeniorityLevels): CompanySalaryData => {

        const tierOneData = this.filterData(tierOneDataSource as SalaryDataPoint[], seniorityLevel);
        const tierTwoData = this.filterData(tierTwoDataSource as SalaryDataPoint[], seniorityLevel);
        const tierThreeData = this.filterData(tierThreeDataSource as SalaryDataPoint[], seniorityLevel);

        return {
            tierOneData,
            tierTwoData,
            tierThreeData
        }
    }

    filterData = (salaryDataPoints: SalaryDataPoint[], seniorityLevel: SeniorityLevels): SalaryDataPoint[] => {
        const keywordFilter = this.seniorityLevelsToKeywordMap(seniorityLevel);

        console.log("unfilterd");
        console.log(salaryDataPoints);

        const filteredData = salaryDataPoints.filter(salaryDataPoint => {
            return this.keywordMatch(salaryDataPoint.title, keywordFilter);
        })

        console.log("filtered")
        console.log(filteredData);

        return filteredData;
    }

    keywordMatch = (searchString: string, keywordFilter: KeywordFilter): boolean => {
        return searchString.toLocaleUpperCase().includes(keywordFilter.keyword.toLocaleUpperCase())
            && keywordFilter.avoidWords.map(avoidWord => !searchString.toLocaleUpperCase().includes(avoidWord.toLocaleUpperCase()))
                .every(Boolean)
    }

    seniorityLevelsToKeywordMap = (seniorityLevel: SeniorityLevels): KeywordFilter => {
        switch (seniorityLevel) {
            case SeniorityLevels.JUNIOR:
                return {
                    keyword: "junior", //intern, trainee
                    avoidWords: [
                        "senior",
                        "owner",        //relates to product owners
                        "manager",      //related to engineering managers
                        "management"    //relates to management
                    ]
                }
            case SeniorityLevels.MIDLEVEL:
                return {
                    keyword: "",
                    avoidWords: [
                        "1",
                        "new",
                        "intern",
                        "trainee",
                        "entry-level",
                        "graduate",
                        "junior",
                        "senior",
                        "lead",
                        "principal",
                        "staff",
                        "director",
                        "architect",
                        "head",
                        "CTO",
                        "VP",
                        "owner",        //relates to product owners
                        "manager",      //related to engineering managers
                        "management"    //relates to management
                    ]
                }
            case SeniorityLevels.SENIOR:
                return {
                    keyword: "senior",
                    avoidWords: [
                        "owner",        //relates to product owners
                        "manager",      //related to engineering managers
                        "management"    //relates to management
                    ]
                }
            default:
                throw Error(`Keyword filter not configured for ${seniorityLevel}`)
        }
    }
}