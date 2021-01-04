import React from 'react';
import { Page } from '@shopify/polaris';
import { Provider, ResourcePicker } from '@shopify/app-bridge-react';

class Index extends React.Component {
  state = { open: false };

  handleSelection(resources) {
    const idFromResources = resources.selection.map((product) => {
      return product.id;
    });

    this.setState({ open: false });
    console.log('selected products', idFromResources);
  }

  render() {
    return (
      <Page
        title='Product Selector'
        primaryAction={{
          content: 'Select products',
          onAction: () => this.setState({ open: true }),
        }}
      >
        <ResourcePicker
          resourceType='Product'
          open={this.state.open}
          onCancel={() => this.setState({ open: false })}
          onSelection={(resources) => {
            this.handleSelection(resources);
          }}
        />
      </Page>
    );
  }
}

export default Index;
