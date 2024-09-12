import BackButton from "@/components/BackButton";
import ListGroupItemLink from "@/components/ListGroupItemLink";
import UpdatePost from "@/components/UpdatePost";
import React from "react";
import { Button, Container, ListGroup, Row } from "react-bootstrap";

const getPostsService = async () => {
  const res = await fetch("http://localhost:4000/posts", {
    next: {
      tags: ["allposts"],
    },
  });
  const posts = await res.json();
  return posts;
};

const Page = async () => {
  const posts = await getPostsService();
  console.log(posts);
  return (
    <Container className="d-flex justify-content-center align-items-center flex-column">
      <BackButton />
      <UpdatePost tag={'allposts'} />
      <Row className="mt-3 w-100">
        <ListGroup className="mt-2">
          {posts.map((p) => (
            <ListGroupItemLink
              key={p.id}
              href={`/posts/${p.id}`}
              title={p.title}
            />
          ))}
        </ListGroup>
      </Row>
    </Container>
  );
};

export default Page;
