import { Message } from "semantic-ui-react";

const DataDisclaimerMessage: React.FC = () => {
    return(
        <Message
            warning
            icon='warning sign'
            content='
                This data is currently filtering out any data points relating to product owners/managers, engineering managers and management positions.
                This data was last updated on 8 February 2022.
                '
        />
    )
}

export default DataDisclaimerMessage;