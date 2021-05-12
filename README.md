# react-modal-package
Package that contains multiple modals to be used within a react environment 


# SimpleModal
### Ex.
```
<SimpleModal
    backgroundDim={false}
    title={'foo'}
    body={'bar'}
    done={this.doneHandler}
>
```
## Props
| prop      | type | Description     |
| :---        |    :----:   |          ---: |
| backgroundDim      | bool       | dims the background when modal is open   |
| title   | string        | title set at the top of the modal      |
| body   | string        | body set within the body of the modal|
| done   | callback        | When set, a done button will appear that will have an assigned callback |

