import React from 'react'
import { PanelBlock, PanelIcon, Checkbox } from 'bloomer'

class CardBlock extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      checked: false,
    }
  }

  handleChange(event) {
    this.setState({ checked: event.target.checked }, () => {
      console.log(this.state.checked)
    })
  }

  render() {
    const textColor = this.state.checked ? '#62c462' : '#9d9d9d'
    return (
      <PanelBlock tag="label" style={{ color: textColor }}>
        <Checkbox
          isHidden
          style={{ display: 'hidden' }}
          onChange={this.handleChange.bind(this)}
        />
        <PanelIcon
          style={{ color: textColor }}
          className={`ss ss-${this.props.set}`}
        />
        {this.props.name}
      </PanelBlock>
    )
  }
}

// const CardBlock = ({ name, set, onChange }) => (
//   <PanelBlock tag="label">
//     <Checkbox isHidden style={{ display: 'hidden' }} onChange={onChange} />
//     <PanelIcon className={`ss ss-${set}`} />
//     {name}
//   </PanelBlock>
// )

export default CardBlock
