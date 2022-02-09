import { Message } from "semantic-ui-react";

const DataDisclaimerMessage: React.FC = () => {
    return(
        <Message
            warning
            icon='warning sign'
            header='This data was last updated on 8 February 2022'
        />
    )
}

export default DataDisclaimerMessage;