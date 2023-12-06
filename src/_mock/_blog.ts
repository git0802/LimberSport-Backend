// config
import { HOST_API } from 'src/config-global';
// utils
import uuidv4 from 'src/utils/uuidv4';
// _mock
import { _mock } from './_mock';
import { _tags } from './assets';

// ----------------------------------------------------------------------

// Made with React Quill
const CONTENT = `

<h1>Heading H1</h1><br/><br/>

<h2>Heading H2</h2><br/><br/>

<h3>Heading H3</h3><br/><br/>

<h4>Heading H4</h4><br/><br/>

<h5>Heading H5</h5><br/><br/>

<h6>Heading H6</h6><br/><br/>

<br/><br/><hr><br/><br/>

<h3>Paragraph</h3><br/>


<p>What is MTAweb Directory?</p><br/>

<p>So you have heard about this site or you have been to it, but you cannot figure out what it is or what it can do. MTA web directory is the simplest way in which one can bid on a link, or a few links if they wish to do so. The link directory on MTA displays all of the links it currently has, and does so in alphabetical order, which makes it much easier for someone to find what they are looking for if it is something specific and they do not want to go through all the other sites and links as well. It allows you to start your bid at the bottom and slowly work your way to the top of the list.</p><br/>

<p>With a very low costing starting bid of just $1, you are guaranteed to have a spot in MTA’s successful directory list. When you would like to increase your bid to one of the top positions, you have to know that this would be a wise decision to make as it will not only get your link to be at a higher point in the directory but it will also give you a chance to have your site advertised with the rest of the top ten on the home page of the website. This means that when visitors come to MTAweb.com, your site will be one of the first things they see. In other words, you stand a great chance at getting a comeback to your site sooner than you thought.</p><br/>

<p><strong>This is strong text.</strong></p><br/>

<p><em>This is italic text</em></p><br/>

<p><u>This is underline text</u></p>

<br/><br/><hr><br/><br/>

<h3>Unordered list</h3><br/>

<ul>
    <li>Implements
        <a href="https://docs-minimals.vercel.app/introduction">This is an external link</a>
    </li>
    <li>Implements
        <a href="/dashboard/blog">This is an inside link</a>
    </li>
    <li>Renders actual, "native" React DOM elements</li>
    <li>Allows you to escape or skip HTML (try toggling the checkboxes above)</li>
    <li>If you escape or skip the HTML, no dangerouslySetInnerHTML is used! Yay!</li>
</ul>

<br/><br/><hr><br/><br/>

<h3>Ordered list</h3>

<br/>
<ol>
    <li>Analysis</li>
    <li>Design</li>
    <li>Implementation</li>
</ol>

<br/><br/><hr><br/><br/>

<h3>Blockquote</h3>
<br/>

<blockquote>Life is short, Smile while you still have teeth!&nbsp;</blockquote>

<br/><br/><hr><br/><br/>

<h3>Block Code</h3>

<br/>

<pre class="ql-syntax" spellcheck="false"><span class="hljs-keyword">import</span> <span class="hljs-title class_">React</span> <span class="hljs-keyword">from</span> <span class="hljs-string">'react'</span>;
<span class="hljs-keyword">import</span> <span class="hljs-title class_">ReactDOM</span> <span class="hljs-keyword">from</span> <span class="hljs-string">'react-dom'</span>;
<span class="hljs-keyword">import</span> <span class="hljs-title class_">ReactMarkdown</span> <span class="hljs-keyword">from</span> <span class="hljs-string">'react-markdown'</span>;
<span class="hljs-keyword">import</span> rehypeHighlight <span class="hljs-keyword">from</span> <span class="hljs-string">'rehype-highlight'</span>;

<span class="hljs-title class_">ReactDOM</span>.<span class="hljs-title function_">render</span>(
  <span class="hljs-tag">&lt;<span class="hljs-name">ReactMarkdown</span> <span class="hljs-attr">rehypePlugins</span>=<span class="hljs-string">{[rehypeHighlight]}</span>&gt;</span>{'# Your markdown here'}<span class="hljs-tag">&lt;/<span class="hljs-name">ReactMarkdown</span>&gt;</span>,
  <span class="hljs-variable language_">document</span>.<span class="hljs-title function_">querySelector</span>(<span class="hljs-string">'#content'</span>)
);
</pre>

<br/>

<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>

<br/>
<br/>
<p>Why do we use it?</p>
<br/>
<br/>

<p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>

<br/>
<br/>
<p>
<img src=${HOST_API}/assets/images/cover/cover_5.jpg />
</p>
<br/>
<br/>

<p>
    It is important that you buy links because the links are what get you the results that you want. The popularity of the links that are listed in the MTA directory is in fact one of the most important factors in the performance of the search engine. Links are important and this is why you have to purchase a link in order to bid on something and the best part is that a link will only cost you $1, which is nothing compared to what you would pay if you decided to do it through any other company or website.
</p>

<br/>
<br/>
<p>
    <img src=${HOST_API}/assets/images/cover/cover_14.jpg />
</p>
<br/>
<br/>
`;

