import Utils from '../../src'

describe('tree', () => {

  let datas = [
    { parentId: '-1', nodeId: '1', label: '1' },
    { parentId: '1', nodeId: '1.1', label: '1.1' },
    { parentId: '1', nodeId: '1.2', label: '1.2' },
    { parentId: '-1', nodeId: '2', label: '2' },
    { parentId: '2', nodeId: '2.1', label: '2.1' },
    { parentId: '2', nodeId: '2.2', label: '2.2' },
    { parentId: '-1', nodeId: '3', label: '3' },
    { parentId: '3', nodeId: '3.1', label: '3.1' },
    { parentId: '3', nodeId: '3.2', label: '3.2' },
    { parentId: '-1', nodeId: '4', label: '4' },
    { parentId: '4', nodeId: '4.1', label: '4.1' },
    { parentId: '4', nodeId: '4.2', label: '4.2' },
  ]

  let treeData = []
  let treeUtil
  beforeAll(() => {
    treeUtil = new Utils.TreeUtils()
  })

  afterAll(() => {
    datas = null
    treeData = null
    treeUtil = null
  })
  
  it('init', () => {
    expect(treeUtil instanceof Utils.TreeUtils).toBe(true)
  })

  it('shink', () => {
    treeData = treeUtil.shrink(datas, {
      parent: '-1',
      props: {
        pid: 'parentId',
        id: 'nodeId',
        children: 'children'
      }
    })
    expect(treeData.length).toBe(4)
    const first = treeData[0]
    expect(first.nodeId).toBe('1')
    expect(toString.apply(first.children)).toBe('[object Array]')
    expect(first.children.length).toBe(2)
    const last = treeData[treeData.length - 1]
    expect(last.nodeId).toBe('4')
    expect(last.children.length).toBe(2)
    expect(last.children[0].children).toBe(undefined)
  })

  it('path', () => {
    const paths = treeUtil.path(treeData, '2.2', 'nodeId')
    expect(paths.length).toBe(2)
    const first = paths[0]
    const last = paths[1]
    expect(first.nodeId).toBe('2')
    expect(last.nodeId).toBe('2.2')
  })

  it('deepGet', () => {
    const node = treeUtil.deepGet(treeData, '2.2', 'nodeId')
    expect(node.nodeId).toBe('2.2')
    const otherNode = treeUtil.deepGet(treeData, '2.2', (item, value) => {
      if (item.nodeId === value) return item
    })
    expect(otherNode.nodeId).toBe('2.2')
  })
  
  
})