import React, { useState } from 'react';
import { Tag, Input } from 'concis';

export default function index1() {
  const [isExit, setIsExit] = useState(false);
  const [tagList, setTagList] = useState(['Tag 1', 'Tag 2', 'Tag 3']);
  const [addInputValue, setAddInputValue] = useState('');
  const tagStyle = { margin: '0 12px' };

  return (
    <div style={{ display: 'flex' }}>
      {tagList.map((tag, index) => {
        return (
          <Tag style={tagStyle} key={index} closeable>
            {tag}
          </Tag>
        );
      })}
      {isExit ? (
        <Input
          width={100}
          handleIptChange={(value: string) => setAddInputValue(value)}
          handleKeyDown={(e: any) => {
            if (e.nativeEvent.keyCode === 13) {
              setIsExit(false);
              tagList.push(addInputValue);
              setTagList(tagList);
              setAddInputValue('');
            }
          }}
        />
      ) : (
        <Tag style={tagStyle} clickCallback={() => setIsExit(true)}>
          Add New Tag
        </Tag>
      )}
    </div>
  );
}
