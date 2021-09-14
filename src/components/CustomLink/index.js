import React from 'react'

import Link from 'next/link'

export default React.forwardRef((props, ref) => <Link innerRef={ref} {...props}/>)

