import React from 'react';

import { Layout } from '../components/Layout';

const Posts= () => (
  <Layout title="About">
    <h1>Posts</h1>
    <main>
      {posts.map((post, i) => (
        <article key={i}>
          <h3>{post.title}</h3>
          <p>
            {post.content}
          </p>
        </article>
      ))}
    </main>  
  </Layout>
);

export default Posts;

const posts = [
  { title: 'sup', content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus suscipit eveniet repudiandae totam nobis et dolorum consectetur incidunt sapiente ipsa.'},
  { title: 'sup', content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus suscipit eveniet repudiandae totam nobis et dolorum consectetur incidunt sapiente ipsa.'},
  { title: 'sup', content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus suscipit eveniet repudiandae totam nobis et dolorum consectetur incidunt sapiente ipsa.'},
  { title: 'sup', content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus suscipit eveniet repudiandae totam nobis et dolorum consectetur incidunt sapiente ipsa.'},
];

