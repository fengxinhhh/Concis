import React from 'react';
import { act } from '@testing-library/react';
import Tree from '../../../src/Tree';
import type { treeNode } from '../../../src/Tree/interface';
import Enzyme from '../../../../../tests/setup';
import mountTest from '../../../../../tests/mountTest';

const { mount } = Enzyme;

const treeData = [
  {
    title: 'parent1',
    value: '0-0',
    children: [
      {
        title: 'parent 1-0',
        value: '0-0-1',
      },
      {
        title: 'parent 1-1',
        value: '0-0-2',
        children: [
          {
            title: 'leaf2',
            value: '0-0-0-1',
          },
        ],
      },
    ],
  },
  {
    title: 'parent2',
    value: '0-1',
    children: [
      {
        title: 'parent 2-0',
        value: '0-0-3',
      },
    ],
  },
];

mountTest(Tree);

function Demo(props: { avaSearch?: boolean; avaChooseMore?: boolean; defaultOpen?: boolean }) {
  return (
    <Tree
      treeData={treeData}
      avaSearch={props.avaSearch}
      avaChooseMore={props.avaChooseMore}
      defaultOpen={props.defaultOpen}
    />
  );
}

describe('Tree', () => {
  it('test Tree render correctly', () => {
    const component = mount(<Tree treeData={treeData} />);
    expect(component.find('.cocnis-tree-container')).toHaveLength(1);
    expect(component.find('.cocnis-tree-container').at(0).getDOMNode().children.length).toBe(1);
    act(() => {
      component.find('input').simulate('click');
    });
    component.update();
    const container = component.find('.cocnis-tree-container').at(0);
    expect(container.getDOMNode().childNodes[1].className).toBe(
      'tree-select-dialog treeDialog-enter treeDialog-enter-active',
    );
    expect(container.getDOMNode().childNodes[1].childNodes.length).toBe(6);

    const treeNodes: any[] = component
      .find('.cocnis-tree-container')
      .childAt(1)
      .children()
      .at(0)
      .find('.treeNode');
    deep(treeData, 1);
    function deep(data: Array<treeNode>, level: number) {
      const filterNode: HTMLElement[] = [];
      let ix = 0;
      treeNodes.forEach((node) => {
        if (
          node.getDOMNode().style.marginLeft === `${level * 10}px` &&
          (node.getDOMNode().children[1] as HTMLElement).innerHTML === data[ix].title
        ) {
          filterNode.push(node.getDOMNode());
          if (data[ix].children) {
            expect(node.getDOMNode().children[0].getAttribute('aria-label')).toBe('caret-right');
            if ((data[ix].children || []).length > 0) {
              deep(data[ix].children!, data[ix].children![0].value.split('-').length - 1);
            }
          }
          if (data.length > ix + 1) {
            ix++;
          }
        }
      });
      expect(filterNode.length).toBe(data.length);
    }
  });
  it('test tree event callback', () => {
    const chooseCallback = jest.fn();
    const component = mount(<Tree treeData={treeData} chooseCallback={chooseCallback} />);
    const container = component.find('.cocnis-tree-container').at(0);
    act(() => {
      container.find('div').at(1).find('input').at(0).simulate('click');
    });
    component.update();
    const node = container.getDOMNode().children[1].children;
    expect(node[0].children[0].getAttribute('aria-label')).toBe('caret-right');
    expect(node[1].style.height).toBe('0px');
    expect(node[2].style.height).toBe('0px');
    expect(node[3].style.height).toBe('0px');
    expect(node[3].children[0].tagName).toBe('DIV');
    act(() => {
      component
        .find('.cocnis-tree-container')
        .childAt(1)
        .children()
        .at(0)
        .find('.treeNode')
        .at(0)
        .simulate('click');
    });
    component.update();
    expect(node[0].children[0].getAttribute('aria-label')).toBe('caret-down');
    expect(node[1].style.height).toBe('30px');
    expect(node[2].style.height).toBe('30px');
    expect(node[3].style.height).toBe('0px');
    act(() => {
      component
        .find('.cocnis-tree-container')
        .childAt(1)
        .children()
        .at(0)
        .find('.treeNode')
        .at(2)
        .simulate('click');
    });
    component.update();
    expect(node[3].style.height).toBe('30px');
    act(() => {
      component
        .find('.cocnis-tree-container')
        .childAt(1)
        .children()
        .at(0)
        .find('.treeNode')
        .at(3)
        .simulate('click');
    });
    component.update();
    expect(component.find('input').getDOMNode().value).toBe('leaf2');
    // expect(container.children().at(1).children().at(0).exists()).toBe(false);
    expect(chooseCallback).toBeCalled();
    act(() => {
      component
        .find('.cocnis-tree-container')
        .childAt(0)
        .at(0)
        .find('span')
        .at(0)
        .simulate('click');
    });
    component.update();
    expect(component.find('input').getDOMNode().value).toBe('');
    expect(chooseCallback).toBeCalled();
  });
  it('test tree props', () => {
    const component = mount(<Demo avaSearch avaChooseMore defaultOpen />);
    // act(() => {
    //   component.setProps({
    //     avaSearch: true,
    //     avaChooseMore: true,
    //     defaultOpen: true,
    //   });
    // });
    expect(component.props('avaChooseMore')).toBeTruthy();
    expect(component.props('avaSearch')).toBeTruthy();
    expect(component.props('defaultOpen')).toBeTruthy();
    component.update();
    const container = component.find('.cocnis-tree-container').at(0);
    act(() => {
      container.find('div').at(1).find('input').at(0).simulate('click');
    });
    component.update();
    expect(
      component
        .find('.cocnis-tree-container')
        .childAt(1)
        .children()
        .at(0)
        .find('span[aria-label="caret-right"]'),
    ).toHaveLength(0);
    expect(
      component
        .find('.cocnis-tree-container')
        .childAt(1)
        .children()
        .at(0)
        .find('span[aria-label="caret-down"]'),
    ).toHaveLength(3);
    // act(() => {
    //   container.find('input').simulate('change', {
    //     target: { value: '2' },
    //   });
    // });
    // component.update();
    // const treeNodes: any[] = component
    //   .find('.cocnis-tree-container')
    //   .childAt(1)
    //   .children()
    //   .at(0)
    //   .find('.treeNode');
  });
});
