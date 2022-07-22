import React from 'react';
import Badge from '../../../src/Badge/index';
import Enzyme from '../setup';
import mountTest from '../mountTest';
import { act } from 'react-dom/test-utils';

const { shallow, mount } = Enzyme;

mountTest(Badge);

describe(`badge`, () => {});
