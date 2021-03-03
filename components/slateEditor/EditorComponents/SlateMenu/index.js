import React, { forwardRef } from 'react'
import { css, cx } from '@emotion/css'

const Menu = forwardRef(({ className, ...props }, ref) => (
    <div
      {...props}
      ref={ref}
      className={cx(
        className,
        css`
          & > * {
            display: inline-block;
          }
          & > * + * {
            margin-left: 15px;
          }
        `
      )}
    />
  )
)

export default Menu