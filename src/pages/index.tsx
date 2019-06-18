import React from 'react'
import Link from 'next/link'

export default () => (
  <ul>
    <li>
      <Link href="/a" as="/a">
        <a>a</a>
      </Link>
    </li>
    <li>
      <Link href="/b" as="/b">
        <a>b</a>
      </Link>
    </li>
    <li>
      <Link href="/posts/10000" as="/posts/10000">
        <a>posts</a>
      </Link>
    </li>
  </ul>
)
