import { useState } from "react";
import { Checkbox, CheckboxProps, Dropdown, DropdownProps } from "semantic-ui-react";
import { DataService } from "./data-service";
import { SeniorityLevels } from "./enums/seniority-levels-enum";
import Graph from "./Graph";
import { CompanySalaryData } from "./interfaces/company-salary-data";

interface CompensationDataVisualizationProps {

}

const CompensationDataVisualization: React.FC<CompensationDataVisualizationProps> = ({ }) => {
    const dataService = new DataService();
    const [seniorityFilterOption, setSeniorityFilterOption] = useState<SeniorityLevels>(SeniorityLevels.SENIOR);
    const [showTotalCompensation, setShowTotalCompensation] = useState<boolean>(false);

    const renderTotalCompensationToggle = () => {
        return (
            <Checkbox
                toggle
                label="Include bonuses/equity/perks"
                defaultChecked={showTotalCompensation}
                onChange={(event: React.FormEvent<HTMLInputElement>, data: CheckboxProps) => setShowTotalCompensation(data.checked as boolean)}
            />
        )
    }

    const renderSeniorityDropdown = () => {
        const seniorityOptions = [
            {
                key: 'Junior',
                text: 'Junior',
                value: SeniorityLevels.JUNIOR,
            },
            {
                key: 'Mid',
                text: 'Mid',
                value: SeniorityLevels.MIDLEVEL,
            }, {
                key: 'Senior',
                text: 'Senior',
                value: SeniorityLevels.SENIOR,
            },
            {
                key: 'Above Senior',
                text: 'Above Senior',
                value: SeniorityLevels.ABOVESENIOR,
            },
        ];

        return (
            <Dropdown
                placeholder='Select Seniority'
                icon='filter'
                className='icon'
                labeled
                button
                floating
                onChange={(event: React.SyntheticEvent<HTMLElement, Event>, data: DropdownProps) => setSeniorityFilterOption(data.value as SeniorityLevels)}
                defaultValue={seniorityFilterOption}
                options={seniorityOptions}
            />
        )
    }

    const loadData = (): CompanySalaryData => {
        return dataService.loadData(seniorityFilterOption);
    }

    return (
        <>
            {renderTotalCompensationToggle()}
            {renderSeniorityDropdown()}
            <Graph companySalaryData={loadData()} useTotalCompensation={showTotalCompensation} />
        </>
    )
}

export default CompensationDataVisualization;