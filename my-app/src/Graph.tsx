import percentile from 'percentile';
import { LineChart, Line, CartesianGrid, YAxis, XAxis, Tooltip, Legend, Text, ResponsiveContainer } from 'recharts';
import { CompanySalaryData } from './interfaces/company-salary-data';

interface GraphProps {
    companySalaryData: CompanySalaryData,
    useTotalCompensation: boolean
}

const Graph: React.FC<GraphProps> = ({ companySalaryData, useTotalCompensation }) => {

    const strokeWidth = 2;

    const computePercentiles = (companySalaryData: CompanySalaryData) => {
        const percentilesToCalculate = [50, 70, 80, 90];

        const tierOnePercentiles = percentile(
            percentilesToCalculate,
            useTotalCompensation ? companySalaryData.tierOneData.map(x => x.totalCompensationNumber) :
                companySalaryData.tierOneData.map(x => x.baseSalaryNumber)
        ) as number[];

        const tierTwoPercentiles = percentile(
            percentilesToCalculate,
            useTotalCompensation ? companySalaryData.tierTwoData.map(x => x.totalCompensationNumber) :
                companySalaryData.tierTwoData.map(x => x.baseSalaryNumber)
        ) as number[];

        const tierThreePercentiles = percentile(
            percentilesToCalculate,
            useTotalCompensation ? companySalaryData.tierThreeData.map(x => x.totalCompensationNumber) :
                companySalaryData.tierThreeData.map(x => x.baseSalaryNumber)
        ) as number[];

        return [
            {
                "tier": "tier one",
                "50": tierOnePercentiles[0],
                "70": tierOnePercentiles[1],
                "80": tierOnePercentiles[2],
                "90": tierOnePercentiles[3],
            },
            {
                "tier": "tier two",
                "50": tierTwoPercentiles[0],
                "70": tierTwoPercentiles[1],
                "80": tierTwoPercentiles[2],
                "90": tierTwoPercentiles[3],
            },
            {
                "tier": "tier three",
                "50": tierThreePercentiles[0],
                "70": tierThreePercentiles[1],
                "80": tierThreePercentiles[2],
                "90": tierThreePercentiles[3],
            },
        ]
    }

    return (
        <>
            <ResponsiveContainer width="100%" height={450}>

                <LineChart width={1000} height={250} data={computePercentiles(companySalaryData)}
                    margin={{ top: 5, right: 40, left: 40, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="tier" angle={-45} textAnchor="end" height={100} />
                    <YAxis label={{
                        content: (
                            <Text x={0} y={0} dx={20} dy={225} angle={-90}>
                                Salary (Euro)
                            </Text>
                        ),
                    }} type="number" domain={['dataMin - 10000', 'dataMax + 10000']} />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="90" stroke="#EE2677" strokeWidth={strokeWidth}/>
                    <Line type="monotone" dataKey="80" stroke="#82ca9d" strokeWidth={strokeWidth}/>
                    <Line type="monotone" dataKey="70" stroke="#8884d8" strokeWidth={strokeWidth}/>
                    <Line type="monotone" dataKey="50" stroke="#E86252" strokeWidth={strokeWidth}/>
                </LineChart>
            </ResponsiveContainer>
        </>
    )
}

export default Graph;