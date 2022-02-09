import { Button, Message } from "semantic-ui-react"

const DataSourceMessage: React.FC = () => {
    return(
        <Message info>
        <Message.Header>What is the data source for this?</Message.Header>
        <Message.Content>
          The data comes from techpays.eu which is a site collecting salary information from people in Europe with the goal of changing the information asymmetry for compensation.
        </Message.Content>
        <Message.Content>
          <Button primary as='a' href='https://techpays.eu'>
            Go to TechPays.eu
          </Button>
        </Message.Content>
      </Message>
    )
}

export default DataSourceMessage;