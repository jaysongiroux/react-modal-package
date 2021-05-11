import React, { Component } from 'react'

/*
Required Props: 
backgroundDim = bool
title = string
body = string

optional
done = callback
*/
export default class SimpleModal extends Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }

    render(){
        return (
            <div className="SimpleModalContainer">
                {this.props.backgroundDim &&
                    <div className="dimBackground" />
                }
                <div className="SimpleModal">
                    <div className="SimpleModalTitleContainer">
                        <div className="SimpleModalTitle">
                            {this.props.title}
                        </div>
                        <div className="closeButton">x</div>
                    </div>

                    <div className="SimpleModalBody">
                        {this.props.body}
                    </div>
                    <div className="SimpleModalBottomButtonContainers">
                        {this.props.done &&
                            <div className='SimpleModalDoneButton'>Done</div>
                        }
                    </div>
                </div>
            </div>
        )
    }
}