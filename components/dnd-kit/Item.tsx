import { UniqueIdentifier } from '@dnd-kit/core'

interface IItem {
  id: UniqueIdentifier
}
 const Item = ({ id }: IItem) => {
  const style = {
    width: '100%',
    height: 50,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: '1px solid black',
    margin: '10px 0',
    background: 'white',
  }

  return <div style={style}>{id}</div>
}
export default Item


