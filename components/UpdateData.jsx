"use client";

import { handleUpdatePath } from "@/actions/users";
import React from "react";
import { Button } from "react-bootstrap";

const UpdateData = ({ path }) => {
  return (
    <Button onClick={() => handleUpdatePath(path)}>
      Update Data : ({path})
    </Button>
  );
};

export default UpdateData;
