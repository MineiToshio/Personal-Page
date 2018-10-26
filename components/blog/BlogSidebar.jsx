import React from 'react';
import RecentPost from './RecentPost';
import TagLink from '../widgets/TagLink';

export default class extends React.Component {
  render () {
    const { recentPosts } = this.props;

    return (
      <div className="sidebar">
        <div className="recent">
          <h3>Recent Posts</h3>
          {
            recentPosts.map((post) => (
              <RecentPost key={post.id} {...post}/>
            ))
          }
        </div>
        <div className="categories">
          <h3>Categories</h3>
          <ul>
            <li><a href="#">C#</a></li>
            <li><a href="#">javascript</a></li>
            <li><a href="#">CSS</a></li>
          </ul>
        </div>
        <div className="tags">
          <h3>Tags</h3>
          <TagLink tag="work" />
          <TagLink tag="vs code" />
          <TagLink tag="startup" />
          <TagLink tag="programming" />
        </div>

        <style jsx>{`
          .sidebar {
            margin: 5px;
            display: grid;
            align-content: baseline;
            grid-template-areas: "recent"
                                 "categories"
                                 "tags";
          }
          .recent {
            grid-area: recent;
          }
          .categories {
            grid-area: categories;
          }
          .categories a:hover {
            filter: brightness(85%);
          }
          .tags {
            grid-area: tags;
          }
          .sidebar div {
            margin-bottom: 25px;
          }
          h3 {
            margin: 0;
            margin-bottom: 18px;
          }
          ul {
            padding: 0;
            margin: 0;
            list-style-type: none;
            font-size: 15px;
          }
          li {
            margin-bottom: 8px;
          }
          a {
            text-decoration: none;
            color: var(--green);
            font-size: 15px;
          }
          @media screen and (max-width:790px) {
            .sidebar {
              grid-template-columns: repeat(3, 1fr);
              grid-template-areas: "recent categories tags";
              grid-gap: 10px;
            }
            .sidebar div {
              margin-bottom: 15px;
            }
          }
          @media screen and (max-width:700px) {
            .sidebar {
              grid-template-columns: repeat(2, 1fr);
              grid-template-areas: "recent recent"
                                  "categories tags";
            }
          }
        `}</style>
      </div>
    )
  }
}