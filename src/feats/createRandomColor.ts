
const defaultColor = ["#abf8cc","#fde4cf","#ffcfd2","#f1c0e8","#cfbaf0","#a3c4f3","#90dbf4","#8eecf5","#98f5e1","#b9fbc0"]
const defaultColor2 = ["#aac1ca","#ecd3beaa","#eebec1aa","#d0a0d8","#ae9ae0","#93a4e3","#70cbf4","#6ebce5","#78e5c1","#99dba0"]

export type CreateRandomColorProps = {
  labels: Array<any>
  config?: {
    isDefault: boolean, colorSet?: number
  }
}

function createRandomColor ({labels, config = {isDefault: false, colorSet: 1}}: CreateRandomColorProps){
  if(config.isDefault){
    if(config?.colorSet === 1) return defaultColor
    if(config?.colorSet === 2) return defaultColor2
  } else {
    return labels.map(()=> '#' + Math.floor(Math.random()*16777215).toString(16))
  }
}

export default createRandomColor
