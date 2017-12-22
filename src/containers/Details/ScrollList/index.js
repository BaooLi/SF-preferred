import React, {Component} from 'react'
export default class ScrollList extends Component {
    constructor(){
        super();
        this.state={flag:false}
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.element) {
            let id=this.props.id
            nextProps.element.addEventListener('scroll', (event) => {
                this.timer?clearInterval(this.timer):null
                this.timer=setTimeout(()=>{
                    let {offsetHeight, scrollHeight, scrollTop} = nextProps.element
                    if(offsetHeight + scrollTop + 20 > scrollHeight){
                        this.props.isShow(true)
                        nextProps.element.addEventListener('touchend',()=>{
                            this.props.history.push(`/pictureTextDetail/${id}`)
                            this.props.isShow(false)
                        })
                    }
                },10)
            })
        }
    }

    render() {
        return (
            <div>
                {this.props.children}
            </div>
        )
    }
}
