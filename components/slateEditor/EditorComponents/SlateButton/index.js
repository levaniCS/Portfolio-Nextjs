import React, { forwardRef } from 'react'
import { css, cx } from '@emotion/css'

const Button = forwardRef(({className, active, reversed,...props }, ref) => (
    <span
      {...props}
      ref={ref}
      className={cx(
        className,
        css`
          cursor: pointer;
          color: ${active ? '#000' : '#aaa' };
        `
      )}
    />
  )
)

export default Button