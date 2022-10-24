import React from 'react';
import { Zoombox, Divider } from 'concis';

export default function index1() {
  return (
    <div>
      <Zoombox style={{ textAlign: 'center', padding: 10 }} notAllowed>
        <p>Concis is a component library for quickly building React applications</p>
        <Divider />
        <p>
          This component library was first developed by individuals, and was later joined by some
          interested friends in the community, and it will get better and better.
        </p>
        <Divider>Concis</Divider>
        <p>If you are interested in Concis, please leave a message with us in Github.</p>
      </Zoombox>
    </div>
  );
}
