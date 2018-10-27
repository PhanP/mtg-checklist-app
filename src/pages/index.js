import React from 'react'
import { graphql } from 'gatsby'
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

export const query = graphql`
  {
    allGoogleSheetCardsRow {
      edges {
        node {
          id
          name
          rarity
          set
          isOwned
        }
      }
    }
  }
`

const IndexPage = ({ data }) => {
  console.log(data)
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
        <PanelBlock>
          <Progress isSize="small" isColor="success" value={15} max={100} />
        </PanelBlock>
        {data.allGoogleSheetCardsRow.edges.map(({ node }) => (
          <CardBlock key={node.id} card={node} />
        ))}
      </Panel>
    </Layout>
  )
}

export default IndexPage
