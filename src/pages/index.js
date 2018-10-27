import React from 'react'
import Layout from '../components/layout'
import CardBlock from '../components/cardBlock'
import {
  Field,
  Label,
  Panel,
  PanelHeading,
  PanelBlock,
  Control,
  Input,
  Progress,
} from 'bloomer'

const IndexPage = () => {
  return (
    <Layout>
      <Field>
        <Label>Card Filter</Label>
        <Control>
          <Input type="text" placeholder="giant growth set:m12" />
        </Control>
      </Field>
      <Panel>
        <PanelHeading>Cards (3/5)</PanelHeading>
        <PanelBlock><Progress isSize='small' isColor="success" value={15} max={100} /></PanelBlock>
        <CardBlock name="Liliana, The Last Hope" set="soi" />
        <CardBlock name="Liliana, The Last Hope" set="soi" />
        <CardBlock name="Liliana, The Last Hope" set="soi" />
        <CardBlock name="Liliana, The Last Hope" set="soi" />
        <CardBlock name="Liliana, The Last Hope" set="soi" />
      </Panel>
    </Layout>
  )
}

export default IndexPage
