import React from "react"

export default class Search extends React.Component {
    constructor(props) {
        super(props)
        //Initial value
        this.state = {value: ""}
    }

    onChange = (event) => {
        let newValue = event.target.value
        this.setState({
            //update value
            value: newValue
        }, () => {
            //Lift state
            if(this.props.onSearch){
                this.props.onSearch(newValue)
            }
        })
    }

    render() {
        return <input className="search" onChange={this.onChange} value={this.state.value} />
    }
 }
 