const USERS = [...Array(12)].map((_, index) => ({
  id: _mock.id(index),
  name: _mock.fullName(index),
  avatarUrl: _mock.image.avatar(index),
}));

const COMMENTS = [
  {
    id: uuidv4(),
    name: USERS[0].name,
    avatarUrl: USERS[0].avatarUrl,
    message: _mock.sentence(1),
    postedAt: _mock.time(1),
    users: [USERS[0], USERS[1], USERS[2]],
    replyComment: [
      {
        id: uuidv4(),
        userId: USERS[1].id,
        message: _mock.sentence(2),
        postedAt: _mock.time(2),
      },
      {
        id: uuidv4(),
        userId: USERS[0].id,
        message: _mock.sentence(3),
        tagUser: USERS[1].name,
        postedAt: _mock.time(3),
      },
      {
        id: uuidv4(),
        userId: USERS[2].id,
        message: _mock.sentence(4),
        postedAt: _mock.time(4),
      },
    ],
  },
  {
    id: uuidv4(),
    name: USERS[4].name,
    avatarUrl: USERS[4].avatarUrl,
    message: _mock.sentence(5),
    postedAt: _mock.time(5),
    users: [USERS[5], USERS[6], USERS[7]],
    replyComment: [
      {
        id: uuidv4(),
        userId: USERS[5].id,
        message: _mock.sentence(6),
        postedAt: _mock.time(6),
      },
      {
        id: uuidv4(),
        userId: USERS[6].id,
        message: _mock.sentence(7),
        postedAt: _mock.time(7),
      },
      {
        id: uuidv4(),
        userId: USERS[7].id,
        message: _mock.sentence(8),
        postedAt: _mock.time(8),
      },
    ],
  },
  {
    id: uuidv4(),
    name: USERS[8].name,
    avatarUrl: USERS[8].avatarUrl,
    message: _mock.sentence(9),
    postedAt: _mock.time(9),
    users: [],
    replyComment: [],
  },
  {
    id: uuidv4(),
    name: USERS[9].name,
    avatarUrl: USERS[9].avatarUrl,
    message: _mock.sentence(10),
    postedAt: _mock.time(10),
    users: [],
    replyComment: [],
  },
];

export const _posts = [...Array(19)].map((_, index) => {
  const publish = index % 3 ? 'published' : 'draft';

  const metaKeywords = _tags.slice(8, 11);

  return {
    id: _mock.id(index),
    publish,
    metaKeywords,
    content: CONTENT,
    comments: COMMENTS,
    tags: _tags.slice(0, 5),
    metaTitle: 'Minimal UI Kit',
    createdAt: _mock.time(index),
    title: _mock.postTitle(index),
    coverUrl: _mock.image.cover(index),
    totalViews: _mock.number.nativeL(index),
    totalShares: _mock.number.nativeL(index + 2),
    totalComments: _mock.number.nativeL(index + 1),
    totalFavorites: _mock.number.nativeL(index + 3),
    metaDescription: 'The starting point for your next project with Minimal UI Kit',
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. `,
    author: {
      name: _mock.fullName(index),
      avatarUrl: _mock.image.avatar(index),
    },
    favoritePerson: [...Array(20)].map((_, index) => ({
      name: _mock.fullName(index),
      avatarUrl: _mock.image.avatar(index),
    })),
  };
});
