import React, { Component, useState } from 'react'
import "./styles/JsonModal.css"
/*
Required Props: 
backgroundDim = bool
contents = object
close = callback
open = bool
size = string("small", "medium", "large") - default: large

optional
done = callback
*/
export default class SimpleModal extends Component {
    constructor(props){
        super(props)
        this.state = {
            style: {},
            contents: {},
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot){
        if (this.props !== prevProps) {
            this.setState({
                contents: this.props.contents
            })
            switch(this.props.size){
                case("small"):
                this.setState({
                    style: {
                        height: "50vh",
                        width: "50%"
                    }
                });
                break;
                
                case("medium"):
                this.setState({
                    style:{
                        height: "60vh",
                        width: "60%"
                    }
                });
                break;
                
                default:
                case("large"):
                this.setState({
                    style: {
                        height: "80vh",
                        width: "80%"
                    }
                });
                break;
            }
        }
    }

    render(){
        if(this.props.open){
            return (
                <div className="SimpleModalContainer">
                    {this.props.backgroundDim &&
                        <div className="dimBackground" onClick={this.props.close}/>
                    }
                    <div className="SimpleModal" style={this.state.style}>
                        <div className="SimpleModalTitleContainer">
                            <div className="SimpleModalTitle">
                                {this.state.contents.title}
                            </div>
                            <div className="closeButton" onClick={this.props.close}>x</div>
                        </div>
    
                        <div className="SimpleModalBody">
                            <div>
                                {this.state.contents.body}
                            </div>
                        </div>
                        <div className="SimpleModalBottomButtonContainers">
                            {this.props.done &&
                                <div className='SimpleModalDoneButton' onClick={this.props.done}>Done</div>
                            }
                        </div>
                    </div>
                </div>
            )
        }
        else {
            return null
        }
    } 
}