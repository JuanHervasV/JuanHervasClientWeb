import React, { useState, useEffect } from "react";
import { Spin, List, notification } from "antd";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import moment from "moment";
import queryString from "query-string";
import Pagination from "../../../Pagination";
import { getPostsApi } from "../../../../api/post";
import PortfolioLogo from "../../../../assets/img/png/portfolioimg.png";

import "moment/locale/es";

import "./PostListWeb.scss";

export default function PostsListWeb(props) {
  const { location, history } = props;
  const [posts, setPosts] = useState(null);
  const { page = 1 } = queryString.parse(location.search);

  useEffect(() => {
    getPostsApi(12, page)
      .then((response) => {
        if (response?.code !== 200) {
          notification["warning"]({
            message: response.message,
          });
        } else {
          setPosts(response.posts);
        }
      })
      .catch(() => {
        notification["error"]({
          message: "Error del servidor.",
        });
      });
  }, [page]);

  if (!posts) {
    return (
      <Spin tip="Cargando" style={{ width: "100%", padding: "200px 0" }} />
    );
  }

  return (
    <>
      <Helmet>
        <title>Portfolio | Juan Hervas</title>
      </Helmet>
      <div className="posts-list-web">
        <img src={PortfolioLogo} alt="Juan Hervas" />
        <List
          dataSource={posts.docs}
          renderItem={(post) => <Post post={post} />}
        />
        <Pagination posts={posts} location={location} history={history} />
      </div>
    </>
  );
}

function Post(props) {
  const { post } = props;
  const day = moment(post.date).format("DD");
  const month = moment(post.date).format("MMMM");

  return (
    <List.Item className="post">
      <div className="post__date">
        <span>{day}</span>
        <span>{month}</span>
      </div>
      <List.Item.Meta
        title={
          <Link to={`blog/${post.url}`}>
            <div className="titulosposts">{post.title}</div>
          </Link>
        }
      />
    </List.Item>
  );
}
