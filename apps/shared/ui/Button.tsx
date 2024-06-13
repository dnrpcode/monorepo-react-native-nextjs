import React from 'react'
import { Button } from 'tamagui'

// interface IButtonShared extends typeof Button{
//     // children
// }

export default function ButtonShared() {
  return (
    <Button  size="$3" variant="outlined">
          Outlined
    </Button>
  )
}
