import BackButton from "@/components/BackButton";
import ListGroupItemLink from "@/components/ListGroupItemLink";
import React from "react";
import { Button, Container, ListGroup, Row } from "react-bootstrap";

export async function generateStaticParams() {
  return [
    {
      postId: "1",
    },
    {
      postId: "2",
    },
    {
      postId: "3",
    },
    {
      postId: "4",
    },
    {
      postId: "5",
    },
    {
      postId: "6",
    },
    {
      postId: "7",
    },
    {
      postId: "8",
    },
  ];
}
// export const revalidate = 30

const getPostsService = async (postId) => {
  const res = await fetch(`http://localhost:4000/posts/${postId}`, {
    next: {
        revalidate: 20
    }
  });
  const post = await res.json();
  return post;
};


const Page = async ({ params }) => {
  const post = await getPostsService(params.postId);
//   async function create() {
//     "use server";
//   }

//   console.log();
  return (
    <Container className="d-flex justify-content-center align-items-center flex-column">
      <BackButton />
      <Row className="mt-3 w-100">
        <ListGroup className="mt-2">
          <ListGroupItemLink title={post.id} />
          <ListGroupItemLink title={post.body} />
        </ListGroup>
      </Row>
    </Container>
  );
};

export default Page;
