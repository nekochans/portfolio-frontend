import React from 'react';
import Link from 'next/link';

export default () => (
  <ul>
    <li>
      <Link href="/a" as="/a">
        <button type="button">a</button>
      </Link>
    </li>
    <li>
      <Link href="/b" as="/b">
        <button type="button">b</button>
      </Link>
    </li>
    <li>
      <Link href="/posts/10000" as="/posts/10000">
        <button type="button">posts</button>
      </Link>
    </li>
  </ul>
);
