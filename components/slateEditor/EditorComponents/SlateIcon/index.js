import React, { forwardRef } from 'react'
import { css, cx } from '@emotion/css'


const Icon = forwardRef(({ className, ...props }, ref) => (
    <span
      {...props}
      ref={ref}
      className={cx(
        'material-icons',
        className,
        css`
          font-size: 18px;
          margin: 10px;
          vertical-align: text-bottom;
        `
      )}
    />
  )
)

export default Icon