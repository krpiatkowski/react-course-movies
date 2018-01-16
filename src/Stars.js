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
            <div class="stars" onMouseOut={this.onMouseOut}>
                {
                    Array(this.props.max).fill().map((_, i) =>
                        <div
                            key={i}
                            onClick={() => this.onClick(i)}
                            onMouseOver={() => this.onMouseOver(i)}>
                            {String.fromCharCode(i <= this.state.hoverScore ? 9733 : 9734)}
                        </div>
                    )
                }
            </div>
        )
    }
}