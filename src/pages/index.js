import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import {
  Box,
  Panel,
  PanelHeading,
  PanelBlock,
  PanelIcon,
  Icon,
  Checkbox,
  Control,
  Input,
  Button,
} from 'bloomer'

const IndexPage = () => (
  <Layout>
    <Box>Hello World!</Box>
    <Link to="/page-2/">Go to page 2</Link>
    <Panel>
      <PanelHeading>Repositories</PanelHeading>
      <PanelBlock>
        <Control hasIcons="left">
          <Input placeholder="Search" />
          <Icon isSize="small" isAlign="left">
            <span className="fa fa-search" aria-hidden="true" />
          </Icon>
        </Control>
      </PanelBlock>
      <PanelBlock isActive>
        <PanelIcon className="fa fa-book" />
        Bloomer
      </PanelBlock>
      <PanelBlock>
        <PanelIcon className="fa fa-code-fork" />
        RxJS
      </PanelBlock>
      <PanelBlock>
        <PanelIcon className="fa fa-code-fork" />
        Webpack
      </PanelBlock>
      <PanelBlock>
        <PanelIcon className="ss ss-ktk" />
        Typescript
      </PanelBlock>
      <PanelBlock tag="label">
        <Checkbox> Remember me</Checkbox>
      </PanelBlock>
      <PanelBlock>
        <Button isOutlined isFullWidth isColor="primary">
          {' '}
          Reset all filters
        </Button>
      </PanelBlock>
    </Panel>
  </Layout>
)

export default IndexPage
