import react from "react"

class Navigation extends react.Component
{
    render(){
    return(
        <div>This Is {this.props.quality} Navigation for {this.props.place}</div>
    )
}
}

export default Navigation;