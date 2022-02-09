import { Container, Divider, Header } from 'semantic-ui-react';
import './App.css';
import CompensationDataVisualization from './CompensationDataVisualization';
import DataDisclaimerMessage from './DataDisclaimerMessage';
import DataSourceMessage from './DataSourceMessage';

function App() {
  return (
    <div
      style={{ display: "flex", minHeight: "100vh", flexDirection: "column" }}
    >
      <Container textAlign='center'>
        <Header as='h2' color='black'>
          Netherlands Salaries
        </Header>
        <Divider clearing />
        <DataSourceMessage />
        <CompensationDataVisualization />
        <DataDisclaimerMessage />
      </Container>
    </div>
  );
}

export default App;
