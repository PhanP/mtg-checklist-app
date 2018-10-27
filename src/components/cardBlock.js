import React from 'react'
import { PanelBlock, PanelIcon } from 'bloomer'

const CardBlock = ({ card }) => {
  const textColor = card.isOwned ? '#62c462' : '#9d9d9d'
  return (
    <PanelBlock style={{ color: textColor }}>
      <PanelIcon style={{ color: textColor }} className={`ss ss-${card.set}`} />
      {card.name}
    </PanelBlock>
  )
}

export default CardBlock
