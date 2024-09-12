"use client";

import { handleUpdateTag } from "@/actions/post";
import React from "react";
import { Button } from "react-bootstrap";

const UpdatePost = ({ tag }) => {
  return (
    <Button onClick={() => handleUpdateTag(tag)}>Update Data : ({tag})</Button>
  );
};

export default UpdatePost;
