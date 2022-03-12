import { Container, Divider, Header, Image, Icon, Button } from 'semantic-ui-react';
import './App.css';
import CompensationDataVisualization from './CompensationDataVisualization';
import DataDisclaimerMessage from './DataDisclaimerMessage';
import DataSourceMessage from './DataSourceMessage';

const src = '/images/company_tiers.png';

function App() {
  return (
    <div
      style={{ display: "flex", minHeight: "100vh", flexDirection: "column" }}
    >
      <Container textAlign='center' style={{ paddingTop: "30px" }}>
        <Header as='h2' color='black'>
          Netherlands Engineering Salaries
          <Header sub textAlign='right'>
            <Button color='instagram' as='a' href="https://github.com/javaadpatel/tech-pays-eu-graphs/">
              <Icon name='github' /> View source code on GitHub
            </Button>
          </Header>
        </Header>
        <Divider clearing />
        <DataSourceMessage />
        <CompensationDataVisualization />
        <Header as='h2' icon textAlign='center'>
          <Icon name='building outline' circular />
          <Header.Content>What is the difference between company tiers?</Header.Content>
        </Header>
        <Image src={require('./images/company_tiers.png')} size='huge' centered bordered />
        <DataDisclaimerMessage />
      </Container>
    </div>
  );
}

export default App;
