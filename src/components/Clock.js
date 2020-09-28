import React from 'react';
import moment from 'moment';
import '../styles/Clock.css'
class Clock extends React.Component{
    constructor() {
        super()
        this.state = {
            time: moment().format('LTS'),
            one: true,
            two: false,
            three: false,
            four: false,
            background: {
                backgroundColor: "#fff"
            },
            class: ''
        }

    }
    componentDidMount() {
        setInterval(()=>{
            if(this.state.one == true) {
                this.setState({
                    time: moment().format('LTS')
                })
            }
            else if(this.state.four == true){
                this.setState({
                    time: moment().format('LT')
                })
            }
        },1000)
    }

    render() {
        return(

            <div id="boxed">
							<div className="boxed">{this.state.time}</div>
								 </div>


        )
    }
}

export default Clock
