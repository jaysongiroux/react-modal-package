# react-modal-package
Package that contains multiple modals to be used within a react environment 

# SimpleModal
### Ex.
```
<SimpleModal 
    backgroundDim={ true }
    title="This is the modal body"
    close = { () => {
        setSimpleModalOpen( false )
    }}
    done = { () => {
        setSimpleModalOpen( false )
    }}
    open={ SimpleModalOpen }
    size={ "medium" }
/>
```
## Props
| prop      | type | Description     |
| :---        |    :----:   |          ---: |
| backgroundDim      | bool       | dims the background when modal is open   |
| title   | string/ react component        | title set at the top of the modal      |
| body   | string/react component        | body set within the body of the modal|
| done   | callback        | When set, a done button will appear that will have an assigned callback |
| close   | callback        | function to close modal      |
| open   | bool        | determines if the modal is open|
| size   | string        | can be set to `small`, `medium`, `large`, default: `large` |


# JsonModal
### Ex.
```
<JsonModal 
    contents={contents}
    backgroundDim={true}
    close={() => {
        toggleJsonModal(false)
    }}  
    done={()=>{
        toggleJsonModal(false)
    }}
    open={jsonModalOpen}
    size={jsonModalSize}
/>
```

### Contents Ex.
```
const contents = ({
  title: "json modal title",
  body:"this is the modal body"
})
```

## Props
| prop      | type | Description     |
| :---        |    :----:   |          ---: |
| backgroundDim      | bool       | dims the background when modal is open   |
| contents   | json object        | body set within the body of the modal|
| done   | callback        | When set, a done button will appear that will have an assigned callback |
| close   | callback        | function to close modal      |
| open   | bool        | determines if the modal is open|
| size   | string        | can be set to `small`, `medium`, `large`, default: `large` |



## Features
- Mobile and desktop friendly
- Lightweight with no dependancies
- Simple to re-stylize
- Easy to inset components within the modal (SimpleModal)
- Easy to deploy