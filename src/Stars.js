import React from "react"

export default class Stars extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            score: props.score,
            hoverScore: props.score
        }
    }

    onClick(newScore) {
        this.setState({
            score: newScore,
            hoverScore: newScore
        })
        if(this.props.onScore){
            this.props.onScore(newScore)
        }
    }
    
    onMouseOver(hoverScore) {
        this.setState({
            hoverScore: hoverScore
        })
    }

    onMouseOut = () => {
        this.setState({
            hoverScore: this.state.score
        })
    }

    render() {
        return (
            <div className="stars" onMouseOut={this.onMouseOut}>
                {
                    Array(this.props.max).fill().map((_, i) =>
                        <div
                            key={i}
                            onClick={() => this.onClick(i+1)}
                            onMouseOver={() => this.onMouseOver(i+1)}>
                            {(i < this.state.hoverScore ? Stars.EMPTY_STAR : Stars.FILLED_STAR)}
                        </div>
                    )
                }
            </div>
        )
    }
}

Stars.EMPTY_STAR = String.fromCharCode(9733)
Stars.FILLED_STAR = String.fromCharCode(9734)